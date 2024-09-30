import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)

  // the issue with this approach is that it will retrigger the expensive statement of recalculating every time theres a rereneder of the page 
  // this can be avoided if useMemo is used which monitors the change on the stateVariable and only rerenders when that is done
  // function calculateSum(num){
    //   let total = 0;
    //   for (let i=1; i<=num ; i++){
      //     total += i;
      //   }
      //   setValue(total)
      // }
  
  let finalValue = useMemo(() => {
      let finalCount = 0;
      for(let i=1; i <= value;i++){
        finalCount += i;
      }
      return finalCount;
  },[value]) 


  return (
    <>
      <input id="num" type="text" placeholder='Enter Number' onInput={(e)=>{
        setValue(e.target.value)
      }} />
      <div>Sum is {finalValue}</div>
      <button onClick={()=>setCount(count +1)}>Counter ({count})</button>

    </>
  )
}

export default App
