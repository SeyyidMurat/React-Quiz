import React, {useContext} from 'react'
import {questions} from "../fakedata/questions"
import QuizAnswer from './QuizAnswer'
import {QuizContext} from "../context/quiz-context"
const Quiz = () => {

const {sliderQuestion} = useContext(QuizContext)
    return (
        <div className="quiz__wrapper"  style={{ transform: `translateX(-${sliderQuestion * 107}%)`}}>					
            {	
                questions.map((item)=>(<QuizAnswer key={item.id} item={item}/>))       
			}			
		</div>
    )
}

export default Quiz
