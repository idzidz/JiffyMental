import React, {useState} from "react";
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {useHref} from "react-router";


const MyAccount = () => {

    const navigate = useNavigate();

    const renderForm = (
        <div>
            <h4 className="subText">todo: account modifications (email, password)</h4>
            <h4 className="subText">Local storage length: {localStorage.length}</h4>
        </div>
    );


    return (
        <div>
            {localStorage.length === 0 ? window.location.href="/login" : renderForm}

        </div>
    )
}

export default MyAccount;