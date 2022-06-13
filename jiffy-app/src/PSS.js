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

    const surveyQuestions = [
        {
            question: "01",
            questionText: "In the last month, how often have you been upset because of something that happened unexpectedly?",
        },
        {
            question: "02",
            questionText: " In the last month, how often have you felt that you were unable to control the important things in your life?",
        },
        {
            question: "03",
            questionText: "In the last month, how often have you felt nervous and stressed?",
        },
        {
            question: "04",
            questionText: "In the last month, how often have you felt confident about your ability to handle your personal problems?",
        },
        {
            question: "05",
            questionText: "In the last month, how often have you felt that things were going your way?",
        },
        {
            question: "06",
            questionText: "In the last month, how often have you found that you could not cope with all the things that you had to do?",
        },
        {
            question: "07",
            questionText: "In the last month, how often have you been able to control irritations in your life?",
        },
        {
            question: "08",
            questionText: "In the last month, how often have you felt that you were on top of things?",
        },
        {
            question: "09",
            questionText: "In the last month, how often have you been angered because of things that happened that were outside of your control?",
        },
        {
            question: "10",
            questionText: "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
        },
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
    const [Q010, setQ010] = useState();
    const navigate = useNavigate();

    const calculateScore = () => {
        if (typeof (Q01) !== 'undefined' && typeof (Q02) !== 'undefined' && typeof (Q03) !== 'undefined' && typeof (Q04) !== 'undefined' && typeof (Q05) !== 'undefined' &&
            typeof (Q06) !== 'undefined' && typeof (Q07) !== 'undefined' && typeof (Q08) !== 'undefined' && typeof (Q09) !== 'undefined' && typeof (Q10) !== 'undefined') {

            let score = Number(Q01) + Number(Q02) + Number(Q03) + Number(Q04) + Number(Q05) +
                        Number(Q06) + Number(Q07) + Number(Q04) + Number(Q05) + Number(Q06);

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
                    <Row style={{paddingTop:"10px"}}>
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
                    <Row style={{paddingTop:"10px"}}>
                        <Col>  <input type="radio" value={surveyOptions[0].value} name="q02"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[1].value} name="q02"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[2].value} name="q02"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[3].value} name="q02"/> </Col>
                        <Col>  <input type="radio" value={surveyOptions[4].value} name="q02"/> </Col>
                    </Row>
                    <Row className="divQ"></Row>
                </div>

            </Container>
        </div>
    )
}

export default PSS;