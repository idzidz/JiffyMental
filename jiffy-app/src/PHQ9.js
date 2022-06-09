import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

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

    const surveyQuestions = [
        {
            question: "01",
            questionText: "Little interest or pleasure in doing things",
        },
        {
            question: "02",
            questionText: "Feeling down, depressed, or hopeless",
        },
        {
            question: "03",
            questionText: "Trouble falling or staying asleep, or sleeping too much",
        },
        {
            question: "04",
            questionText: "Feeling tired or having little energy",
        },
        {
            question: "05",
            questionText: "Poor appetite or overeating",
        },
        {
            question: "06",
            questionText: "Feeling bad about yourself – or that you are a failure or have let yourself or your family down",
        },
        {
            question: "07",
            questionText: "Trouble concentrating on things, such as reading the newspaper or watching television",
        },
        {
            question: "08",
            questionText: "Moving or speaking so slowly that other people could have noticed? " +
                "Or the opposite – being so fidgety or restless that you have been " +
                "moving around a lot more than usual",
        },
        {
            question: "09",
            questionText: "Thoughts that you would be better off dead or of hurting yourself in some way",
        },
    ]

    return(
        <div>
            <h2 className="headerText">
                Questionnaire 3
            </h2>
        </div>
    )
}

export default PHQ9;