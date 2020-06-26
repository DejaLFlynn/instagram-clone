import React from 'react';
import Authentication from './Components/Authentication.js/Authentication'
import Footer from './Components/Footer'
import NavBar from './Components/Authentication.js/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Authentication/>
      <Footer/>
    
    </div>
  );
}

export default App;
