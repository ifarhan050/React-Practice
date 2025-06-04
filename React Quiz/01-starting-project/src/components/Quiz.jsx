import React, { useState, useCallback } from "react";
import Question from "./Question.jsx";
import QUESTIONS from "../questions.js";


function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  
  const currentQuestion = userAnswers.length;
  const isCompleted = currentQuestion === QUESTIONS.length;
  // console.log(userAnswers);

 




  const handleAnswer = useCallback((answer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
   
  }, []);
 const skipQuestion = useCallback(() => handleAnswer(null), [handleAnswer]);
  
  
  if (isCompleted) {
    return (
      <div id="summary">
        <h2>Quiz Completed</h2>
        <img src="./src/assets/quiz-complete.png" />
      </div>
    );
  }
  
  return (
    <div id="quiz">
      <h2>React Quiz</h2>
      <Question
        key={currentQuestion}
        handleAnswer={handleAnswer}
        onSkipQuestion={skipQuestion}
        currentQuestion={currentQuestion}
      />
    </div>
  );
}

export default Quiz;
