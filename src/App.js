import React,{useContext} from 'react'
import Result from './components/Result'
import {questions} from "./fakedata/questions"
import {QuizContext} from "./context/quiz-context"
import Quiz from './components/Quiz'
const App = () => {
	
	const {questionCounter} = useContext(QuizContext)
	
	return (
		<div className="main">		
			<div className="quiz">
				<h1 className="quiz__title">Country quiz</h1>
				{
					questionCounter === questions.length ? <Result/>:<Quiz/>
				}		
			</div>
			
		</div>
	)
}

export default App
