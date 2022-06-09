import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

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

    return(
        <div className="radio-buttons">
            <h2 className="headerText">
                Questionnaire 1
            </h2>

            <Row>
                <div className="button-container">
                    <input
                        type="radio"
                        name="choice"
                        value="Not at all"
                    />
                    <input type="radio" />
                    <input type="radio" />

                </div>
            </Row>
        </div>
        )
}

export default GADS7;