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



app.post('/emailer/pwdRecovery/:email/:pwd', (req, res) => {
    const email = req.params.email;
    const pwd = req.params.pwd;
    // const subject = req.params.subject;
    // const name = req.params.name;
    // const company = req.body.company;
    // console.log(req);

    const mailOptions = {
        from: "Jiffy Mental",
        to: email,
        subject: "Jiffy Mental Health Password Recovery",
        html: "<html><body>" + "You have requested your password for your Jiffy Mental Health account" + "<br />" + "The password for the account under " + email + " is: " + pwd  + "<br />" + "<br />" + "This email was automatically generated, please do not reply to it." + "</body></html>"
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