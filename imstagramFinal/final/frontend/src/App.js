import React, { useState, useEffect } from 'react'
import './App.css'
import Footer from './Components/Footer'
import User from './Components/Authentication.js/User'
import NavBar from './Components/Authentication.js/NavBar'
import Explorer from './Components/Explorer'
function App() {
 
  return (
    <div className ="App">
      {/* <NavBar/> */}
      <User/>
      
      <Explorer/>
      
      
      
      <footer>

      <Footer/>
      </footer>
    </div>
  
  ) 
}

export default App;
