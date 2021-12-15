import './App.css';
import Counter from "./Counter"
import React, {useEffect, useState} from 'react'

function App() {

  const[show, setShow] = useState(true)

  
  useEffect(()=>{
    let time = 0
    
    let timer = setInterval(()=>{
      time++
      console.log(time)
      if (time > 5) {
        clearInterval(timer)
        setShow(false)
      }
    }, 1000)

  },[])


  if (show) {
    return (
      <div>
        <Counter></Counter>
      </div>
    );
  } else {
    return(
    <div>Sem Contador</div>
    )}


}

export default App;
