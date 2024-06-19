import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'grey';
      document.title = 'TextUtils - Darkmode';
    } else if (mode === 'red') {
      document.body.style.backgroundColor = 'red';
      document.title = 'TextUtils - Redmode';
    } else {
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Lightmode';
    }
  }, [mode]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (newMode) => {
    if (newMode !== mode) {
      setMode(newMode);
      showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled`, 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
