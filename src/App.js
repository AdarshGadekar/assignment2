import './App.css';
import React, {useRef, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import DisplayFormData from './DisplayFormData';


function App() {

  const [formdata, setFormData] = useState(null)
  const [isDisplay, setIsDisplay] = useState(false)

  const CatchFormData = (data, isDisplay) =>{
    setFormData(data)
    setIsDisplay(isDisplay)
  }

  const CatchBack = (isDisplay) =>{
    setIsDisplay(isDisplay)
  }

  return (
    <div className="App">
      {!isDisplay && <Form sendFormData={CatchFormData} />}
      {isDisplay && <DisplayFormData data={formdata} sendDisplay={CatchBack} />}
    </div>
  );
}

export default App;
