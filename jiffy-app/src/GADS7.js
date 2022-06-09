import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import "./index.scss"

const GADS7 = () => {

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

    const surveyQuestions = [
        {
            question: "01",
            questionText: "Feeling nervous, anxious, or on edge",
        },
        {
            question: "02",
            questionText: "Not being able to stop or control worrying",
        },
        {
            question: "03",
            questionText: "Worrying too much about different things",
        },
        {
            question: "04",
            questionText: "Trouble relaxing",
        },
        {
            question: "05",
            questionText: "Being so restless that it is hard to sit still",
        },
        {
            question: "06",
            questionText: "Becoming easily annoyed or irritable",
        },
        {
            question: "07",
            questionText: "Feeling afraid, as if something awful might happen",
        },
    ]





    return (
        <div>

            <h2 className="headerText">
                Questionnaire (1 / 3)
            </h2>

            <h4 className="subText">Over the last two weeks, how often have you been bothered by the following problems?</h4>

            <Container>
                <Row style={{textAlign: "center", fontSize: "small"}}>
                    <Col xs={4}/>
                    <Col xs={2}> {surveyOptions[0].option}  </Col>
                    <Col xs={2}> {surveyOptions[1].option}  </Col>
                    <Col xs={2}> {surveyOptions[2].option}  </Col>
                    <Col xs={2}> {surveyOptions[3].option}  </Col>
                </Row>

                <Row style={{textAlign: "center", fontSize: "small", paddingBottom: "20px", borderBottom:"1px transparent"}}>
                    <Col xs={4}> Feeling nervous, anxious, or on edge </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q01" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q01" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option03" name="q01" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option04" name="q01" /> </Col>
                </Row>

                <Row style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Not being able to stop or control worrying </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option03" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option04" name="q02" /> </Col>
                </Row>

                <Row style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Worrying too much about different things </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option03" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option04" name="q02" /> </Col>
                </Row>

                <Row style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Having trouble relaxing </Col>
                    <Col xs={2}  style={{paddingBottom:"-10px"}}>  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option03" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option04" name="q02" /> </Col>
                </Row>

                <Row style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Being so restless that it is hard to sit still </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option03" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option04" name="q02" /> </Col>
                </Row>

                <Row style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Becoming easily annoyed or irritable </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option03" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option04" name="q02" /> </Col>
                </Row>

                <Row style={{textAlign: "center", fontSize: "small", paddingBottom: "20px"}}>
                    <Col xs={4}> Feeling afraid, as if something awful might happen </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option02" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option03" name="q02" /> </Col>
                    <Col xs={2} className="radioAdjust">  <input type="radio" value="option04" name="q02" /> </Col>
                </Row>
            </Container>

        </div>
    )
}

export default GADS7;