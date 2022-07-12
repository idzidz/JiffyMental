import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';

const ChangeEmail = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = document.forms[0];
        const emailRegex = new RegExp ('^[A-Za-z0-9]+@[A-Za-z0-9]+[.][A-Za-z]+$');
        const validEmail = emailRegex.test(email.newEmail.value);

        if (email.newEmail.value === userInfo.email){
            alert("This is already your email");
        } else if (validEmail){
            try {
                const url = "http://localhost:3000/api/changeEmail/" + localStorage.getItem("userID") + "/" + email.newEmail.value;
                const query = await fetch(url, {
                    method: "PUT",
                    headers: {}
                })
                const result = await query.json();
                if (result){
                    alert("Email address has been successfully changed");
                    window.location.reload();
                } else{
                    alert("Email address has failed to change");
                }
            } catch (e) {
                console.log("Caught error: " + e);
            }
        } else if (!validEmail){
            alert("You have entered an invalid email address." + "\n" + "Please enter an email following the format: \"Test@Email.Com\"");
        }
    }

    useEffect(() => {
       async function getUserDetails() {
           try {
               const url = "http://localhost:3000/api/getUserDetails/" + localStorage.getItem("userID") + "/" + localStorage.getItem("userType")
               const test = await fetch(url);
               const userData = await test.json();
               setUserInfo({
                   email: userData.email_address,
                   password: userData.password
               });

           } catch (e) {
               console.log("Caught error: " + e);
           }
       }
       getUserDetails();
    }, []);

    const renderForm = (
        <Container>
            <Col>
                <div className="login">
                    <div className="login-form">
                        <div className="title">Change Email</div>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="input container">
                                    <Row><label>Current Email</label></Row>
                                    <input type="text" value={userInfo.email} disabled />

                                </div>
                                <div className="input container" style={{paddingTop:"20px"}}>
                                    <Row><label>New Email</label></Row>
                                    <input type="text" name="newEmail" required></input>
                                </div>
                                <div className="button-container">
                                    <input type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Col>
        </Container>
    )

    return (
        <div>
            {localStorage.length === 0 ? window.location.href="/login" : renderForm}
        </div>
    );
}

export default ChangeEmail;