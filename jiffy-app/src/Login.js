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
        passwordValidation: "invalid password"
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { usernameValidation, passwordValidation } = document.forms[0];
        const userExists = false;

        const userData = mockDatabase.find((user) => user.username === usernameValidation.value)


        // Query database to see if user exists, return appropriate response on UI
        try{
            const url = "http://localhost:3000/api/getUser/" + usernameValidation.value + "/" + passwordValidation.value
            const test = await fetch(url);
            console.log(test);

            try{
                const val = await test.json();
                if (usernameValidation.value === val.username && passwordValidation.value === val.password){
                    let userExists = true;
                    console.log("user exists");
                }
            }catch (e){
                console.log(e);
                console.log("user does not exist");
            }
        } catch (e){
            console.log(e);
        }




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