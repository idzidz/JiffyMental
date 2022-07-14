import React, {useState, useEffect} from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

const MyAppointments = () => {

    const [aptRequests, setAptRequests] = useState([]);
    const [patientApt, setPatientApt] = useState([]);
    const [doctorApt, setDoctorApt] = useState([]);

    useEffect(() => {
        async function getAptRequests() {
            let aptRequestResult;
            try {
                const url = "http://localhost:3000/api/getAppointmentRequestsPatient/" + localStorage.getItem("userID");
                const query = await fetch(url);
                aptRequestResult = await query.json();
                console.log(aptRequestResult);
            } catch (e){
                console.log("Caught error: " + e);
                aptRequestResult = [];
            }
            setAptRequests(aptRequestResult);
        }
        async function getPatientApt() {
            let patientAptResult;
            try {
                const url = "http://localhost:3000/api/getAppointmentPatient/" + localStorage.getItem("userID");
                const query = await fetch(url);
                patientAptResult = await query.json();
                console.log(patientAptResult);
            } catch (e){
                console.log("Caught error: " + e);
                patientAptResult = [];
            }
            setPatientApt(patientAptResult);
        }
        async function getDoctorApt() {
            let doctorAptResult;
            try {
                const url = "http://localhost:3000/api/getAppointmentDoctor/" + localStorage.getItem("userID");
                const query = await fetch(url);
                doctorAptResult = await query.json();
                console.log(doctorAptResult);
            } catch (e){
                console.log("Caught error: " + e);
                doctorAptResult = [];
            }
            setDoctorApt(doctorAptResult);
        }
        getAptRequests();
        getPatientApt();
        getDoctorApt();
    }, []);

    const testFunction = (userInfo) => {
        console.log(userInfo);
    }

    const noRequests = (
        <div>
            <h4 className="subText" style={{paddingTop:"50px"}}>You have no appointments or requests at the moment!</h4>
        </div>
    )

    const renderForm = (
        <div>

        </div>
    )

    return (
        <div>

            {localStorage.length === 0 ? window.location.href = "/login" : null}
            {doctorApt.length === 0 && patientApt.length === 0 && aptRequests.length === 0 ? noRequests : null}

            {doctorApt.map((docApt, index) => (
                <Card key={index} style={{
                    width: 'auto',
                    marginLeft: '15%',
                    marginRight: '15%',
                    marginBottom: '10px',
                    marginTop: '10px'
                }}>
                    <Card.Body>
                        <Card.Title style={{textAlign: "center"}}>Appointment ID #{docApt.appointment_id}</Card.Title>
                        <Card.Text>
                            <b>Status:</b> {docApt.appointment_status}<br/>
                            <b>Date:</b> {docApt.appointment_date.substr(0, 10)}<br/>
                            <b>Time:</b> {docApt.start_time} - {docApt.end_time}<br/>
                            <b>Communication method:</b> {docApt.communication_method}<br/>
                            <b>Patient:</b> {docApt.first_name} {docApt.last_name}<br/>
                            <b>Patient Address:</b> {docApt.home_address}<br />
                            <b>Patient Billing CC:</b> {docApt.credit_card}<br />
                            <b>Patient Additional Info:</b> {docApt.request_description}<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            {patientApt.map((patApt, index) => (
                <Card key={index} style={{
                    width: 'auto',
                    marginLeft: '15%',
                    marginRight: '15%',
                    marginBottom: '10px',
                    marginTop: '10px'
                }}>
                    <Card.Body>
                        <Card.Title style={{textAlign: "center"}}>Appointment ID #{patApt.appointment_id}</Card.Title>
                        <Card.Text>
                            <b>Status:</b> {patApt.appointment_status}<br/>
                            <b>Date:</b> {patApt.appointment_date.substr(0, 10)}<br/>
                            <b>Time:</b> {patApt.start_time} - {patApt.end_time}<br/>
                            <b>Communication method:</b> {patApt.communication_method}<br/>
                            <b>Professional:</b> {patApt.first_name} {patApt.last_name}<br/>
                            <b>Professional Specialty:</b> {patApt.specialization.toLowerCase().replace("_", " ")}<br/>
                            <b>Hourly Rate:</b> ${patApt.appointment_rate}/hr <br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
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
                            <b>Status:</b> {aptReq.appointment_request_status}<br/>
                            <b>Date:</b> {aptReq.appointment_date.substr(0, 10)}<br/>
                            <b>Time:</b> {aptReq.start_time} - {aptReq.end_time}<br/>
                            <b>Communication method:</b> {aptReq.communication_method}<br/>
                            <b>Request description:</b> {aptReq.request_description}<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default MyAppointments;