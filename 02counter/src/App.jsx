import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let  [counter, setCounter] = useState(15)
 // let counter = 15

  const addValue = () => {
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
 
  }
 
  const removeValue= ()=>{
    counter = counter-1
    if(counter<0) counter =0
    setCounter(counter)
  }
  return (
    <>
     <h1>Code with React</h1>
     <h2>Counter value: {counter}</h2>
  
     <button onClick = {addValue}>Add Value {counter}</button>
     <br/> <br/>
     <button onClick = {removeValue}>remove Value:  {counter}</button>
     <br/><br/>
    
    </>
  )
}

export default App
