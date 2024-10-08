import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

// lazy loading the routes
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Landing = React.lazy(() => import("./pages/Landing"));

function App() {
  
  
  return (
    <>
      Hello World 
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/dashboard' element={<Suspense><Dashboard/></Suspense> }></Route>
          <Route path='/' element={<Suspense><Landing/></Suspense>}></Route>
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
