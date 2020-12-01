import React from "react";
import { useHistory, Link } from "react-router-dom";
import { login } from "../Utils/Firebase";
import { apiURL } from "../Utils/apiURL";
import "../CSS/Home.css";
import SignIn from "./Authentication.js/SignIn";
const API = apiURL();
const Home = () => {
  const history = useHistory();

  return (
    <>
      <div className="div">
        <div className="rightSide">
          <img
            src="https://i.postimg.cc/RhDKs1vV/igphones.png"
            alt="iphone"
            width="450px"
          ></img>
        </div>
        <div className="leftSide">
          <SignIn />
        </div>
      </div>
    </>
  );
};

export default Home;
