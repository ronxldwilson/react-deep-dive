import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [time, setTime] = useState("")

  useEffect(()=>{
    setInterval( ()=>{
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      let timeDisplay = hours + " : " + minutes + " : " + seconds;
      
      // if(hours > 12)
      console.log(timeDisplay)
      setTime((time)=> time = timeDisplay)

    },1000)
  },[])

  return (
    <>
      <Clock time={time}></Clock>
    </>
  )
}

function Clock({time}){
  return <>
    {time}
  </>
}

export default App
