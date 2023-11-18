import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
    const addVal=()=>{
      setCount(count++);
    }
    const removeVal=()=>{
      setCount(count--);
    }
  return (
    <>
    <h1> Counter App</h1>
    <h3>Value : {count} </h3>
    <button onClick={addVal}>Add Value</button>
    <br />
    <button onClick={removeVal}>Remove Value</button>
    </>
  )
}

export default App
