import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Landing } from './pages/landing'

function App() {
  
  
  return (
    <>
      Hello World 
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/' element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <>
  <button onClick={() => {
        navigate("/");
      }}>Landing</button>

      <button onClick={() => {
        navigate("/dashboard");
      }}>Dashboard</button>

  </>
}
export default App
