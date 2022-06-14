import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

const BriefQ = () => {
    return(
        <div>

            <Row style={{textAlign:"center"}}>
                <h2 className="headerText">A few quick questions</h2>
                <h4 className="subText">Please click on a situation you are experiencing, if any</h4>
                <h4 className="subText">If you are not experiencing any of these situations or would like to skip this process, press skip</h4>
            </Row>


            <Row style={{textAlign:"center", paddingBottom:"50px"}}>
                <Col>
                    <Link to="../gads7">
                        <button style={{width: "300px"}}>Thoughts about self-harm</button>
                    </Link>
                </Col>
            </Row>

            <Row style={{textAlign:"center", paddingBottom:"50px"}}>
                <Col>
                    <Link to="../gads7">
                        <button style={{width: "300px"}}>Eating a lot less than usual</button>
                    </Link>
                </Col>
            </Row>

            <Row style={{textAlign:"center", paddingBottom:"100px"}}>
                <Col>
                    <Link to="../gads7">
                        <button style={{width: "300px"}}>Irregular sleeping schedule</button>
                    </Link>
                </Col>
            </Row>

            <Row style={{textAlign:"center"}}>
                <Col>
                    <Link to="../login">
                        <button style={{width: "300px"}}>Skip</button>
                    </Link>
                </Col>

            </Row>


        </div>




    )
}

export default BriefQ;