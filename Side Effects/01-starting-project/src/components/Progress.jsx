import React,{useEffect,useState} from 'react'

function Progress({timer}) {
 
 const [RemaningTime, setRemainingTime] = useState(timer);
    useEffect(() => {
        console.log('Progress mounted');
        const timerId = setInterval(() => {
          setRemainingTime((prevTime) => prevTime - 10);
        }, 10);
    
        return () => {
        console.log('Progress unmounted');
        clearInterval(timerId);
        };
    }, []);
  return (
    <progress max={timer} value={RemaningTime}></progress>
  )
}

export default Progress