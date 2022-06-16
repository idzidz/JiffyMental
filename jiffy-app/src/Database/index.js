const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('../Database');

app.use(cors());
app.use(express.json());

app.get('/api/getUser/:username/:password', async (req, res) => {
    try{
        const db = await pool.query('SELECT * FROM users WHERE username = $1 and password = $2', [req.params.username, req.params.password]);
        console.log(db);
        res.json(db.rows[0]);


    } catch (err) {
        console.log(err);
    }
})

// This API can only be called once it has been confirmed that the user exists.
app.get('/api/getUserType/:username', async (req, res) => {
    try{
        // Get the user ID of the user
        const dbUserID = await pool.query('SELECT user_id FROM users WHERE username = $1', [req.params.username]);
        const userID = dbUserID.rows[0].user_id;
        // console.log("Given user ID is: " + userID);

        const db01 = await pool.query('SELECT * FROM users JOIN doctor ON users.user_id = doctor.user_id WHERE users.user_id = $1', [0])
        const db02 = await pool.query('SELECT * FROM users JOIN patient ON users.user_id = patient.user_id WHERE users.user_id = $1', [0])
        const foundUser = db01.rows[0].username;
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

app.listen(3000, () => {
    console.log("server has started on port 3000")
});