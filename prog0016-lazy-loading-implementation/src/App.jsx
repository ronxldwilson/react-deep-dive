import { BrowserRouter,Routes, Route, } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'
import './App.css'

function App() {

  return (
    <>
  Hello World
      <BrowserRouter>
        <Routes>
          <Route path="./Dashboard" element={<Dashboard />} />
          <Route path="./" element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
