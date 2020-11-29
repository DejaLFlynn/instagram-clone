import React from "react";
import { useHistory, Link } from "react-router-dom";
import { login } from "../Utils/Firebase";
import { apiURL } from "../Utils/apiURL";
import "../CSS/Home.css";
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
        <div className="rightSide">
          {/* <img src="https://i.pinimg.com/originals/9a/f7/af/9af7af3a1232ad180a427b86eb84d4f4.png"
          width="300px"/>  */}
          <img
            src="https://media.giphy.com/media/hsDY1IPzpP4DcB1Ba5/giphy.gif"
            alt="iphone"
          ></img>
           </div>
           <div className="leftSide">

          
         
       
         
            <SignIn />
            {/* <p>
              {" "}
              ** Please use "guest@gmail.com" and "account" for password while
              button is worked on!
            </p> */}
            <button className="guest" onClick={handleGuestSignIn}>
              Guest
            </button>
         
          <p>Get the App</p>
          <img
            className="appleStore"
            src="https://losserranosgolfclub.com/wp-content/uploads/Download-on-the-App-Store-button.png"
            alt="appleStore" width="100px"
          ></img>
          <img
            className="android"
            src="https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png"
            alt="googlePlay" width="120px"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
