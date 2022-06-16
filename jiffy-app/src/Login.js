import React, {useState} from "react";
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {getUser} from "./GetAPIs.js";


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
        usernameValidation: "invalid username",
        passwordValidation: "invalid password"
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { usernameValidation, passwordValidation} = document.forms[0];

        const userData = mockDatabase.find((user) => user.username === usernameValidation.value)

        try{
            const test01 = getUser('izelj', 'password');
            console.log(test01);
        } catch(error) {console.log(error);}

        // try{
        //     const databaseTest = getUser("izelj", "password");
        //     console.log(databaseTest);
        // } catch (e){console.log(e);}


        if (userData){
            if (userData.password !== passwordValidation.value){
                setErrorMessage({name: "passwordValidation", message: errors.passwordValidation})
            } else{
                setIsSubmitted(true);
                if (userData.type === "patient"){
                    navigate("../patient")
                }else if (userData.type === "doctor"){
                    navigate("../doctor")
                }else{
                    navigate("../error")
                }
            }
        }else{
            setErrorMessage({name: "usernameValidation", message: errors.usernameValidation})
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