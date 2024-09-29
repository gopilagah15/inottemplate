import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import About from './component/About';


const App = () => {
  return (
    <>
      <BrowserRouter> 
      <Navbar/>
      <h1>iNotebook</h1>
      <Routes>
          <Route exact path='/home' element={<Home />} /> 
          <Route exact path='/about' element={<About />} /> 
          </Routes> 
    </BrowserRouter> 
    </>
  )
}

export default App