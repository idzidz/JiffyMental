import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

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

    return(
        <div>
            <h2 className="headerText">
                Questionnaire 2
            </h2>
        </div>
    )
}

export default PSS;