import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'
import { Counter } from './component/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    Count <br />
    <Counter count ={count}></Counter> <br />
    <button onClick={increment}> Increment</button> 
    <button onClick={decrement}> Decrement</button>
    <button onClick={resetFun}> Reset </button>
    </>
  )

  function resetFun(){
    setCount((count)=> count=0)
  }
  function increment(){
    setCount((count) => count+1)
  }
  function decrement(){
    setCount((count) => count-1)
  }
  
}



export default App
