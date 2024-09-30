import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/')
      .then((res)=>{
        res.json()
          .then((data)=>setTodos(data.data));
      })
  },[])



  return (
    <>
    Hello world
    {todos.map((value)=><Todo key={value.id} title={value.title} desc={value.desc}/>)}
    </>
  )
}

function Todo({title,desc}) {
  return <div>
    {title} <br />
    {desc}
  </div>
}

export default App
