import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

const BriefQ = () => {
    return(
        <div>
            <h2 className="headerText">A few quick questions</h2>
            <h4 className="subText">Please click on a situations you are experiencing, if any.</h4>
            <h4 className="subText">If you are not experiencing any of these situations, press continue.</h4>

            <Row>
                <Col/>
                <Col xs={8}>
                    <Link to="../gads7">
                        <button>Thoughts about self-harm</button>
                    </Link>
                </Col>
                <Col/>
            </Row>

            <Row>
                <Col/>
                <Col xs={8}>
                    <Link to="../gads7">
                        <button>Eating a lot less than usual</button>
                    </Link>
                </Col>
                <Col/>
            </Row>

            <Row>
                <Col/>
                <Col xs={8}>
                    <Link to="../gads7">
                        <button>Irregular sleeping schedule</button>
                    </Link>
                </Col>
                <Col/>
            </Row>

            <Row>
                <Col/>
                <Col xs={4}>
                    <Link to="../login">
                        <button>Continue</button>
                    </Link>
                </Col>

                <Col/>
            </Row>


        </div>




    )
}

export default BriefQ;