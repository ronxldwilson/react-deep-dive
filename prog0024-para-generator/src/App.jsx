import { useState } from 'react'
import './App.css'

function App() {
  const [inputdata, setInput] = useState("");
  const [para, setPara] = useState("");

  const generate = () => {
    setPara("") // reseting the para size
    const str = "Lorem ipsum dolor sit amet. Est quibusdam laudantium aut officiis delectus sit consequatur dolorum ab dolores ipsum ea iusto reprehenderit aut corrupti aliquid? Ut alias quia ab autem fugit et culpa dolor et enim enim a harum aspernatur."
    const num = parseInt(inputdata);
    console.log("Hello");
    let newPara =  ""
    for(let i=0 ;i < num; i++){
      newPara += str + "<p>"

    }
    setPara(newPara)
  }
  
  return (
    <>
    <div style={{width: 600}}>
      Para Generator <br />
      <input type="text" onInput={e => setInput(e.target.value)} placeholder="How many para you need?" />
      <button onClick={generate}> Generate </button>
      <DisplayPara para={para}></DisplayPara>
    </div>
    </>
  )
}

function DisplayPara({para}){

  return <>
    <div dangerouslySetInnerHTML={{ __html: para }} />
  </>
}

export default App
