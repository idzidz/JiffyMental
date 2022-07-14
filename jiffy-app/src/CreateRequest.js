import React, {useState, useEffect} from "react";
import {Container, Row, Col, Dropdown} from 'react-bootstrap';

const CreateRequest = () => {

    const [communicationMethod, setCommunicationMethod] = useState("Preferred Communication Method");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { date, startTime, endTime, reqDesc} = document.forms[0];

        try {
            const additionalInfo = reqDesc.value.length === 0 ? "No additional information provided" : reqDesc.value;
            const url = "http://localhost:3000/api/createAppointmentRequest/" + localStorage.getItem("userID") + "/" +
                date.value + "/" + startTime.value + "/" + endTime.value + "/" + communicationMethod.toUpperCase().replace(" ", "_") + "/" + additionalInfo + "/" + "PENDING";
            const query = await fetch(url, {
                method: "POST",
                headers: {}
            })
            const result = await query.json();
            if (result){
                alert("Appointment request has been successfully created");
                const emailerUrl = "http://localhost:3030/emailer/appointmentRequest/" + localStorage.getItem("email") + "/" + date.value + "/" +
                    startTime.value + "/" + communicationMethod;
                const emailQuery = await fetch(emailerUrl, {method: "POST"});
                window.location.reload();
            }else{
                alert("Appointment request has failed to create");
            }
            console.log(result);

        } catch (e){
            console.log("Caught error: " + e);
            window.location.reload();
        }
    }

    const renderForm = (
        <Container>

            <div className="login">
                <div className="login-form">
                    <div className="title">Appointment request</div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="input container">
                                <Row><label>Best appointment date for you?</label></Row>
                                <input type="date" name="date" required/>
                            </div>
                            <div className="input container" style={{paddingTop:"20px"}}>
                                <Row><label>Preferred appointment time?</label></Row>
                                <input type="time" name="startTime" required/> <br />
                                To <br />
                                <input type="time" name="endTime" required/>
                            </div>
                            <div className="input container" style={{paddingTop:"20px"}}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {communicationMethod}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => {return setCommunicationMethod("Zoom")}}>Zoom</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {return setCommunicationMethod("Skype")}}>Skype</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {return setCommunicationMethod("Facetime")}}>Facetime</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {return setCommunicationMethod("Discord")}}>Discord</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {return setCommunicationMethod("Google Duo")}}>Google Duo</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {return setCommunicationMethod("Whatsapp")}}>Whatsapp</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {return setCommunicationMethod("Microsoft Teams")}}>Microsoft Teams</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>
                            <div className="input container" style={{paddingTop:"20px"}}>
                                <Row><label>Additional information/preferences</label></Row>
                                <textarea name="reqDesc" rows="5"></textarea>
                            </div>

                            <div className="button-container">
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Container>
    )

    return (
        <div>
            {localStorage.length > 0 && localStorage.userType === "patient" ? renderForm : window.location.href="/login"}
        </div>
    )
}

export default CreateRequest;