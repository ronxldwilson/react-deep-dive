import { useContext, useState } from "react"
import { CountContext } from "./context";
import { countAtom,evenSelector } from "./store/atom/count";
import { RecoilRoot, useSetRecoilState, useRecoilState, useRecoilValue} from "recoil"

function App() {
  return (
    <div>
        <Count/>
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <RecoilRoot>
      <CountRenderer/>
      <Buttons/>
    </RecoilRoot>
  </div>
}


function CountRenderer() {
  const count = useRecoilValue(countAtom)

  return <div>
    {count}
    <EvenCountRenderer/>
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App