const credentials = require('../../credentials.json');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let nodemailer = require('nodemailer');
let app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: credentials.emailer.user,
        pass: credentials.emailer.pass
    }
});



app.post('/emailer', (req, res, next) => {
    const email = req.body.email;
    const message = req.body.message;
    const subject = req.body.subject;
    const name = req.body.name;
    const company = req.body.company;

    const mailOptions = {
        from: name,
        to: email,
        subject: subject,
        html: '${name} from ${company} <noreply@$' +
            '{name}.com <br /> ${message}'
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(info);
            res.sendStatus(200);
        }
    });
});

transporter.verify(function(error, success) {
    if (error) {
        console.log(credentials.emailer.user);
        console.log(credentials.emailer.pass);
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

const port = 3030;
app.listen(port, () => {
    console.log("emailer has started on port 3030");
});