import React,{useContext} from 'react'
import {QuizContext} from "../context/quiz-context";
const QuizAnswer = ({item}) => {

	const {selected,setSliderQuestion,sliderQuestion,setSelected,setScore,setQuestionCounter} =useContext(QuizContext)

	const selectedOption = (e) => {
		setSelected(e)
		if(e === item.trueAnswer){
			setScore(prev => prev + 1);
		}
	}

	const handleSelect = (i) => {
		if (selected === i && selected === item.trueAnswer) return "true";
    	else if (selected === i && selected !== item.trueAnswer) return "wrong";
    	else if (i === item.trueAnswer) return "true";
		else return ""
	}
	
	const handleNext = () =>{
		handleSliderNext()
		setSelected("")
		setQuestionCounter(prev => prev + 1)
	}
	
	
	const handleSliderNext = () => {
        setSliderQuestion(sliderQuestion + 1);
    }

	const truncateText = (text) => {
		const textLength = text.length > 27;
		return textLength ? "truncate" : ""
	}

	
    return (
		
        <div className="quiz__container">
			<div className="quiz__content" > 
            	<h2 className={`quiz__question ${truncateText(item.question)}`}>{`${item.question}`}</h2>
				<div className="quiz__options">
					{
						item.answer.map((e,index)=>(
							<button key={index} 
								className={`btn btn__answer ${selected && handleSelect(e)}`}
								onClick={()=>selectedOption(e)}
								style={{pointerEvents:`${selected && "none"}`}}						
							>
								{e}
							</button>
						))
					}
				</div>
					{
						selected && <button className="btn btn__primary quiz__next-btn" onClick={handleNext}>Next</button>
					}	
            </div>
			
            
        </div>
       
    )
}

export default QuizAnswer
