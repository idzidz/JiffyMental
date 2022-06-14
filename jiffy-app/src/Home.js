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
                <Row style={{textAlign: "center", paddingBottom: "50px"}}>
                    <Col>
                        <Link to="login">
                            <button style={{width: "300px"}}>Doctors</button>
                        </Link>
                    </Col>
                </Row>

                <Row style={{textAlign: "center"}}>
                    <Col>
                        <Link to="briefQuestionnaire">
                            <button style={{width: "300px"}}>Patients</button>
                        </Link>
                    </Col>

                </Row>
            </Container>


        </div>
    )
}

export default Home;