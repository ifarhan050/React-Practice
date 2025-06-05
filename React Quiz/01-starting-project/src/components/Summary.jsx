import React from 'react'
import QUESTIONS from "../questions.js";
function Summary({userAnswers}) {
  return (
    <div id="summary">
        <h2>Quiz Completed</h2>
        <img src="./src/assets/quiz-complete.png" />
        <div id='summary-stats'>
            <p>
                <span className='number'>{Math.round((userAnswers.filter((answer,index) => answer === QUESTIONS[index].correctAnswer).length / QUESTIONS.length) * 100)}%</span>
                <span className='text'>Correct answers</span>
            </p>
            <p>
                <span className='number'>{Math.round((userAnswers.filter((answer,index) => (answer !== QUESTIONS[index].correctAnswer && answer !== null)).length / QUESTIONS.length) * 100)}%</span>
                <span className='text'>Wrong answered</span>
            </p>
            <p>
                <span className='number'>{Math.round((userAnswers.filter((answer) => answer === null).length / QUESTIONS.length) * 100)}%</span>
                <span className='text'>Questions skipped</span>
            </p>
                
            
        </div>
       <ol>
            {QUESTIONS.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                return (
                    <li key={index} >
                        <h3>{index+1}</h3>
                        <p className='question'>{question.text}</p>
                        <p className={`user-answer ${isCorrect ? 'correct' : 'wrong'}`}>Your answer: {userAnswer !== null ? userAnswer : 'Skipped'}</p>
                        { !isCorrect && (
                            <p className='correct-answer'>Correct answer: {question.correctAnswer}</p>
                        )}
                    </li>
                );
            })}
       </ol>
    </div>
  )
}

export default Summary