import React,{useRef} from 'react'
function Answers({answers,onSelectAnswer, selectedAnswer, answerState}) {
 console.log(answerState)
 const shuffeledAnwers=useRef();

if(!shuffeledAnwers.current){
    shuffeledAnwers.current=answers.sort(() => Math.random() - 0.5);
  }
  return (
     <ul id="answers">
          {shuffeledAnwers.current.map((answer, index) => {
            const isSelected = answer === selectedAnswer;
            let cssClass=''
            if (answerState === "answered" && isSelected) {
              cssClass='selected'
            }
            if((answerState === "correct" || answerState === "wrong") && isSelected){
              cssClass=answerState
            }
            return(<li key={index} className="answer">
              <button
                className={cssClass}
                disabled={answerState !== ""}
                onClick={() => onSelectAnswer(answer)}
              >
                {answer}
              </button>
            </li>)
        })}
    </ul>
  )
}

export default Answers