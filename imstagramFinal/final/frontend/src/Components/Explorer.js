import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../Utils/apiURL";
import "../CSS/Explore.CSS";
import Likes from "./Likes";
import NavBar from './Authentication.js/NavBar'
const Explorer = () => {
  const [posts, setPosts] = useState([]);
  const API = apiURL();

  const fetchPosts = async () => {
    try {
      let res = await axios.get(`${API}/posts`);
      debugger

   
      setPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  let displayPics = posts.map((post) => {
    return (
      <div className="allPics" key={post.id + post.posts_images + post.content}>
        <img alt="allImg" src={post.posts_images}></img>
        <p value={post.content}></p>
      </div>
    );
  });
  return (
    <div className="Explorer">
      <NavBar/>
      <div className="pictureContainer">
        {/* <img alt="allPics" src={posts}></img> */}
        {displayPics}
        {/* <Likes/> */}
      </div>
    </div>
  );
};
export default Explorer;
