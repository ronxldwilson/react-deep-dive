
function App() {

  return (
    <>
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: 400}}>
        <button onClick={()=>{
          document.body.style.backgroundColor = "Red"
        }}> Red </button>

        <button onClick={()=>{
          document.body.style.backgroundColor = "yellow"
        }}> Yellow </button>

        <button onClick={()=>{
          document.body.style.backgroundColor = "black"
        }}> Black </button>

        <button onClick={()=>{
          document.body.style.backgroundColor = "purple"
        }}> Purple </button>

        <button onClick={()=>{
          document.body.style.backgroundColor = "green"
        }}> Green </button>

        <button onClick={()=>{
          document.body.style.backgroundColor = "Blue"
        }}> Blue </button>

        <button onClick={()=>{
          document.body.style.backgroundColor = "grey "
        }}> Default </button>

      </div>
    </>
  )
}

export default App
