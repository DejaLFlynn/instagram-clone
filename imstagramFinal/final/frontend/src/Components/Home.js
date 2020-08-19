import React from "react";
import { useHistory, Link } from "react-router-dom";
import { login } from "../Utils/Firebase";
import { apiURL } from "../Utils/apiURL";
import "../CSS/LandingPage.CSS";
import SignIn from "./Authentication.js/SignIn";
const API = apiURL();
const Home = () => {
  const history = useHistory();
  const handleGuestSignIn = async () => {
    await login("guest", "account");
    history.push("/posts");
  };
  return (
    <>
      <div className="div">
        <div className="storeHolder">
          <img
            src="https://media.giphy.com/media/hsDY1IPzpP4DcB1Ba5/giphy.gif"
            alt="iphone"
          ></img>
          <h1>Imstagram</h1>
          <p className="instructions">
            Sign In To See Photo And Videos From Your Friends
            <SignIn />
            <p>
              {" "}
              ** Please use "guest@gmail.com" and "account" for password while
              button is worked on!
            </p>
            <button className="guest" onClick={handleGuestSignIn}>
              Guest
            </button>
          </p>
          <p>Get the App</p>
          <img
            className="appleStore"
            src="https://losserranosgolfclub.com/wp-content/uploads/Download-on-the-App-Store-button.png"
            alt="appleStore"
          ></img>
          <img
            className="android"
            src="https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png"
            alt="googlePlay"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
