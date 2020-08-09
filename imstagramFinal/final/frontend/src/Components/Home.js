import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn } from "../Utils/Firebase";
import { Link } from "react-router-dom";
import { apiURL } from "../Utils/apiURL";
import "../CSS/LandingPage.CSS";
import SignIn from "./Authentication.js/SignIn";
import SignUp from "./SignUp";
const API = apiURL();
const Home = () => {
  return (
    <main className="main">

<div className="storeHolder">
        <img src="https://media.giphy.com/media/hsDY1IPzpP4DcB1Ba5/giphy.gif"></img>
        <h1>Imstagram</h1>
        <p className="instructions">
          Sign In To See Photo And Videos From Your Friends
        </p>
        <p>Get the App</p>
        <img
          className="appleStore"
          src="https://losserranosgolfclub.com/wp-content/uploads/Download-on-the-App-Store-button.png"
        ></img>
        <img
          className="android"
          src="https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png"
        ></img>
      </div>
      {/* <div className="left-side">
       
      </div>
      <div className="right-side">
        
        <SignIn />

        <div className="signUp">
          <Link to="/signup" className="button">
            New? Sign Up
            <SignUp />
          </Link>
        </div>
      </div> */}
    </main>
  );
};

export default Home;
