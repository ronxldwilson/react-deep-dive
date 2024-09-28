
function App() {
  return (
  <>
  <h1>Hello</h1>
  <CardWrapper>
    <div>

    Hello World from Card Wrapper
    </div>
  </CardWrapper>
  <CardWrapper>
      Hello World from Card Wrapper
    </CardWrapper>
    
  </>
  )
}
function CardWrapper({children}){
  return <div style={{border: "2px solid black",padding: 20}}>
    {children}
  </div>
}


export default App
