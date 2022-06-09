import React, {useState} from "react";
import ReactDOM from "react-dom";

const Login = () => {

    const [errorMessage, setErrorMessage] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

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

        if (userData){
            if (userData.password !== passwordValidation.value){
                setErrorMessage({name: "passwordValidation", message: errors.passwordValidation})
            } else{
                setIsSubmitted(true);
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
                {isSubmitted ? <div>Successfully logged in</div> : renderForm}
            </div>
        </div>
    )
}

export default Login;