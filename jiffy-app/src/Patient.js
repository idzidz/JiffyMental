import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

const Patient = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
        user_id: "",
        first_name: "",
        last_name: "",
        credit_card: "",
        home_address: "",
        email_address: ""
    });

    const navigate = useNavigate();

    // const testStorage = () => {
    //     console.log("Testing storage")
    //     console.log(localStorage);
    //     console.log(localStorage.getItem("userType"));
    // }

    useEffect(() => {
        async function getUserDetails() {
            try {
                const url = "http://localhost:3000/api/getUserDetails/" + localStorage.getItem("userID") + "/" + localStorage.getItem("userType")
                const test = await fetch(url);
                const userData = await test.json();
                setUser({
                    username: userData.username,
                    password: userData.password,
                    user_id: userData.user_id,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    credit_card: userData.credit_card,
                    home_address: userData.home_address,
                    email_address: userData.email_address
                });

                console.log(user);
                console.log(userData);
            } catch(e){
                console.log("Caught error: " + e);
            }
        }
        getUserDetails();
    }, []);

    // This will only load if the user has logged in. Will check local storage contents.
    const renderPatientPage = (
        <Container>
            <Row>
                <Col>

                    <h4 className="subText">Welcome {user.first_name}</h4>
                    <h4 className="subText">Your information is as follows: <br /><br />
                    Account Type: {localStorage.getItem("userType")}<br />
                    Username: {user.username} <br />
                    Password: {user.password} <br />
                    User ID: {user.user_id} <br />
                    First Name: {user.first_name} <br />
                    Last Name: {user.last_name} <br />
                    Credit Card: {user.credit_card} <br />
                    Home Address: {user.home_address} <br />
                    Email Address: {user.email_address} <br />
                    </h4>

                </Col>
            </Row>
        </Container>

    )



    return(
        <div>
            {localStorage.length != 0 && (localStorage.getItem("userType") === "patient") ? renderPatientPage :
            (localStorage.length != 0 && (localStorage.getItem("userType") === "doctor") ? navigate("../doctor") : navigate("../login"))}
        </div>



    )
}

export default Patient;