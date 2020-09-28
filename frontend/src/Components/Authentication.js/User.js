import React, { useState, useEffect, useContext } from "react";
import {AContext} from '../../Providers/Context'
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";
import Upload from '../Upload'

import NavBar from './NavBar'
const User = () => {
 
  const { currentUsers, token, loading } = useContext(AContext);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [pic, setPic] = useState("");
  const API = apiURL();

  const fetchPosts = async (user) => {
    let res = await axios({
      method: "GET",
      url: `${API}/users/${currentUsers.uid}`,
      headers:{
        AuthToken: token,
      }
    });
    debugger
    // setUsers(res.data.payload.users[0])
    console.log(currentUsers)
    setName(res.data.user);
    // setBio(res.data.payload.users[0].bio);
    // setPic(res.data.payload.users[0].user_pic);
  };

  useEffect(() => {
    // fetchUsers();
    fetchPosts();
  }, []);


  return (
    <div className="User" >
      <NavBar/>
      <Upload/>
      <div>
        
      </div>
      <h1>{name}</h1>
      <h2>{bio}</h2>
      <img src={pic} alt="profilePic"></img>
     
    </div>
  );
};

export default User;
