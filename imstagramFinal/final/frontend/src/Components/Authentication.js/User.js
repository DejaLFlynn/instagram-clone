import React, { useState, useEffect, useContext } from "react";
import {AContext} from '../../Providers/Context'
import {useHistory, Link} from 'react-router-dom'
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";
import Posts from '../Posts'
import Upload from "../Upload";
const User = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [pic, setPic] = useState("");
  const API = apiURL();
  const history =useHistory()

  const fetchUser = async () => {
    try {
      let res = await axios.get(`${API}/users`);
      let res2 = await axios.get(`${API}/users/${users}`);
      setName(res2.data.body.users[0].name);
      setBio(res2.data.body.users[0].bio);
      setPic(res2.data.body.users[0].user_pic);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  // const fetchPosts = async () => {
  //   let res = await axios({
  //     method: "GET",
  //     url: `${API}/posts`,
  //   });
  //   setBio(res.data);
  //   setPic(res.data)
  // };

  // useEffect(() => {
  //   // fetchUsers();
  //   fetchPosts();
  // }, [API]);


  return (
    <div className="User" >
      <h1>{name}</h1>
      <h2>{bio}</h2>
      <img src={pic}></img>
      {/* <Posts/> */}
    </div>
  );
};

export default User;
