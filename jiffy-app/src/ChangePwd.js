import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';

const ChangePwd = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const pwd = document.forms[0];

        try {
            const url = "http://localhost:3000/api/changePassword/" + localStorage.getItem("userID") + "/" + pwd.newPwd.value;
            const query = await fetch(url, {
                method: "PUT",
                headers: {}
            })
            const result = await query.json();
            if (result){
                alert("Password has been successfully changed");
                window.location.reload();
            } else {
                alert("Password has failed to change");
            }
        } catch (e) {
            console.log("Caught error: " + e);
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
                        <div className="title">Change Password</div>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="input container">
                                    <Row><label>Current Password</label></Row>
                                    <input type="text" value={userInfo.password} disabled />

                                </div>
                                <div className="input container" style={{paddingTop:"20px"}}>
                                    <Row><label>New Password</label></Row>
                                    <input type="text" name="newPwd" required></input>
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

export default ChangePwd;