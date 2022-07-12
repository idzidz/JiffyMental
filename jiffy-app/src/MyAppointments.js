import React, {useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';

const MyAppointments = () => {


    const renderForm = async () => {
        <div>
            <h4 className="subText">todo: account modifications (email, password)</h4>
        </div>
    }

    return (
        <div>
            {localStorage.length === 0 ? window.location.href="/login" : renderForm}

        </div>
    );
}

export default MyAppointments;