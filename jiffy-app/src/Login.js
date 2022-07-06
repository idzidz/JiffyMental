import React, {useState} from "react";
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {useHref} from "react-router";


const Login = () => {

    const [errorMessage, setErrorMessage] = useState({});
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("../signup");
    }

    const handleForgotpwd = () => {
        navigate("../forgotPwd");
    }


    const errors = {
        usernameValidation: "invalid credentials",
        passwordValidation: "invalid credentials"
    }

    const handleSubmit = async (event) => {
        // Stops page reload
        event.preventDefault();

        const { usernameValidation, passwordValidation } = document.forms[0];
        let usernameLower = usernameValidation.value.toLowerCase();
        let userExists = false;
        let userType = "";

        console.log(usernameValidation.value);


        // const timer01 = performance.now();
        // Query database to see if user exists, return appropriate response on UI
        try{
            const url = "http://localhost:3000/api/getUser/" + usernameLower + "/" + passwordValidation.value
            const test = await fetch(url);
            console.log(test);

            try{
                const val = await test.json();
                if (usernameLower === val.username && passwordValidation.value === val.password){
                    userExists = true;
                    console.log("user exists");
                    try{
                        const url = "http://localhost:3000/api/getUserType/" + usernameLower;
                        const test = await fetch(url);
                        userType = await test.json();
                        localStorage.setItem("userType", userType);
                        localStorage.setItem("userID", val.user_id);
                        localStorage.setItem("username", val.username);
                    }catch(e){
                        console.log("Failed to get user type: " + e);
                    }
                }
            }catch (e){
                setErrorMessage({name: "passwordValidation", message: errors.passwordValidation})
                console.log(e);
                console.log("user does not exist");
            }
        } catch (e){
            console.log(e);
        }
        // const timer02 = performance.now();
        // console.log("Time to query if user exists and get user type: " + (timer02 - timer01) + " milliseconds");

        if (userExists){
            if (userType === "patient"){
                window.location.href="/patient";
                // window.location.reload();
                // navigate("../patient")
                // this.props.push("../patient");
            }else if (userType === "doctor"){
                window.location.href="/doctor";
                // navigate("../doctor")
            }else{
                navigate("../error")
            }
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="usernameValidation" required />
                    {renderErrorMessage("usernameValidation")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="passwordValidation" required />
                    {renderErrorMessage("passwordValidation")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );


    return (
        <div className="login">

            <div className="login-form">
                {/*Login page not accessible once logged in*/}
                {localStorage.length === 0 ? null : (localStorage.getItem("userType") === "patient" ? window.location.href="/patient" : window.location.href="/doctor")}
                <div className="title">Log in</div>
                {renderForm}
            </div>

            <Container style={{textAlign: "center"}}>
                <Row style={{paddingTop:"50px"}}>
                    <Col> <button onClick={handleSignup} style={{width:"300px"}}> Sign up </button> </Col>
                </Row>
                <Row style={{paddingTop:"50px"}}>
                    <Col> <button onClick={handleForgotpwd} style={{width:"300px"}}> Forgot password</button></Col>
                </Row>


            </Container>
        </div>
    )
}

export default Login;