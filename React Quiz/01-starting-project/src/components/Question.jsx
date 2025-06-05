import React,{useCallback, useState} from 'react'
import Answers from './Answers.jsx'
import QuestionTimer from './QuestionTimer.jsx'
import QUESTIONS from '../questions.js'
function Question({handleAnswer,onSkipQuestion,currentQuestion}) {
  const [answer, setAnswer]=useState({selectedAnswer:null,isCorrect:null});
  console.log(answer)
  let timer=10000;
  let decreament=10;

  if (answer.selectedAnswer) {
    timer = 1000;
  }
  const handleSelect=(answer)=>{
    setAnswer({selectedAnswer:answer,isCorrect:null})
    setTimeout(() => {
        
        setAnswer((prev)=>{
          return {
            ...prev,
            isCorrect: answer === QUESTIONS[currentQuestion].correctAnswer,
          }
        });
      setTimeout(() => {
        handleAnswer(answer);
      }, 2000);
    },1000);
  }

  let answerState='';
  if(answer.selectedAnswer && answer.isCorrect !== null)
  {
    answerState=answer.isCorrect?'correct':'wrong';
  }
  else if(answer.selectedAnswer && answer.isCorrect === null)
  {
    answerState='answered';
  }
  return (
    <div id="question">
        <QuestionTimer
          key={timer}
          timeout={timer}
          onTimeout={answer.selectedAnswer===null ? onSkipQuestion : null}
          onTimeDecrement={decreament}
          mode={answerState}
        />
        <h2>{QUESTIONS[currentQuestion].text}</h2>
        <Answers
          answers={QUESTIONS[currentQuestion].answers}
          selectedAnswer={answer.selectedAnswer}
          onSelectAnswer={handleSelect}
          answerState={answerState}
        />
      </div>
  )
}

export default Question