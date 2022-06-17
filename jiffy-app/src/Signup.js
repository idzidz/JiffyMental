import {Container, Row, Col} from 'react-bootstrap';
import {useState} from "react";

const Signup = () => {

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

        console.log("Radio button: " + chosenRadio);
        console.log("Patient status: " + patientVisibility);
        console.log("Doctor status: " + doctorVisibility);

    }

    const handleSubmit = async (event) => {

    }

    const renderPatientForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Patient Username </label>
                    <input type="text" name="usernameValidation" required />
                    {/*{renderErrorMessage("usernameValidation")}*/}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="passwordValidation" required />
                    {/*{renderErrorMessage("passwordValidation")}*/}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    const renderDoctorForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Doctor Username </label>
                    <input type="text" name="usernameValidation" required />
                    {/*{renderErrorMessage("usernameValidation")}*/}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="passwordValidation" required />
                    {/*{renderErrorMessage("passwordValidation")}*/}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
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

                <Row style={{textAlign:"center"}}>
                    {patientVisibility === "visible" ? renderPatientForm : renderDoctorForm}
                </Row>


            </Container>

        </div>
    )
}

export default Signup;