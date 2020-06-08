import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "../../Image";
import "../../../CSS/User.css";

const Profile = () => {
  const [images, setImages] = useState([]);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState("");

  
  const getImages = async () => {
    const userImages = `http://localhost:4001/users`;
    try {
      let res = await axios.get(userImages);
      debugger
      setImages(res.data.body);
    } catch (error) {
      setImages([]);
    }
  };
  
  useEffect(() => {
    getImages();
    getUserProfile();
  }, []);
  
  const getUserProfile = async () => {
    const userProfile = `http://localhost:4001/users/:id`;
    try {
      let res = await axios.get(userProfile);
  
      setUsername(res.data.body.users[0]);
      setUsers(res.data.body);
    } catch (error) {
      setUsers("");
    }
  };

  return (
    <div className="Profile">
   
    </div>
  );
};

export default Profile;
