import React, {useState} from "react";
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';


const Login = () => {

    const [errorMessage, setErrorMessage] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("../signup");
    }

    const handleForgotpwd = () => {
        navigate("../forgotPwd");
    }


    const mockDatabase = [
        {
            username: "patient01",
            password: "password",
            type: "patient"
        },
        {
            username: "doctor01",
            password: "password",
            type: "doctor"
        }
    ]

    const errors = {
        usernameValidation: "invalid credentials",
        passwordValidation: "invalid credentials"
    }

    const handleSubmit = async (event) => {
        // Stops page reload
        event.preventDefault();

        const { usernameValidation, passwordValidation } = document.forms[0];
        let userExists = false;
        let userType = "";

        console.log(usernameValidation.value);

        const userData = mockDatabase.find((user) => user.username === usernameValidation.value)


        // const timer01 = performance.now();
        // Query database to see if user exists, return appropriate response on UI
        try{
            const url = "http://localhost:3000/api/getUser/" + usernameValidation.value + "/" + passwordValidation.value
            const test = await fetch(url);
            console.log(test);

            try{
                const val = await test.json();
                if (usernameValidation.value === val.username && passwordValidation.value === val.password){
                    userExists = true;
                    console.log("user exists");
                    try{
                        const url = "http://localhost:3000/api/getUserType/" + usernameValidation.value;
                        const test = await fetch(url);
                        userType = await test.json();
                        console.log(userType);
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
            setIsSubmitted(true);
            if (userType === "patient"){
                navigate("../patient")
            }else if (userType === "doctor"){
                navigate("../doctor")
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
                <div className="title">Log in</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
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