import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// This is psedo card wrapper


function App() {
  return <>
    <CardWrapper innerComponent={TextComponent}/>  
  </>
}

function TextComponent(){
  return <div>
    Hi There
  </div>
}

function CardWrapper(innerComponent){
  // the objective is to create a componet that takes another component as input and displays the value with some styling
  return <div style={{border: "2px solid black"}}>
    {innerComponent}
  </div>
}
export default App
