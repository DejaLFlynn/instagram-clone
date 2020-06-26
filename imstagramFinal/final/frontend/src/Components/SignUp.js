import React, { useState } from "react";
import { useInput } from "../Utils/Input";
import axios from "axios";
import Input from "./Authentication.js/Input";
import {useHistory} from 'react-router-dom'
import {apiURL} from '../Utils/apiURL'
const SignUpPage = ({onLogin, modalClose }) => {
  const username = useInput("");
  const email = useInput("");
  const fullname = useInput("");
  const age = useInput("");
  const profile_pic = useState("");
  const history = useHistory()
  const [image, setImage] = useState(null);
  const API = apiURL()
  const [error, setError] = useState("");


  const handleUpload = event => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      let res = await axios.post(
        "http://localhost:4000/upload",
        formData,
        config
      );
      let imageUrl = res.data.imageUrl;
      let newUser = await axios.post("http://localhost:4000/users", {
        email: email.value,
        fullname: fullname.value,
        username: username.value,
        age: age.value,
        profile_pic: imageUrl
      });

      if (newUser) {
        sessionStorage.setItem("username", username.value);
        sessionStorage.setItem("id", newUser.data.payload.id);
        modalClose()
        onLogin();
      }
    } catch (error) {
      setError("Invalid Input: Username and/or Email Exists");
    }
  };

  return (
    <>
      <div className="signUpFormContainer">
        <form className="signUpForm" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <Input
              className="input"
              type={"text"}
              name={"username"}
              placeholder={"Pick a Username"}
              input={username}
              
            />
          </div>

          <div className="inputContainer">
            <Input
              className="input"
              type={"text"}
              name={"email"}
              placeholder={"Email"}
              input={email}
            />
          </div>

          <div className="inputContainer">
            <Input
              className="input"
              type={"text"}
              name={"fullname"}
              placeholder={"Full Name"}
              input={fullname}
            />
          </div>

          <div className="inputContainer">
            <Input
              className="input"
              type={"number"}
              name={"age"}
              placeholder={"Age"}
              input={age}
            />
          </div>

          <div className="uploadImage">
            <label>
              {" "}
              Upload Profile Pic:
              <input
                className="uploadImage"
                type={"file"}
                name={"profilePic"}
                onChange={event => handleUpload(event)}
              />
            </label>
          </div>

          <button className="signUpButton" type="submit">
            Login
          </button>
        </form>

        {/* <div>{ !error ? <Error message={error} /> : null}</div> */}
      </div>
    </>
  );
};
export default SignUpPage;