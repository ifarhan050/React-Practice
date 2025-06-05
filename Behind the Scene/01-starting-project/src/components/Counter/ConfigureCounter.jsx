import React,{useState} from 'react'
import { log } from '../../log.js';
function ConfigureCounter({onSet}) {
log('<ConfigureCounter /> rendered', 1, 'component');
  const [enteredNumber, setEnteredNumber] = useState(0);
  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }
  function handleSetClick(){
    onSet(enteredNumber);
    setEnteredNumber(0);
  }
  return (
    <section id="configure-counter">
        <h2>Set Counter</h2>
        <input type="number" onChange={(e)=>handleChange(e)} value={enteredNumber} />
        <button onClick={handleSetClick}>Set</button>
    </section>
  )
}

export default ConfigureCounter