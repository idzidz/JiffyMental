const credentials = require('../../credentials.json');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let nodemailer = require('nodemailer');
let app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3030;
app.listen(port, () => {
    console.log("emailer has started on port 3030");
});