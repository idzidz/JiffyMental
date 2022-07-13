import React, {useState} from "react";
import ReactDOM from "react-dom";
import {useNavigate, Link} from "react-router-dom";
import {Container, Row, Col, Card} from 'react-bootstrap';
import {useHref} from "react-router";


const MyAccount = () => {

    const navigate = useNavigate();

    const renderForm = (
        <div>

            <Row style={{textAlign:"center", paddingBottom:"50px"}}>
                <h2 className="headerText">My Account</h2>
                <h4 className="subText">Click on any of the following buttons to view/modify your account</h4>
            </Row>

            <Row style={{textAlign:"center", paddingBottom:"50px"}}>
                <Col>
                    <Link to="../changeEmail">
                        <button style={{width: "300px"}}>Change Email</button>
                    </Link>
                </Col>
            </Row>

            <Row style={{textAlign:"center", paddingBottom:"50px"}}>
                <Col>
                    <Link to="../changePassword">
                        <button style={{width: "300px"}}>Change Password</button>
                    </Link>
                </Col>
            </Row>

            <Row style={{textAlign:"center", paddingBottom:"50px"}}>
                <Col>
                    <Link to="../myAppointments">
                        <button style={{width: "300px"}}>My Appointments</button>
                    </Link>
                </Col>
            </Row>

        </div>
    );


    return (
        <div>
            {localStorage.length === 0 ? window.location.href="/login" : renderForm}

        </div>
    )
}

export default MyAccount;