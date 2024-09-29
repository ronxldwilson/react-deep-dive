import { useState } from 'react'
import './App.css'
import { Form } from './components/Form'

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return (
    <>
      <Form firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}></Form>
      <button onClick={Validataion}></button>
    </>
  )
  function Validataion(){
    {console.log("VALUES " + firstName )}

    if(firstName == "" || lastName == "") 
      alert("Input both the fields")
    else       
      addNameToState();
  }
    function addNameToState(){
      setFirstName((firstName) => firstName = document.getElementById("first-Name"))
      setLastName((lastName) => lastName = document.getElementById("last-Name"))

      console.log(firstName + lastName)
  }
}

export default App
