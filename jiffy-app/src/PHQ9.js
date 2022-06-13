import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const PHQ9 = () => {

    const surveyOptions = [
        {
            option: "Not at all",
            value: 0
        },
        {
            option: "Several days",
            value: 1
        },
        {
            option: "More than half",
            value: 2
        },
        {
            option: "Nearly every day",
            value: 3
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
    const navigate = useNavigate();

    const calculateScore = () => {
        if (typeof (Q01) !== 'undefined' && typeof (Q02) !== 'undefined' && typeof (Q03) !== 'undefined' && typeof (Q04) !== 'undefined' && typeof (Q05) !== 'undefined' &&
            typeof (Q06) !== 'undefined' && typeof (Q07) !== 'undefined' && typeof (Q08) !== 'undefined' && typeof (Q09) !== 'undefined') {

            let score = Number(Q01) + Number(Q02) + Number(Q03) + Number(Q04) + Number(Q05) + Number(Q06) + Number(Q07) + Number(Q08) + Number(Q09);

            if (score <= 19) {
                navigate("../login")
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
                Questionnaire (3 / 3)
            </h2>

            <h4 className="subText">
                Over the past two weeks, how often have you been bothered by any of the following problems?
            </h4>

            <Container>

                <Row style={{textAlign: "center", fontSize: "small"}}>
                    <Col xs={4}/>
                    <Col> {surveyOptions[0].option}  </Col>
                    <Col> {surveyOptions[1].option}  </Col>
                    <Col> {surveyOptions[2].option}  </Col>
                    <Col> {surveyOptions[3].option}  </Col>
                </Row>

                <Row className="radioAdjust" onChange={(event) => {return setQ01(event.target.value)}} style={{textAlign: "center", fontSize: "small", paddingBottom: "20px", borderBottom:"1px transparent"}}>
                    <Col xs={4}> Little interest or pleasure in doing things </Col>
                    <Col>  <input type="radio" value={surveyOptions[0].value} name="q01"/> </Col>
                    <Col>  <input type="radio" value={surveyOptions[1].value} name="q01"/> </Col>
                    <Col>  <input type="radio" value={surveyOptions[2].value} name="q01"/> </Col>
                    <Col>  <input type="radio" value={surveyOptions[3].value} name="q01"/> </Col>
                </Row>

                <Row className="radioAdjust" onChange={(event) => {return setQ02(event.target.value)}} style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Feeling down, depressed, or hopeless </Col>
                    <Col>  <input type="radio" value={surveyOptions[0].value} name="q02" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[1].value} name="q02" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[2].value} name="q02" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[3].value} name="q02" /> </Col>
                </Row>

                <Row className="radioAdjust" onChange={(event) => {return setQ03(event.target.value)}} style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Trouble falling or staying asleep, or sleeping too much </Col>
                    <Col>  <input type="radio" value={surveyOptions[0].value} name="q03" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[1].value} name="q03" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[2].value} name="q03" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[3].value} name="q03" /> </Col>
                </Row>

                <Row className="radioAdjust" onChange={(event) => {return setQ04(event.target.value)}} style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Feeling tired or having little energy </Col>
                    <Col>  <input type="radio" value={surveyOptions[0].value} name="q04" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[1].value} name="q04" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[2].value} name="q04" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[3].value} name="q04" /> </Col>
                </Row>

                <Row className="radioAdjust" onChange={(event) => {return setQ05(event.target.value)}} style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Poor appetite or overeating </Col>
                    <Col>  <input type="radio" value={surveyOptions[0].value} name="q05" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[1].value} name="q05" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[2].value} name="q05" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[3].value} name="q05" /> </Col>
                </Row>

                <Row className="radioAdjust" onChange={(event) => {return setQ06(event.target.value)}} style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Feeling bad about yourself - or that you are a failure or have let yourself or your family down </Col>
                    <Col>  <input type="radio" value={surveyOptions[0].value} name="q06" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[1].value} name="q06" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[2].value} name="q06" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[3].value} name="q06" /> </Col>
                </Row>

                <Row className="radioAdjust" onChange={(event) => {return setQ07(event.target.value)}} style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Trouble concentrating on things, such as reading the newspaper or watching television </Col>
                    <Col>  <input type="radio" value={surveyOptions[0].value} name="q07" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[1].value} name="q07" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[2].value} name="q07" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[3].value} name="q07" /> </Col>
                </Row>

                <Row className="radioAdjust" onChange={(event) => {return setQ08(event.target.value)}} style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual </Col>
                    <Col>  <input type="radio" value={surveyOptions[0].value} name="q08" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[1].value} name="q08" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[2].value} name="q08" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[3].value} name="q08" /> </Col>
                </Row>

                <Row className="radioAdjust" onChange={(event) => {return setQ09(event.target.value)}} style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Thoughts that would be better off dead or of hurting yourself in some way </Col>
                    <Col>  <input type="radio" value={surveyOptions[0].value} name="q09" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[1].value} name="q09" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[2].value} name="q09" /> </Col>
                    <Col>  <input type="radio" value={surveyOptions[3].value} name="q09" /> </Col>
                </Row>

                <Row style={{textAlign: "center", fontSize: "small", paddingBottom: "20px", paddingTop: "20px"}}>
                    <Col><button onClick={calculateScore} style={{width:"300px"}}>Continue</button></Col>
                </Row>

            </Container>
        </div>
    )
}

export default PHQ9;