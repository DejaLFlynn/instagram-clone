import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import User from "./Components/Authentication.js/User";
import NavBar from "./Components/Authentication.js/NavBar";
import SignUp from "./Components/SignUp";
import Explorer from "./Components/Explorer";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Context from "./Providers/Context";
import { AuthRoute, ProtectedRoute } from "./Utils/Route";
function App() {
  return (
    <div className="App">
      <Context>
        
        <Switch>

      <AuthRoute exact path="/">
        <Home/>
        <NavBar/>
      </AuthRoute>
      <AuthRoute path='/signup'>
        <SignUp/>
        <NavBar/>
      </AuthRoute>
      <AuthRoute exact path="/posts">
      <Explorer/>
      </AuthRoute>
      <AuthRoute exact path="/users">
      <User/>
      
      </AuthRoute>
      <ProtectedRoute path="/users/:id">
        <User/>
        <NavBar/>
      </ProtectedRoute>
      <ProtectedRoute path="/posts">
        <Explorer/>
        <NavBar/>
      </ProtectedRoute>
        </Switch>
     <footer>
        <Footer />
      </footer>
      </Context>



     
    </div>
  );
}

export default App;
