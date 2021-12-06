import React,{useContext} from 'react'
import ReactLogo from '../img/result.svg';
import {QuizContext} from "../context/quiz-context";
const Result = () => {
    
    const {setSliderQuestion,setQuestionCounter,score,setScore} =useContext(QuizContext)

    const tryAgain = ()=>{
        setSliderQuestion(0)
        setQuestionCounter(0)
        setScore(0)
    }

    return (
        <div className="quiz__container">
            <div className="quiz__result">
                <img src={ReactLogo} alt="" />
                <div className="quiz__result-content">
                    <h1 className="quiz__result-title">Results</h1>
                    <p className="quiz__result-desc">You got <span>{score}</span> correct answers</p>
                </div>
                <button className="btn btn__outlined" onClick={tryAgain}>Try again</button>
            </div>
            
        </div>
    )
}

export default Result
