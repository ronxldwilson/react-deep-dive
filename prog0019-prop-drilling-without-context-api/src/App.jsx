import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  cosnt [count, setCount] = useState(0);
    
  return (
    <>
      <Count count={count}></Count>
      <Button count={count} setCount={setCount}></Button>
    </>
  )
}

function Count(count){
  return <>
    {count}
  </>
}

function Button(setCount){
  return <>
    <button onClick={() =>{
      setCount(count+1)
    }}>Increase</button>
    
    <button onClick={() =>{
      setCount(count-1)
    }}>Decrease</button>
  </>
}
export default App
