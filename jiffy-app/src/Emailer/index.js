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
    name: 'example.com',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: credentials.emailer.user,
        pass: credentials.emailer.appPass
    }
});


// Password recovery call
app.post('/emailer/pwdRecovery/:email/:pwd', (req, res) => {
    const email = req.params.email;
    const pwd = req.params.pwd;
    // const subject = req.params.subject;
    // const name = req.params.name;
    // const company = req.body.company;
    // console.log(req);

    const mailOptions = {
        from: "Jiffy Mental Health LLC.",
        to: email,
        subject: "Jiffy Mental Health Password Recovery",
        html: "<html><body><div>" +
            "<body>" +
            "<h1>Password Recovery</h1>" +
            "<p>You have requested your password for your Jiffy Mental Health account.</p>" +
            "<p>The password for the account under " + email + " is: " + pwd  + "<br /></p>" +
            "<h5>\This email was automatically generated, please do not reply to it.\</h5>" +
            "</body>" +
            "</div></body></html>"
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.json("Error: " + err);
        } else {
            console.log(info);
            res.json("Email sent: " + info.messageId);
        }
    });
});

// Appointment Request call
app.post('/emailer/appointmentRequest/:email/:date/:startTime/:commMethod', (req, res) => {
    const email = req.params.email;
    const date = req.params.date.substr(0, 10);

    const mailOptions = {
        from: "Jiffy Mental Health LLC.",
        to: email,
        subject: "Jiffy Mental Health Appointment Request Confirmation",
        html: "<html><body><div>" +
            "<body>" +
            "<h1>Appointment Request Confirmation</h1>" +
            "<p>Your appointment request has been posted.</p>" +
            "<p>The requested date is " + date + " at " + req.params.startTime + " EST using " + req.params.commMethod + " to connect with the health professional.</p>" +
            "<p>You will receive an email when your appointment is confirmed.</p>" +
            "<h5>\This email was automatically generated, please do not reply to it.\</h5>" +
            "</body>" +
        "</div></body></html>"
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.json("Error: " + err);
        } else {
            console.log(info);
            res.json("Email sent: " + info.messageId);
        }
    });
});

// Appointment approval call
app.post('/emailer/appointmentAccepted/:patientEmail/:doctorEmail/:date/:startTime/:commMethod', (req, res) => {
    const emailList = req.params.patientEmail + "," + req.params.doctorEmail;
    const date = req.params.date.substr(0, 10);

    const mailOptions = {
        from: "Jiffy Mental Health LLC.",
        to: emailList,
        subject: "Jiffy Mental Health Appointment Accepted Confirmation",
        html: "<html><body><div>" +
            "<body>" +
            "<h1>Appointment Accepted Confirmation</h1>" +
            "<p>Your appointment request has been accepted.</p>" +
            "<p>The date of the appointment is " + date + " at " + req.params.startTime + " EST via " + req.params.commMethod + " .</p>" +
            "<h5>\This email was automatically generated, please do not reply to it.\</h5>" +
            "</body>" +
            "</div></body></html>"
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.json("Error: " + err);
        } else {
            console.log(info);
            res.json("Email sent: " + info.messageId);
        }
    });
});

transporter.verify(function(error, success) {
    if (error) {
        console.log(credentials.emailer.user);
        console.log(credentials.emailer.appPass);
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

const port = 3030;
app.listen(port, () => {
    console.log("emailer has started on port 3030");
});