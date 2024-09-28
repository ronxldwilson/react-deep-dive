import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [data,addData] = useState([{
    id: 1,
    title: "Task 1",
    description: "Desc Task 1"
  },{
    id: 2,
    title: "Task 2",
    description: "Desc Task 2"
  },{
    id: 3,
    title: "Task 3",
    description: "Desc Task 3"
  }
])
let counter = 4;

function addToDo(){
  addData([...data,{
    id: counter++,
    title: document.getElementById("inputTitle").value,
    description: document.getElementById("inputDescription").value
  }])
}

return (
    <>
      <ToDo/>
      <button onClick={addToDo}> Add ToDo</button>
      <p>Displaing the TODo List</p>
      <ul>
      {data.map(function(value){
        <li>return <DisplayTodo key={value.id} title= {value.title} description= {value.description}/></li>
      })}
      </ul>

    </>
  )
}

function DisplayTodo({title,description}){
  return <div>
    <h1>
    {title}
    </h1>
    <h2>
      {description}
    </h2>
  </div>
}

function ToDo (){
  return <div>
    <input id="inputTitle"type="text" placeholder="Title" /> <br />
    <input id="inputDescription"type="text" placeholder="Description" /> <br />
    
  </div>
}

export default App
