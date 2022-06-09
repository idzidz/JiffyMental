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

    // const handleDoctor = () => {
    //     console.log('doctor button');
    //     <Link to="login"></Link>
    // }
    //
    // const handlePatient = () => {
    //     console.log('patient button');
    // }

    return (
        <div className="home">
            <h2 className="headerText">Welcome to Jiffy Health!</h2>
            <h4 className="subText">To get started, please select the appropriate button below</h4>

            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Link to="login">
                            <button>Doctors</button>
                        </Link>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Link to="briefQuestionnaire">
                            <button>Patients</button>
                        </Link>
                    </Col>
                    <Col></Col>

                </Row>
            </Container>


        </div>
    )
}

export default Home;