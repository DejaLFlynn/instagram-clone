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
      Home 

      <nav className="navbar">
      <NavBar/>

      </nav>
      

      <div className="main">
        <div className="left-side">
       
        </div>
        <div className='right-side'>
          
        <h1>Imstagram</h1>
    
      <Authentication/>

        </div>

      </div>
      <footer className="footer">

      <Footer/>
      </footer>
      {/* </Provider> */}
    
    </div>
  );
}

export default App;
