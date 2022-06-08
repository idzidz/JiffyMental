import {Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {

    // const styles = StyleSheet.create({
    //     doctorButton: {
    //         position: 'relative',
    //         height: 500,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //     }
    // })

    const handleDoctor = () => {
        console.log('doctor button');
        <Link to="login"></Link>
    }

    const handlePatient = () => {
        console.log('patient button');
    }

    return (
        <div className="home">
            <h2 className="homeWelcome">Welcome to Jiffy Health!</h2>
            <h4 className="homeButtons">To get started, please select the appropriate button below</h4>

            <Row>
                <Link to="login">
                    <button>Doctors</button>
                </Link>

            </Row>

            <Row>
                <Link to="briefQuestionnaire">
                    <button>Patients</button>
                </Link>

            </Row>

        </div>
    )
}

export default Home;