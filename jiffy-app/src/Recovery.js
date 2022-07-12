import {Container, Row, Col} from 'react-bootstrap';
import React, {useState} from "react";

const Recovery = () => {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { passwordRecovery } = document.forms[0];

        try{
            const url = "http://localhost:3000/api/forgotPassword/" + passwordRecovery.value;
            const val = await fetch(url);
            const result = await val.json();

            if (result === false){
                console.log("DNE")
                alert("If the provided email is associated with a user, then an email will be sent with your account information.");
            }else {
                console.log("Found account. Password is: " + result);

                // let transporter = nodemailer.createTransport({
                //     host: 'smtp.gmail.com',
                //     port: 587,
                //     secure: false,
                //     auth: {
                //         user: 'jiffymental@gmail.com',
                //         pass: 'Suitup1994!',
                //     },
                // });
                //
                // let info = await transporter.sendMail({
                //     from: '"Jiffy Mental" <jiffymental@gmail.com>',
                //     to: passwordRecovery.value,
                //     subject: 'Jiffy Mental Password Recovery',
                //     text: 'Your password is: ' + result,
                //     html: '<p>Your password is: ' + result + '</p>',
                // });
                //
                // console.log("Message sent: %s", info.messageId);
                // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


                alert("If the provided email is associated with a user, then an email will be sent with your account information.");
            }


        } catch(e){
            console.log("Error logged: " + e);
        }

        // console.log(passwordRecovery.value);
    }

    return (
        <Container>
            <div className="login">
                <div className="login-form">
                    <div className="title">Password recovery</div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="input container">
                                <Row>
                                    <label>Email address</label>
                                </Row>

                                <input type="text" name="passwordRecovery" required />
                                <div className="button-container">
                                    <input type="submit" />
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </Container>


    )
}

export default Recovery;