import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn } from "../Utils/Firebase";
import { Link } from "react-router-dom";
import {apiURL} from '../Utils/apiURL'
import "../CSS/LandingPage.CSS";
import SignIn from "./Authentication.js/SignIn";
const API = apiURL()
const Home = () => {
  return (
    <main className="main">
      <div className="left-side">
        <img src="https://media.giphy.com/media/hsDY1IPzpP4DcB1Ba5/giphy.gif"></img>
      </div>
      <div className="right-side">
		  <h1>Imstagram</h1>
		  <p className="instructions">
            Sign In To See Photo And Videos From Your Friends
              </p>
        <SignIn />
		
      </div>
    </main>
  );
};

export default Home;
