import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../Utils/apiURL";
import "../CSS/Explore.CSS";
const Explorer = () => {
  const [posts, setPosts] = useState([]);
  const API = apiURL();

  const fetchPosts = async () => {
    try {
      let res = await axios.get(`${API}/posts`);
   
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
        <img src={post.posts_images}></img>
        <p value={post.content}></p>
      </div>
    );
  });
  return (
    <div className="Explorer">
      <div className="pictureContainer">
        <img src={posts}></img>
        {displayPics}
      </div>
    </div>
  );
};
export default Explorer;
