const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('../Database');

app.use(cors());
app.use(express.json());

//GETTERS
//
//

// Attempts to fetch user using given username and password.
app.get('/api/getUser/:username/:password', async (req, res) => {
    try {
        const db = await pool.query('SELECT * FROM users WHERE username = $1 and password = $2', [req.params.username, req.params.password]);
        console.log(db);
        res.json(db.rows[0]);


    } catch (err) {
        console.log(err);
    }
})

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
})

// SETTERS
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
})

// Creates a new Patient row in the Patient table.
app.post('/api/createPatient/:username/:password/:firstname/:lastname/:homeaddress/:email/:credit', async (req, res) => {
    try {
        const createUser = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [req.params.username, req.params.password]);
        const newUserID = await pool.query('SELECT user_id FROM users where username = $1', [req.params.username]);
        const toBeInserted = newUserID.rows[0].user_id;

        console.log(toBeInserted);

        const newPatient = await pool.query('INSERT into patient (user_id, first_name, last_name, credit_card, home_address, email_address) VALUES ($1, $2, $3, $4, $5, $6)',
            [toBeInserted, req.params.firstname, req.params.lastname, req.params.credit, req.params.homeaddress, req.params.email]);



        res.json("true");

    } catch (e) {
        console.log(e);
    }
})

// Creates a new Doctor row in the Doctor table.
app.post('/api/createDoctor/:username/:password/:firstname/:lastname/:spec/:rate/:email', async (req, res) => {
    try {

    } catch (e) {
        console.log(e);
    }
})



app.listen(3000, () => {
    console.log("server has started on port 3000")
});