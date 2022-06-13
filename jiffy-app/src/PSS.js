import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const PSS = () => {

    const surveyOptions = [
        {
            option: "Never",
            value: 0
        },
        {
            option: "Almost never",
            value: 1
        },
        {
            option: "Sometimes",
            value: 2
        },
        {
            option: "Fairly often",
            value: 3
        },
        {
            option: "Very often",
            value: 4
        }
    ]

    const [Q01, setQ01] = useState();
    const [Q02, setQ02] = useState();
    const [Q03, setQ03] = useState();
    const [Q04, setQ04] = useState();
    const [Q05, setQ05] = useState();
    const [Q06, setQ06] = useState();
    const [Q07, setQ07] = useState();
    const [Q08, setQ08] = useState();
    const [Q09, setQ09] = useState();
    const [Q10, setQ10] = useState();
    const navigate = useNavigate();

    const calculateScore = () => {
        if (typeof (Q01) !== 'undefined' && typeof (Q02) !== 'undefined' && typeof (Q03) !== 'undefined' && typeof (Q04) !== 'undefined' && typeof (Q05) !== 'undefined' &&
            typeof (Q06) !== 'undefined' && typeof (Q07) !== 'undefined' && typeof (Q08) !== 'undefined' && typeof (Q09) !== 'undefined' && typeof (Q10) !== 'undefined') {

            let score = Number(Q01) + Number(Q02) + Number(Q03) + Number(Q04) + Number(Q05) +
                        Number(Q06) + Number(Q07) + Number(Q08) + Number(Q09) + Number(Q10);

            if (score <= 26) {
                navigate("../phq9")
            } else {
                navigate("../crisis")
            }
        } else {
            alert("There are some unanswered questions\n" +
                "Please answer all questions before continuing");
        }
    }

    return(
        <div>
            <h2 className="headerText">
                Questionnaire (2 / 3)
            </h2>

            <h4 className="subText">In the last month, how often have you:</h4>

            <Container>

                <div className="pssQ" style={{paddingTop:"-20px"}}>
                    <Row style={{fontWeight:"bold"}}>
                        <Col>Been upset because of something that happened unexpectedly?</Col>
                    </Row>
                    <Row style={{paddingTop:"10px"}}>
                        <Col> {surveyOptions[0].option}  </Col>
                        <Col> {surveyOptions[1].option}  </Col>
                        <Col> {surveyOptions[2].option}  </Col>
                        <Col> {surveyOptions[3].option}  </Col>
                        <Col> {surveyOptions[4].option}  </Col>
                    </Row>
                    <Row onChange={(event) => {return setQ01(event.target.value)}} style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q01"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q01"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q01"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q01"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q01"/> </Col>
                    </Row>
                    <Row className="divQ"></Row>
                </div>

                <div className="pssQ">
                    <Row style={{fontWeight:"bold"}}>
                        <Col>Felt that you were unable to control the important things in your life?</Col>
                    </Row>
                    <Row style={{paddingTop:"10px"}}>
                        <Col> {surveyOptions[0].option}  </Col>
                        <Col> {surveyOptions[1].option}  </Col>
                        <Col> {surveyOptions[2].option}  </Col>
                        <Col> {surveyOptions[3].option}  </Col>
                        <Col> {surveyOptions[4].option}  </Col>
                    </Row>
                    <Row onChange={(event) => {return setQ02(event.target.value)}} style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q02"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q02"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q02"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q02"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q02"/> </Col>
                    </Row>
                    <Row className="divQ"></Row>
                </div>

                <div className="pssQ">
                    <Row style={{fontWeight:"bold"}}>
                        <Col>Felt nervous and stressed?</Col>
                    </Row>
                    <Row style={{paddingTop:"10px"}}>
                        <Col> {surveyOptions[0].option}  </Col>
                        <Col> {surveyOptions[1].option}  </Col>
                        <Col> {surveyOptions[2].option}  </Col>
                        <Col> {surveyOptions[3].option}  </Col>
                        <Col> {surveyOptions[4].option}  </Col>
                    </Row>
                    <Row onChange={(event) => {return setQ03(event.target.value)}} style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q03"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q03"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q03"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q03"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q03"/> </Col>
                    </Row>
                    <Row className="divQ"></Row>
                </div>

                <div className="pssQ">
                    <Row style={{fontWeight:"bold"}}>
                        <Col>Felt confident about your ability to handle your personal problems?</Col>
                    </Row>
                    <Row style={{paddingTop:"10px"}}>
                        <Col> {surveyOptions[0].option}  </Col>
                        <Col> {surveyOptions[1].option}  </Col>
                        <Col> {surveyOptions[2].option}  </Col>
                        <Col> {surveyOptions[3].option}  </Col>
                        <Col> {surveyOptions[4].option}  </Col>
                    </Row>
                    <Row onChange={(event) => {return setQ04(event.target.value)}} style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q04"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q04"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q04"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q04"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q04"/> </Col>
                    </Row>
                    <Row className="divQ"></Row>
                </div>

                <div className="pssQ">
                    <Row style={{fontWeight:"bold"}}>
                        <Col>Felt that things were going your way?</Col>
                    </Row>
                    <Row style={{paddingTop:"10px"}}>
                        <Col> {surveyOptions[0].option}  </Col>
                        <Col> {surveyOptions[1].option}  </Col>
                        <Col> {surveyOptions[2].option}  </Col>
                        <Col> {surveyOptions[3].option}  </Col>
                        <Col> {surveyOptions[4].option}  </Col>
                    </Row>
                    <Row onChange={(event) => {return setQ05(event.target.value)}} style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q05"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q05"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q05"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q05"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q05"/> </Col>
                    </Row>
                    <Row className="divQ"></Row>
                </div>

                <div className="pssQ">
                    <Row style={{fontWeight:"bold"}}>
                        <Col>Found that you could not cope with all the things that you had to do?</Col>
                    </Row>
                    <Row style={{paddingTop:"10px"}}>
                        <Col> {surveyOptions[0].option}  </Col>
                        <Col> {surveyOptions[1].option}  </Col>
                        <Col> {surveyOptions[2].option}  </Col>
                        <Col> {surveyOptions[3].option}  </Col>
                        <Col> {surveyOptions[4].option}  </Col>
                    </Row>
                    <Row onChange={(event) => {return setQ06(event.target.value)}} style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q06"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q06"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q06"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q06"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q06"/> </Col>
                    </Row>
                    <Row className="divQ"></Row>
                </div>

                <div className="pssQ">
                    <Row style={{fontWeight:"bold"}}>
                        <Col>Been able to control irritations in your life?</Col>
                    </Row>
                    <Row style={{paddingTop:"10px"}}>
                        <Col> {surveyOptions[0].option}  </Col>
                        <Col> {surveyOptions[1].option}  </Col>
                        <Col> {surveyOptions[2].option}  </Col>
                        <Col> {surveyOptions[3].option}  </Col>
                        <Col> {surveyOptions[4].option}  </Col>
                    </Row>
                    <Row onChange={(event) => {return setQ07(event.target.value)}} style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q07"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q07"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q07"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q07"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q07"/> </Col>
                    </Row>
                    <Row className="divQ"></Row>
                </div>

                <div className="pssQ">
                    <Row style={{fontWeight:"bold"}}>
                        <Col>Felt that you were on top of things?</Col>
                    </Row>
                    <Row style={{paddingTop:"10px"}}>
                        <Col> {surveyOptions[0].option}  </Col>
                        <Col> {surveyOptions[1].option}  </Col>
                        <Col> {surveyOptions[2].option}  </Col>
                        <Col> {surveyOptions[3].option}  </Col>
                        <Col> {surveyOptions[4].option}  </Col>
                    </Row>
                    <Row onChange={(event) => {return setQ08(event.target.value)}} style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q08"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q08"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q08"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q08"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q08"/> </Col>
                    </Row>

                    <Row className="divQ"></Row>
                </div>

                <div className="pssQ">
                    <Row style={{fontWeight:"bold"}}>
                        <Col>Been angered because of things that happened that were outside of your control?</Col>
                    </Row>
                    <Row style={{paddingTop:"10px"}}>
                        <Col> {surveyOptions[0].option}  </Col>
                        <Col> {surveyOptions[1].option}  </Col>
                        <Col> {surveyOptions[2].option}  </Col>
                        <Col> {surveyOptions[3].option}  </Col>
                        <Col> {surveyOptions[4].option}  </Col>
                    </Row>
                    <Row onChange={(event) => {return setQ09(event.target.value)}} style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q09"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q09"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q09"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q09"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q09"/> </Col>
                    </Row>
                    <Row className="divQ"></Row>
                </div>

                <div className="pssQ">
                    <Row style={{fontWeight:"bold"}}>
                        <Col>Felt difficulties were piling up so high that you could not overcome them?</Col>
                    </Row>
                    <Row style={{paddingTop:"10px"}}>
                        <Col> {surveyOptions[0].option}  </Col>
                        <Col> {surveyOptions[1].option}  </Col>
                        <Col> {surveyOptions[2].option}  </Col>
                        <Col> {surveyOptions[3].option}  </Col>
                        <Col> {surveyOptions[4].option}  </Col>
                    </Row>
                    <Row onChange={(event) => {return setQ10(event.target.value)}} style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q10"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q10"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q10"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q10"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q10"/> </Col>
                    </Row>
                    <Row className="divQ"></Row>
                </div>

                <Row style={{textAlign: "center", fontSize: "small", paddingBottom: "20px", paddingTop: "20px"}}>
                    <Col><button onClick={calculateScore} style={{width:"300px"}}>Continue</button></Col>
                </Row>

            </Container>
        </div>
    )
}

export default PSS;