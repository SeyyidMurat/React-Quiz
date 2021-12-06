import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./css/main.css";
import QuizContextProvider from "./context/quiz-context"
ReactDOM.render(<QuizContextProvider><App/></QuizContextProvider>,document.getElementById('root'));
