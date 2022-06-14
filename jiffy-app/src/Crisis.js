import {Container, Row, Col} from 'react-bootstrap';
import "./index.scss"

const Crisis = () => {

    const handleCall = () => {
        window.location.href = "tel:+18552423310";
    }

    const handleChat = () => {
        window.location.href = "https://dcontario.org/";
    }






    return(
        <div>

            <h2 className="headerText">We believe that you are currently in crisis</h2>

            <h2 className="headerText">Please contact one of the resources below</h2>

            <Container>

                <Row>
                    <Col> <h2 className="headerText">Hope for Wellness Help Line</h2> </Col>
                </Row>

                <Row style={{textAlign: "center", paddingBottom:"50px"}}>
                    <Col> <button onClick={handleCall} style={{width:"300px"}}>Call now</button> </Col>
                </Row>

                <Row>
                    <Col> <h2 className="headerText">Distress and Crisis Ontario</h2> </Col>
                </Row>

                <Row style={{textAlign: "center"}}>
                    <Col> <button onClick={handleChat} style={{width:"300px"}}>Chat now</button> </Col>
                </Row>



            </Container>

        </div>

    )
}

export default Crisis;