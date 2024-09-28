import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Components_from_file } from './components/Components_from_file' 

function App() {
  const [count, setCount] = useState(0)
  const arr = ["Hello","World from"];
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Header title="Hello World"/> <br />
      <Header2 title="Hello World 2"/>
      <HeaderWith2Props title="Hello" title2="from 2 props"/>
      <HeaderWith2PropsAndOneArgs arr={arr}/>
<br />
      <Component/>
      <Components_from_file/>
    </>


  )
}

function HeaderWith2PropsAndOneArgs({arr}){
  return <div>
    {arr[1]}{arr[2]}
  </div>

}
function HeaderWith2Props({title,title2}){
  return <><br />
  {title} {title2}
  </>
}
function Component(){
  return <>
  This is coming from the component defined under same file
  </>
}

function Header(props){
  return <>
    {props.title}
  </>
}

function Header2({title}){
  return <>
    {title}
  </>
}

export default App
