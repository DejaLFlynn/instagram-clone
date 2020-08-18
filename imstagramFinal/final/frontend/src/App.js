import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import User from "./Components/Authentication.js/User";
import NavBar from "./Components/Authentication.js/NavBar";
import SignIn from "./Components/Authentication.js/SignIn";
import SignUp from "./Components/SignUp";
import Explorer from "./Components/Explorer";
import { Route, Switch } from "react-router-dom";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Context from "./Providers/Context";
import { AuthRoute, ProtectedRoute } from "./Utils/Route";
import Posts from "./Components/Posts";
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
    
      </Context>



      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
