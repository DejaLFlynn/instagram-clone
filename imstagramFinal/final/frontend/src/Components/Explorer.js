import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../Utils/apiURL";

const Explorer = () => {
  const [posts, setPosts] = useState('');
  const API = apiURL();

  const fetchPosts = async () => {
  try {
    let res = await axios.get(`${API}/posts`);
    setPosts(res.data.posts[0].posts_images)
      
  } catch (error) {
      console.log(error)
  }
  }
 useEffect(()=>{
     fetchPosts()
 },[])
  return (<div className="Explorer">
<img src={posts}>
</img>
  </div>
  );
};
export default Explorer;
