import React, { useEffect, useState } from 'react';
import "./App.css";
import Footer from "./Components/Footer";
import firebase from './Firebase'
import {getFirebaseIdToken} from './Utils/Firebase'
import User from "./Components/Authentication.js/User";
import NavBar from "./Components/Authentication.js/NavBar";
import SignIn from './Components/Authentication.js/SignIn'
import SignUp from './Components/SignUp'
import Explorer from "./Components/Explorer";
import { Route, Switch } from "react-router-dom";
import Error from "./Components/Error";
import Home from "./Components/Home";
import AuthProvider from "./Providers/Context";
import {AuthRoute, ProtectedRoute} from "./Utils/Route"
function App() {
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
          <Route>
            <Home/>
          </Route>
          <AuthRoute exact path={"/signup"}>
            <SignUp />
          </AuthRoute>
          <AuthRoute exact path={"/login"}>
            <SignIn />
          </AuthRoute>
          <ProtectedRoute path={"/users"}>
            <User />{""}
          </ProtectedRoute>
         <ProtectedRoute path={'/posts'}>
           <Explorer/>
         </ProtectedRoute>
        </Switch>
      </AuthProvider>
      <button >guest login
        
      </button>

      <img src='apple'>
      </img>
      <img src="android">
      </img>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
