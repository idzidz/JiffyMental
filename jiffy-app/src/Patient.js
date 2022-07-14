import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Link, useNavigate} from "react-router-dom";
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
                <h2 className="headerText">Welcome {user.first_name}!</h2>
            </Row>
            <Row>
                <h2 className="headerText" style={{paddingBottom:"50px"}}>Click on any of the buttons below to proceed</h2>
            </Row>


            <Row style={{textAlign:"center", paddingBottom:"50px"}}>
                <Col>
                    <Link to="../createRequest">
                        <button style={{width: "300px", height:"75px"}}>Create an appointment request</button>
                    </Link>
                </Col>
            </Row>

            <Row style={{textAlign:"center", paddingBottom:"50px"}}>
                <Col>
                    <Link to="../myAppointments">
                        <button style={{width: "300px", height:"75px"}}>View all of my requests and appointments</button>
                    </Link>
                </Col>
            </Row>

            <Row style={{textAlign:"center", paddingBottom:"50px"}}>
                <Col>
                    <Link to="../myHealth">
                        <button style={{width: "300px", height:"75px"}}>Track my health</button>
                    </Link>
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