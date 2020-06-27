import React from 'react';
import Authentication from './Components/Authentication.js/Authentication'
import Footer from './Components/Footer'
import NavBar from './Components/Authentication.js/NavBar'
// import Provider from './Providers/Context'
function App() {
  return (
    <div className="App">
      {/* <Provider> */}

      <NavBar/>
      <Authentication/>
      <Footer/>
      {/* </Provider> */}
    
    </div>
  );
}

export default App;
