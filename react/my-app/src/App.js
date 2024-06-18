import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState("light")
  const [mode1, setMode1] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
   }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Darkmode"
      setInterval(() => {
        document.title = "Intall text utils now"
      }, 2000);
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Lightmode"
    }
  }

  const toggleMode1 = () =>{
    if(mode1 === "light"){
      setMode1("red")
      document.body.style.backgroundColor = "red"
      showAlert("Red mode has been enabled", "success")
    }else{
      setMode1("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
    <Navbar title = "TextUtils" aboutText = "About us" mode={mode} toggleMode={toggleMode}  mode1 = {mode1}toggleMode1={toggleMode1}/>
    {/* <Navbar/> */}
    <Alert alert= {alert}/>
    <div className="container my-3">
    <TextForm showAlert ={showAlert} heading="Enter the text to analyze below: " mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
