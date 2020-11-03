import React, { useState, useEffect, useContext } from "react";
import {AContext} from '../../Providers/Context'
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";
import Upload from '../Upload'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar'
const User = () => {
  const { currentUsers, token, loading } = useContext(AContext);

  const params = useParams();
  let userId = params.id;

  const [profile, setProfile] = useState(null)
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [pic, setPic] = useState("");
  const API = apiURL();
  const fetchUserById = async(id) => {
    const API = apiURL()
    try {
      let res = await axios.get(API + `/users/${id}`);
      debugger
      return res.data.payload
    } catch (error) {
      console.log(error)
    }
  }
  const fetchPosts = async ()=>{
    try{
      let res = await fetchUserById(userId);
      debugger
      
    }catch(err){
      console.log(err)
    }
  }

  // const fetchPosts = async (user) => {
  //   let res = await axios({
  //     method: "GET",
  //     url: `${API}/users/${currentUsers.uid}`,
  //     headers:{
  //       AuthToken: token,
  //     }
  //   });
  //   debugger
  //   // setUsers(res.data.payload.users[0])
  //   console.log(currentUsers)
  //   setName(res.data.user);
  //   // setBio(res.data.payload.users[0].bio);
  //   // setPic(res.data.payload.users[0].user_pic);
  // };

  useEffect(() => {
    // fetchUsers();
    fetchPosts();
  }, []);
  // let displayPics = users.map((user) => {
  //   return (
  //     <div className="allPics" key={user.id + user.users_images + user.content}>
  //       <img alt="allImg" src={user.users_images}></img>
  //       <p value={user.content}></p>
  //     </div>
  //   );
  // });

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
