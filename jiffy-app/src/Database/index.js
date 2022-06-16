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

app.listen(3000, () => {
    console.log("server has started on port 3000")
});