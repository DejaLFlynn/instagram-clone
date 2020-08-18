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
      {/* <NavBar/>
      <Switch>

      <Route exact path="/">
        <Home/>
      </Route>
      <Route path='/posts'>
        <Explorer/>
      </Route>
      <Route path='/users'>
        <User/>
      </Route>
      <Route path='/login'>
        <SignIn/>
      </Route>
      <Route path='/signup'>
        <SignUp/>
      </Route>
      </Switch> */}
      
      {/* <AuthProvider>
        <NavBar />
        <Switch>
          <AuthRoute path={"/signup"}>
            <SignUp />
          </AuthRoute>
          <AuthRoute path={"/login"}>
            <SignIn />
          </AuthRoute>
          <ProtectedRoute exact path="/">
            <Home />
          </ProtectedRoute>
          <ProtectedRoute path={"/users"}>
            <User />
          </ProtectedRoute>
          <ProtectedRoute path={"/posts"}>
            <Explorer />
          </ProtectedRoute>
        </Switch>
      </AuthProvider> */}


      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
