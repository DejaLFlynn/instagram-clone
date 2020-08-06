//rebuild app component
import React, { useEffect, useState } from 'react';
import "./App.css";
import Footer from "./Components/Footer";
import firebase from './Firebase'
import {getFirebaseIdToken} from './Utils/Firebase'
// import React, { useState, useEffect } from "react";
import User from "./Components/Authentication.js/User";
import NavBar from "./Components/Authentication.js/NavBar";
import Explorer from "./Components/Explorer";
import { Route, Switch } from "react-router-dom";
import Error from "./Components/Error";
import Home from "./Components/Home";
import AuthProvider from "./Providers/Context";
function App() {
// const dispatch = useDispatch()
const [currentUser, setCurrentUser] = useState("")
const sessionUser = user =>{
  if(user){
    const {email, uid} = user
    getFirebaseIdToken().then(token=>{
      setCurrentUser({email, uid, token})
    })
  }else{
    setCurrentUser(null)
  }
}
useEffect( () => {
  const authStateObserver = firebase.auth().onAuthStateChanged(sessionUser)
  return authStateObserver
}, []);

  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/posts"}>
            {""}
            <Explorer />
          </Route>
          <Route path={"/users"}>
            <User />{""}
          </Route>
          {/* <Route path="*" component={Error} /> */}
        </Switch>
        <footer>
          <Footer />
        </footer>
      </AuthProvider>
    </div>
  );
}

export default App;
