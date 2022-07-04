import {Container, Row, Col} from 'react-bootstrap';
import {useState} from "react";
import {wait} from "@testing-library/user-event/dist/utils";
import {useNavigate} from "react-router-dom";

const Signup = () => {

    // const timer01 = performance.now();
    // const timer02 = () => {
    //     console.log(performance.now() - timer01);
    // }

    const [patientVisibility, setPatientVisibility] = useState("visible");
    const [doctorVisibility, setDoctorVisibility] = useState("hidden");

    const [chosenRadio, setChosenRadio] = useState("");

    const accountTypes = [
        {
            id: 0,
            type: "doctor"
        },
        {
            id: 1,
            type: "patient"
        }
    ]

    const navigate = useNavigate();

    const handleReturnLogin = () => {
        navigate("../login");
    }

    const handleAccountType = (event) => {

        if (event.target.value === "patient"){
            setPatientVisibility("visible");
            setDoctorVisibility("hidden");
        }else if (event.target.value === "doctor"){
            setPatientVisibility("hidden");
            setDoctorVisibility("visible");
        }else {
            setPatientVisibility("hidden");
            setDoctorVisibility("hidden");
        }

        // todo: make the forms wipe when switching between patient and doctor radios
        // document.getElementByName("form").reset();

        console.log("Radio button: " + chosenRadio);
        console.log("Patient status: " + patientVisibility);
        console.log("Doctor status: " + doctorVisibility);

    }

    const [errorMessage, setErrorMessage] = useState({});

    const errors = {
        username: "invalid credentials",
        password: "invalid credentials"
    }

    const handlePatientSubmit = async (event) => {
        // Stops page reload
        event.preventDefault();
        const { patientUsername, patientPassword, patientFirstName, patientLastName, patientAddress, patientEmail, patientCredit } = document.forms[0];

        try {
            const url = "http://localhost:3000/api/createPatient/" + patientUsername.value.trim() + "/" + patientPassword.value.trim() + "/" + patientFirstName.value.trim() + "/" +
                patientLastName.value.trim() +  "/" + patientAddress.value.trim() +  "/" + patientEmail.value.trim() + "/" + patientCredit.value.trim();
            const val = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            try {
                const foundVal = await val.json();
                if (foundVal === "true"){
                    alert("Account created successfully!");
                }

            } catch (e) {
                console.log(e);
            }

        } catch (e) {
            console.log("x failed: " + e);
        }


        console.log(patientUsername.value.trim());
        console.log(patientPassword.value);
        console.log(patientFirstName.value);
        console.log(patientLastName.value);
        console.log(patientAddress.value.trim());
        console.log(patientEmail.value);
        console.log(patientCredit.value);

    }

    const handleDoctorSubmit = async (event) => {
        // Stops page reload
        event.preventDefault();
        const { doctorUsername, doctorPassword, doctorFirstName, doctorLastName, doctorEmail, doctorSpecialization, doctorRate } = document.forms[0];

        console.log(doctorUsername.value.trim());
        console.log(doctorPassword.value);
        console.log(doctorFirstName.value);
        console.log(doctorLastName.value);
        console.log(doctorEmail.value);
        console.log(doctorSpecialization.value);
        console.log(doctorRate.value);


    }

    const renderErrorMessage = (name) =>
        name === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
        );

    const renderPatientForm = (
        <Container>
            <div className="form">
                <form onSubmit={handlePatientSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="patientUsername" required />
                        {renderErrorMessage("patientUsername")}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="patientPassword" required />
                        {renderErrorMessage("patientPassword")}
                    </div>
                    <div className="input-container">
                        <label>Patient First Name </label>
                        <input type="text" name="patientFirstName" required />
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Patient Last Name </label>
                        <input type="text" name="patientLastName" required />
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Address </label>
                        <input type="text" name="patientAddress" required />
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Email </label>
                        <input type="text" name="patientEmail" required />
                        {/*{renderErrorMessage("passwordValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Credit Card </label>
                        <input type="text" name="patientCredit" required />
                        {/*{renderErrorMessage("passwordValidation")}*/}
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </Container>

    );

    const renderDoctorForm = (
        <Container>
            <div className="form">
                <form onSubmit={handleDoctorSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="doctorUsername" required />
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="doctorPassword" required />
                        {/*{renderErrorMessage("passwordValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Doctor First Name </label>
                        <input type="text" name="doctorFirstName" required />
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Doctor Last Name </label>
                        <input type="text" name="doctorLastName" required />
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Email </label>
                        <input type="text" name="doctorEmail" required />
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Specialization </label>
                        <input type="text" name="doctorSpecialization" required />
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Appointment Rate </label>
                        <input type="text" name="doctorRate" required />
                        {/*{renderErrorMessage("passwordValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Social Insurance Number </label>
                        <input type="text" name="doctorSocial" required />
                        {/*{renderErrorMessage("passwordValidation")}*/}
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </Container>
    );



    return (
        <div>

            <Container>

                <Row style={{textAlign:"center", paddingTop:"50px"}}>
                    <Col><h4 className="headerText">Please select the type of account you would like to create</h4></Col>
                </Row>

                <Row style={{textAlign:"center", paddingTop:"25px"}} >
                    <Col> Patient </Col>
                    <Col> Doctor </Col>
                </Row>

                <Row style={{textAlign:"center", visibility:"visible", paddingBottom:"25px"}} onChange={(event) => {handleAccountType(event)}}>
                    <Col> <input type="radio" value={accountTypes[1].type} name="r01" defaultChecked="true"/> </Col>
                    <Col> <input type="radio" value={accountTypes[0].type} name="r01"/> </Col>
                </Row>

                <div className="login-form">
                    <Row style={{textAlign:"center"}}>
                        {patientVisibility === "visible" ? renderPatientForm : renderDoctorForm}
                    </Row>
                </div>
                <Row style={{paddingTop:"50px", textAlign:"center", paddingBottom:"50px"}}>
                    <Col> <button onClick={handleReturnLogin} style={{width:"300px"}}> Return to Login</button></Col>
                </Row>

            </Container>

        </div>

    )
}

export default Signup;