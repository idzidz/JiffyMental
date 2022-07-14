import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Link, useNavigate} from "react-router-dom";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

const Doctor = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
        user_id: "",
        first_name: "",
        last_name: "",
        specialization: "",
        appointment_rate: "",
        email_address: ""
    })

    const [aptRequests, setAptRequests] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function getUserDetails() {
            try{
                const url = "http://localhost:3000/api/getUserDetails/" + localStorage.getItem("userID") + "/" + localStorage.getItem("userType")
                const test = await fetch(url);
                const userData = await test.json();
                setUser({
                    username: userData.username,
                    password: userData.password,
                    user_id: userData.user_id,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    specialization: userData.specialization,
                    appointment_rate: userData.appointment_rate,
                    email_address: userData.email_address
                });

            } catch(e){
                console.log("Caught error: " + e);
            }
        }
        async function getAptRequests() {
            let aptRequestResult;
            try {
                const url = "http://localhost:3000/api/getAllAppointmentRequests";
                const query = await fetch(url);
                aptRequestResult = await query.json();
                console.log(aptRequestResult);
            } catch (e){
                console.log("Caught error: " + e);
                aptRequestResult = [];
            }
            setAptRequests(aptRequestResult);
        }
        getUserDetails();
        getAptRequests();
    }, []);

    const renderDoctorPage = (
        <Container>
            <Row>
                <h2 className="headerText">Welcome {user.first_name}!</h2>
            </Row>
            <Row>
                <h2 className="headerText" style={{paddingBottom:"50px"}}>Here is a list of all appointment requests</h2>
            </Row>

        </Container>
    )

    const noRequests = (
        <div>
            <h4 className="subText">There are no appointment requests at the moment!</h4>
        </div>
    )

    const handleAccept = async (aptReq) => {
        try {
            const url = "http://localhost:3000/api/createAppointment/" + aptReq.patient_user_id + "/" + user.user_id + "/" + aptReq.appointment_date + "/" +
                aptReq.start_time + "/" + aptReq.end_time + "/" + aptReq.communication_method + "/" + user.appointment_rate + "/" + "UPCOMING" + "/" +
                aptReq.request_description + "/" + aptReq.request_id;
            const query = await fetch(url, {method: "POST"});
            const result = await query.json();
            const patientBasicInfo = await fetch("http://localhost:3000/api/getUserInfo/" + aptReq.patient_user_id);
            const patientBasicInfoResult = await patientBasicInfo.json();
            if (result){
                alert("Appointment request " + aptReq.request_id + " by " + aptReq.first_name + " " + aptReq.last_name +
                    " on " + aptReq.appointment_date.substr(0, 10) + " at " + aptReq.start_time + " has been accepted!" +
                    "\nYou may go to 'My Account' and click on 'My Appointments' to see this appointment.");

                const emailerUrl = "http://localhost:3030/emailer/appointmentAccepted/" + patientBasicInfoResult.email_address + "/" +
                    localStorage.getItem("email") + "/" + aptReq.appointment_date + "/" + aptReq.start_time + "/" + aptReq.communication_method
                const emailQuery = await fetch(emailerUrl, {method: "POST"});
                window.location.reload();
            }


        } catch (e) {
            console.log("Caught error: " + e);
            window.location.reload();
        }
    }

    return(
        <div>
            {localStorage.length != 0 && (localStorage.getItem("userType") === "doctor") ? renderDoctorPage :
            (localStorage.length != 0 && (localStorage.getItem("userType") === "patient") ? navigate("../patient") : navigate("../login"))}
            {aptRequests.length === 0 ? noRequests : null}
            {aptRequests.map((aptReq, index) => (
                <Card key={index} style={{
                    width: 'auto',
                    marginLeft: '15%',
                    marginRight: '15%',
                    marginBottom: '10px',
                    marginTop: '10px'
                }}>
                    <Card.Body>
                        <Card.Title style={{textAlign: "center"}}>Request ID #{aptReq.request_id}</Card.Title>
                        <Card.Text>
                            <b>Patient name:</b> {aptReq.first_name} {aptReq.last_name}<br/>
                            <b>Status:</b> {aptReq.appointment_request_status}<br/>
                            <b>Date:</b> {aptReq.appointment_date.substr(0, 10)}<br/>
                            <b>Time:</b> {aptReq.start_time} - {aptReq.end_time}<br/>
                            <b>Communication method:</b> {aptReq.communication_method}<br/>
                            <b>Request description:</b> {aptReq.request_description}<br/>
                        </Card.Text>
                        <Button variant="success" onClick={() => handleAccept(aptReq)}>Accept request</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>

    )
}

export default Doctor;