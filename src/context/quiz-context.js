import React,{createContext, useState} from 'react'

export const QuizContext = createContext()


const QuizContextProvider = ({children}) => {

    const [sliderQuestion, setSliderQuestion] = useState(0)
	const [questionCounter, setQuestionCounter] = useState(0)
	const [selected, setSelected] = useState("");	
	const [score, setScore] = useState(0);
    
    const contextValue = {
		sliderQuestion,
		questionCounter,
		selected,
        score,
		setSliderQuestion,
        setQuestionCounter,
        setSelected,
        setScore	
	};
    
    return (
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider
