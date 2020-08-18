import React, { useState, useEffect, useContext } from "react";
import {AContext} from '../../Providers/Context'
import {useHistory, Link} from 'react-router-dom'
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";

import NavBar from './NavBar'
const User = () => {
  // const id = currentUser.id
  const [users, setUsers] = useState([])
  const { currentUser } = useContext(AContext);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [pic, setPic] = useState("");
  const API = apiURL();
  const history =useHistory()

  const fetchPosts = async () => {
    let res = await axios({
      method: "GET",
      url: `${API}/users`,
    });
    
    // setUsers(res.data.payload.users[0])
    setName(res.data.payload.users[0].name);
    setBio(res.data.payload.users[0].bio);
    setPic(res.data.payload.users[0].user_pic);
  };

  useEffect(() => {
    // fetchUsers();
    fetchPosts();
  }, []);


  return (
    <div className="User" >
      <h1>{name}</h1>
      <h2>{bio}</h2>
      <img src={pic}></img>
      {/* <Posts/> */}
      <NavBar/>
    </div>
  );
};

export default User;
