import React from 'react';
import Authentication from './Components/Authentication.js/Authentication'
import Footer from './Components/Footer'
import NavBar from './Components/Authentication.js/NavBar'
import './App.css'
// import Provider from './Providers/Context'
function App() {
  return (
    <div className="App">
      {/* <Provider> */}

      <nav className="navbar">
      <NavBar/>

      </nav>

      <div className="main">
      <Authentication/>

      </div>
      <footer className="footer">

      <Footer/>
      </footer>
      {/* </Provider> */}
    
    </div>
  );
}

export default App;
