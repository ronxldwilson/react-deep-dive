import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let count =0;

function App() {
  
  const [randomNo,setRandomNum] = useState(0);
  
  function randonNum(){
    setRandomNum(Math.random());
  }
  
  return (
    <>
      <button onClick={randonNum} > Click Me to Change the Title</button> <br />
      <DisplayText title = {randomNo}/> <br />
      <DisplayText title = "Ron"/>
    </>
  )
}

function DisplayText(props){
  console.log("This is rendered "+ count++)
  return <>
    My Name is {props.title}
  </>
}


export default App
