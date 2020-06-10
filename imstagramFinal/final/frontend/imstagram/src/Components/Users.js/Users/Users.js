import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "../../Image";
import "../../../CSS/User.css";
// import {imstaURL} from '../Util/imstaURL'
const Profile = () => {
  const [images, setImages] = useState([]);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState("");
// const API = imstaURL()
  
  const getImages = async () => {
    const userImages = `http://localhost:4001/users`;
    try {
      let res = await axios.get(userImages);
      debugger

      setImages(res.data.body.users);
    } catch (error) {
      setImages([]);
    }
  };
  
  useEffect(() => {
    getImages();
  
  }, []);
  
  const getUserProfile = async () => {
    const userProfile = `http://localhost:4001/users`;
    try {
      let res = await axios.get(userProfile);
  
      setUsername(res.data.body.users[0]);
      setUsers(res.data.body);
    } catch (error) {
      setUsers("");
    }
  };

  return (
    <div className="Profile" key={users.users}>
     
      </div>
  );
};

export default Profile;
