// import { useState } from 'react'
import './App.css'
import Card from './components/card';


function App() {
  // const [count, setCount] = useState(0)
  let myobj={
    name:'shubh',
    phn:48565,
    address:'New Delhi, Near Basnt kunj Vihar'
  }

  return (
    <>
    <h1 className='bg-green-400 p-4 text-black rounded-xl '>Tailwind Test</h1>
    <Card channel='shubh with code' myownObj={myobj} />
    </>
  )
}

export default App
