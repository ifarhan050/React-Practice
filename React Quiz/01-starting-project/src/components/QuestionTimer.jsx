import React,{useEffect,useState} from 'react'

function QuestionTimer({timeout, onTimeout,onTimeDecrement,mode}) {

  const [RemainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(()=>{
    // console.log('Progress mounted');
    const timerId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, onTimeDecrement);
    return () => {
    //   console.log('Progress unmounted');
      clearInterval(timerId);
    };
  },[])
  return (
    <progress max={timeout} value={RemainingTime} className={mode}></progress>
  )
}

export default QuestionTimer