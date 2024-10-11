import { useState, useRef} from 'react'
import './App.css'

function App() {
  const [otp, setOTP] = useState(0)
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();

  const dealWithInput = (e, ) => {
    let num = 1000 * parseInt(e.target.value)
    setOTP(otp + num)
  }
  return (
    <>
      <div>
        <h1>
        Login via OTP
        </h1>
        <br />
          <div >
            <input style={{ fontSize:50 ,width:100, height:100, margin:10, textAlign:'center'}} type="text" maxLength="1" name="val-1" id="val-1" 
              onInput={dealWithInput}
              onKeyUp={(e)=>{
                if (e.key === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0') {
                  secondInputRef.current.focus();
                }
              }}
            />
            <input ref={secondInputRef} style={{ fontSize:50 ,width:100, height:100, margin:10, textAlign:'center'}} type="text" maxLength="1" name="val-1" id="val-1" 
              onInput={dealWithInput}
              onKeyUp={(e)=>{
                if (e.key === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0') {
                  thirdInputRef.current.focus();
                }
              }}
            />
            <input ref={thirdInputRef} style={{ fontSize:50 ,width:100, height:100, margin:10, textAlign:'center'}} type="text" maxLength="1" name="val-1" id="val-1" 
              onInput={dealWithInput}
              onKeyUp={(e)=>{
                if (e.key === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0') {
                  fourthInputRef.current.focus();
                }
              }}
            />
            <input ref={fourthInputRef} style={{ fontSize:50 ,width:100, height:100, margin:10, textAlign:'center'}} type="text" maxLength="1" name="val-1" id="val-1" 
              onInput={dealWithInput}
            />
            {console.log(otp)}
          </div>
        </div>
    </>
  )
}

export default App
