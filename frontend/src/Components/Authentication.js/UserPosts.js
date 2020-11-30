import React, { useState, useEffect, useContext } from "react";
import { AContext } from "../../Providers/Context";
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";

const UserPosts = () => {
  const API = apiURL();
  const [posts, setPosts] = useState([]);
  const { currentUsers, token } = useContext(AContext);
  const [postImg, setPostImg] = useState("");
  const [comment, setComment] = useState("");

  const fetchUsersPosts = async () => {
    try {
        let res = await axios.get(`${API}/posts/:id`);
        setPosts(res.data.posts);
    //   let res = await axios({
    //     method: "get",
    //     url: `${API}/posts/${currentUsers.id}`,
    //     headers: {
    //       AuthToken: token,
    //     },
    //   });

      debugger;
      setPosts(res.data.posts);
      setPostImg(res.data.posts.user_pic);
      setComment(res.data.posts.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsersPosts();
  }, []);

  let displayPosts = posts.map((post) => {
    return (
      <div className={displayPosts}>
        <img src={postImg}></img>
        <p value={comment}></p>
      </div>
    );
  });
};

export default UserPosts;
