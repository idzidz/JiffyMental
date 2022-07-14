import {Container, Row, Col, Dropdown} from 'react-bootstrap';
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
    const [doctorSpec, setDoctorSpec] = useState("Select a specialization");

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

        console.log("Radio button: " + event.target.value);
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
            const url = "http://localhost:3000/api/createPatient/" + patientUsername.value.trim().toLowerCase() + "/" + patientPassword.value.trim() + "/" + patientFirstName.value.trim() + "/" +
                patientLastName.value.trim() +  "/" + patientAddress.value.trim() +  "/" + patientEmail.value.trim() + "/" + patientCredit.value.trim();
            const val = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            try {
                const foundVal = await val.json();
                if (foundVal === "true"){
                    alert("Patient account created successfully!");
                }

            } catch (e) {
                console.log(e);
                alert("Failed to create patient account");
            }

        } catch (e) {
            console.log("x failed: " + e);
            alert("Failed to create patient account");
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

        if (doctorSpec === "Select a specialization"){
            alert("Please select a specialization by clicking on the \"Specialization\" button");
            return;
        }

        let spec = "";

        switch(doctorSpec) {
            case "Clinical Psychology":
                spec = "CLINICAL_PSYCHOLOGY";
                break;
            case "Counselling Psychology":
                spec = "COUNSELLING_PSYCHOLOGY";
                break;
            case "Forensic Psychology":
                spec = "FORENSIC_PSYCHOLOGY";
                break;
            case "Health Psychology":
                spec = "HEALTH_PSYCHOLOGY";
                break;
            case "Industrial Psychology":
                spec = "INDUSTRIAL_PSYCHOLOGY";
                break;
            case "Organizational Psychology":
                spec = "ORGANIZATIONAL_PSYCHOLOGY";
                break;
            case "Neuropsychology":
                spec = "NEUROPSYCHOLOGY";
                break;
            case "Rehabilitation Psychology":
                spec = "REHABILITATION_PSYCHOLOGY";
                break;
            case "School Psychology":
                spec = "SCHOOL_PSYCHOLOGY";
                break;
            default:
                break;
        }

        try{
            const url = "http://localhost:3000/api/createDoctor/" + doctorUsername.value.trim().toLowerCase() + "/" + doctorPassword.value.trim() + "/" + doctorFirstName.value.trim() + "/" +
                                                                    doctorLastName.value.trim() + "/" + spec + "/" + doctorRate.value.trim() + "/" + doctorEmail.value.trim();
            const val = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            try {
                const foundVal = await val.json();
                if (foundVal === "true"){
                    alert("Doctor account created successfully!");
                }

            } catch (e) {
                console.log(e);
                alert("Failed to create doctor account");
            }

        } catch (e) {
            console.log(e);
            alert("Failed to create doctor account");
        }

        // console.log(doctorUsername.value.trim());
        // console.log(doctorPassword.value);
        // console.log(doctorFirstName.value);
        // console.log(doctorLastName.value);
        // console.log(doctorEmail.value);
        // console.log(doctorSpecialization.value);
        // console.log(doctorRate.value);


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
                        <input type="text" name="patientUsername" required/>
                        {renderErrorMessage("patientUsername")}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="patientPassword" required/>
                        {renderErrorMessage("patientPassword")}
                    </div>
                    <div className="input-container">
                        <label>Patient First Name </label>
                        <input type="text" name="patientFirstName" required/>
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Patient Last Name </label>
                        <input type="text" name="patientLastName" required/>
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Address </label>
                        <input type="text" name="patientAddress" required/>
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Email </label>
                        <input type="text" name="patientEmail" required/>
                        {/*{renderErrorMessage("passwordValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Credit Card </label>
                        <input type="text" name="patientCredit" required/>
                        {/*{renderErrorMessage("passwordValidation")}*/}
                    </div>
                    <div className="button-container">
                        <input type="submit"/>
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
                        <input type="text" name="doctorUsername" required/>
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="doctorPassword" required/>
                        {/*{renderErrorMessage("passwordValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Doctor First Name </label>
                        <input type="text" name="doctorFirstName" required/>
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Doctor Last Name </label>
                        <input type="text" name="doctorLastName" required/>
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        <label>Email </label>
                        <input type="text" name="doctorEmail" required/>
                        {/*{renderErrorMessage("usernameValidation")}*/}
                    </div>
                    <div className="input-container">
                        {/*<label>Specialization </label>*/}
                        <Dropdown style={{color: "red"}}>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                {doctorSpec}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(event) => {
                                    return setDoctorSpec("Clinical Psychology")
                                }}>Clinical Psychology</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => {
                                    return setDoctorSpec("Counselling Psychology")
                                }}>Counselling Psychology</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => {
                                    return setDoctorSpec("Forensic Psychology")
                                }}>Forensic Psychology</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => {
                                    return setDoctorSpec("Health Psychology")
                                }}>Health Psychology</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => {
                                    return setDoctorSpec("Industrial Psychology")
                                }}>Industrial Psychology</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => {
                                    return setDoctorSpec("Organizational Psychology")
                                }}>Organizational Psychology</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => {
                                    return setDoctorSpec("Neuropsychology")
                                }}>Neuropsychology</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => {
                                    return setDoctorSpec("Rehabilitation Psychology")
                                }}>Rehabilitation Psychology</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => {
                                    return setDoctorSpec("School Psychology")
                                }}>School Psychology</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                    <div className="input-container">
                        <label>Appointment Rate </label>
                        <input type="text" name="doctorRate" required/>
                        {/*{renderErrorMessage("passwordValidation")}*/}
                    </div>
                    <div className="button-container">
                        <input type="submit"/>
                    </div>
                </form>
            </div>

        </Container>
    );



    return (
        <div>

            <Container>

                {/*<Row style={{textAlign:"center", paddingTop:"50px"}}>*/}
                {/*    <Col><h4 className="headerText">Please select the type of account you would like to create</h4></Col>*/}
                {/*</Row>*/}





                <div className="login">
                    <div className="login-form">
                        <div className="title">Sign up</div>
                        <h4 className="subText">Please select the type of account <br /> you would like to create</h4>
                        <Row style={{textAlign:"center"}} >
                            <Col> Patient </Col>
                            <Col> Doctor </Col>
                        </Row>
                        <Row style={{textAlign:"center", visibility:"visible", paddingBottom:"25px"}} onChange={(event) => {handleAccountType(event)}}>
                            <Col> <input type="radio" value={accountTypes[1].type} name="r01" defaultChecked="true"/> </Col>
                            <Col> <input type="radio" value={accountTypes[0].type} name="r01"/> </Col>
                        </Row>

                        {patientVisibility === "visible" ? renderPatientForm : renderDoctorForm}
                    </div>
                </div>


                <Row style={{paddingTop:"50px", textAlign:"center", paddingBottom:"50px"}}>
                    <Col> <button onClick={handleReturnLogin} style={{width:"300px"}}> Return to Login</button></Col>
                </Row>

            </Container>

        </div>

    )
}

export default Signup;