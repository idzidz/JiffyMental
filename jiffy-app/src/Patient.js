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

    const testStorage = () => {
        console.log("Testing storage")
        console.log(localStorage);
        console.log(localStorage.getItem("userType"));
    }

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
                </Col>
            </Row>
        </Container>

    )



    return(
        <div>
            {localStorage.length != 0 && (localStorage.getItem("userType") === "patient") ? renderPatientPage : <h4 className="subText">Please log in</h4>}
        </div>



    )
}

export default Patient;