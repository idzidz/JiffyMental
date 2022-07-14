const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('../Database');

app.use(cors());
app.use(express.json());

//GET
//
//

// Gets all User data given a user ID
app.get('/api/getUserInfo/:userID', async (req, res) => {
    try{
        const db = await pool.query('SELECT * FROM users WHERE user_id = $1', [req.params.userID]);
        res.json(db.rows[0]);
    } catch (e) {
        console.log("Caught error: " + e);
        res.json("Error: " + e);
    }
})


// Attempts to fetch user using given username and password.
app.get('/api/getUser/:username/:password', async (req, res) => {
    try {
        const db = await pool.query('SELECT * FROM users WHERE username = $1 and password = $2', [req.params.username, req.params.password]);
        console.log(db);
        res.json(db.rows[0]);


    } catch (err) {
        console.log(err);
    }
});

// Given an email, checks if a user with the associated email exists.
// If it exists, emails the user what their password is.
app.get('/api/forgotPassword/:email', async (req, res) => {
    try {
        const db01 = await pool.query('SELECT * FROM users where email_address = $1', [req.params.email]);

        db01.rows.length > 0 ? res.json(db01.rows[0].password) : res.json(false);

    } catch (e) {
        console.log("Error caught: " + e);
    }
});

// Fetches user type using given username.
// This API can only be called once it has been confirmed that the user exists.
app.get('/api/getUserType/:username', async (req, res) => {
    try {
        // Get the user ID of the user
        console.log("Given username is: " + req.params.username);
        const dbUserID = await pool.query('SELECT user_id FROM users WHERE username = $1', [req.params.username]);
        const userID = dbUserID.rows[0].user_id;
        console.log("Given user ID is: " + userID);

        const db01 = await pool.query('SELECT * FROM users JOIN doctor ON users.user_id = doctor.user_id WHERE users.user_id = $1', [userID])
        const db02 = await pool.query('SELECT * FROM users JOIN patient ON users.user_id = patient.user_id WHERE users.user_id = $1', [userID])
        // const foundUser = db01.rows[0].username;
        // console.log("Found user is: " + foundUser);
        // console.log("Length of db01 result: " + db01.rows.length);
        // console.log("Length of db02 result: " + db02.rows.length);

        if (db01.rows.length > 0){
            res.json("doctor");
        }else if (db02.rows.length > 0){
            res.json("patient");
        }else{
            res.json("ERROR: User not found");
        }

    } catch (e) {
        console.log(e);
    }
});

// Given a userID and the type of user, we return all information about the user.
app.get('/api/getUserDetails/:userID/:userType', async (req, res) => {
    try {
        if (req.params.userType === "doctor") {
            const db = await pool.query('SELECT * FROM users JOIN doctor ON users.user_id = doctor.user_id WHERE users.user_id = $1', [req.params.userID]);
            res.json(db.rows[0]);
        } else if (req.params.userType === "patient") {
            const db = await pool.query('SELECT * FROM users JOIN patient ON users.user_id = patient.user_id WHERE users.user_id = $1', [req.params.userID]);
            res.json(db.rows[0]);
        } else {
            res.json("ERROR: User not found");
        }
    } catch (e) {
        console.log(e);
    }
})

// Get all appointment requests for Doctor page viewing
app.get('/api/getAllAppointmentRequests', async (req, res) => {
    try {
        const db = await pool.query('SELECT * FROM appointmentrequests JOIN patient ON appointmentrequests.patient_user_id = patient.user_id');
        res.json(db.rows);
    } catch (e) {
        console.log("Caught error: " + e);
    }
})

// Get all appointment requests using a given patient ID. Appointment requests only have a patient associated to them until a doctor accept it.
app.get('/api/getAppointmentRequestsPatient/:patientUserID', async (req, res) => {
    try {
        const db = await pool.query('SELECT * FROM appointmentrequests JOIN patient ON patient_user_id = user_id WHERE patient_user_id = $1', [req.params.patientUserID]);
        res.json(db.rows);
    } catch (e) {
        console.log("Error caught: " + e);
        res.json(false);
    }
});

// Get all appointments using a given Patient ID.
app.get('/api/getAppointmentPatient/:patientUserID', async (req, res) => {
    try {
        const db = await pool.query('SELECT * FROM appointment JOIN doctor ON doctor_user_id = user_id WHERE patient_user_id = $1', [req.params.patientUserID]);
        res.json(db.rows);
    } catch (e) {
        console.log("Error caught: " + e);
        res.json(false);
    }
});

// Get all appointments using a given Doctor ID.
app.get('/api/getAppointmentDoctor/:doctorUserID', async (req, res) => {
    try {
        const db = await pool.query('SELECT * FROM appointment JOIN patient ON patient_user_id = user_id WHERE doctor_user_id = $1', [req.params.doctorUserID]);
        res.json(db.rows);
    } catch (e) {
        console.log("Error caught: " + e);
        res.json(false);
    }
});



// POST
//
//

// Create a new user in the Users table.
// This is meant to be paired with Doctor or Patient creation.
// Returns the user_id required for Doctor or Patient row creation.
app.post('/api/createUser/:username/:password', async (req, res) => {
    try {
        const createUser = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [req.params.username, req.params.password]);
        const newUserID = await pool.query('SELECT user_id FROM users where username = $1', [req.params.username]);
        //console.log(newUserID.rows[0].user_id);
        res.json(newUserID.rows[0].user_id);

    } catch (e) {
        console.log(e);
    }
});

// Creates a new Patient row in the Patient table.
app.post('/api/createPatient/:username/:password/:firstname/:lastname/:homeaddress/:email/:credit', async (req, res) => {
    try {
        const createUser = await pool.query('INSERT INTO users (username, password, email_address) VALUES ($1, $2, $3)', [req.params.username, req.params.password, req.params.email]);
        const newUserID = await pool.query('SELECT user_id FROM users where username = $1', [req.params.username]);
        const toBeInserted = newUserID.rows[0].user_id;

        console.log("Patient ID to be inserted: " + toBeInserted);

        const newPatient = await pool.query('INSERT into patient (user_id, first_name, last_name, credit_card, home_address) VALUES ($1, $2, $3, $4, $5)',
            [toBeInserted, req.params.firstname, req.params.lastname, req.params.credit, req.params.homeaddress]);



        res.json("true");

    } catch (e) {
        console.log(e);
    }
});

// Creates a new Doctor row in the Doctor table.
app.post('/api/createDoctor/:username/:password/:firstname/:lastname/:spec/:payrate/:email', async (req, res) => {
    try {
        const createUser = await pool.query('INSERT INTO users (username, password, email_address) VALUES ($1, $2, $3)', [req.params.username, req.params.password, req.params.email]);
        const newUserID = await pool.query('SELECT user_id FROM users where username = $1', [req.params.username]);
        const toBeInserted = newUserID.rows[0].user_id;

        console.log("Doctor ID to be inserted: " + toBeInserted);

        const newDoctor = await pool.query('INSERT INTO doctor (user_id, first_name, last_name, specialization, appointment_rate) VALUES ($1, $2, $3, $4, $5)',
            [toBeInserted, req.params.firstname, req.params.lastname, req.params.spec, req.params.payrate]);

        res.json("true");

    } catch (e) {
        console.log(e);
    }
});

// Creates a new Appointment Request. These are made only by patients.
app.post('/api/createAppointmentRequest/:patientID/:aptDate/:startTime/:endTime/:commMethod/:reqDesc/:reqStatus', async (req, res) => {
    try {
        const createAppointmentRequest = await pool.query('INSERT INTO appointmentrequests (patient_user_id, appointment_date, start_time, end_time, communication_method, request_description, appointment_request_status) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [req.params.patientID, req.params.aptDate, req.params.startTime, req.params.endTime, req.params.commMethod, req.params.reqDesc, req.params.reqStatus]);
        res.json(true);
    } catch (e) {
        console.log("Caught error: " + e);
        res.json(false);
    }
});

// Creates a new Appointment. These are made by doctors accepting a patient appointment request.
// Request description is lost here. Can send it as part of the email to the doctor.
// The associated appointment request should be deleted at this point. Can pass the request ID here to delete it after using it.
app.post('/api/createAppointment/:patientID/:doctorID/:aptDate/:startTime/:endTime/:commMethod/:hourlyCost/:aptStatus/:addInfo/:aptRequestID', async (req, res) => {
   try {
       const createAppoint = await pool.query('INSERT INTO appointment (patient_user_id, doctor_user_id, appointment_date, start_time, end_time, communication_method, appointment_hourly_cost, appointment_status, request_description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
           [req.params.patientID, req.params.doctorID, req.params.aptDate, req.params.startTime, req.params.endTime, req.params.commMethod, req.params.hourlyCost, req.params.aptStatus, req.params.addInfo]);
       const deleteAppointRequest = await pool.query('DELETE FROM appointmentrequests WHERE request_id = $1', [req.params.aptRequestID]);
       res.json(true);
   } catch (e) {
       console.log("Caught error: " + e);
       res.json(false);
   }
});


// PUT
//
//

// Change a users password
app.put('/api/changePassword/:user_id/:password', async (req, res) => {
    try {
        const db = await pool.query('UPDATE users SET password = $1 WHERE user_id = $2', [req.params.password, req.params.user_id]);

        res.json(true);

    } catch(e) {
        console.log("Caught error: " + e);
    }
});

// Change a users email address
app.put('/api/changeEmail/:user_id/:email', async (req, res) => {
    try {
        const db = await pool.query('UPDATE users SET email_address = $1 WHERE user_id = $2', [req.params.email, req.params.user_id]);
        // if (req.params.accountType === "doctor") {
        //     const db = await pool.query('UPDATE doctor SET email_address = $1 WHERE user_id = $2', [req.params.email, req.params.user_id]);
        //     res.json("email changed to " + req.params.email);
        // } else if (req.params.accountType === "patient") {
        //     const db = await pool.query('UPDATE patient SET email_address = $1 WHERE user_id = $2', [req.params.email, req.params.user_id]);
        //     res.json("email changed to " + req.params.email);
        // } else {
        //     res.json("ERROR: User not found");
        // }

        res.json(true);

    } catch (e) {
        console.log("Caught error: " + e);
    }
});

/// DELETE
//
//





app.listen(3000, () => {
    console.log("server has started on port 3000");
});