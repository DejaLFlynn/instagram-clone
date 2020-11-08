import React, { useState, useEffect, useContext } from "react";
import { AContext } from "../../Providers/Context";
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";
import Upload from "../Upload";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
// component displays the info saved in the database for the current logged-in user
//grab context that contains the current user✅
//fire network request using axios to the backend using the current user id to retrieve the user information stored in database
//save the user information to the state
//render user information from the state
//user may upload new pics from component to the database
//display pictures thant belong to logged-in user uploaded by logged-in user

const User = () => {
  const API = apiURL();
  const [profile, setProfile] = useState([]);
  const { currentUsers, token, loading } = useContext(AContext);
  const [newProfile, setNewProfile] = useState(null);
  const [userName, setUserName] = useState("")
  const [bio, setBio] = useState("")
  const [userPic, setUserPic] = useState("")



  const fetchUserById = async () => {

    try {
      let res = await axios({
        method: "get",
        url: `${API}/users/${currentUsers.id}`,
        headers: {
          AuthToken: token,
        },
      });
     
      setProfile(res.data.payload);
      setUserName(res.data.payload.name)
      setBio(res.data.payload.bio)
      setUserPic(res.data.payload.user_pic)
     
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUserById();
  }, [token]);

  useEffect(() => {
    fetchUserById();
  }, [profile, token]);


  return (
    <div className="User">
      <NavBar />
      <Upload />
      <div></div>
      <h1>{userName}</h1>
      <h2>{bio}</h2>
      <img src={userPic} alt="profilePic"></img> 
    </div>
  );
};

export default User;
