import React, { useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../../Utils/apiURL";
import { AContext } from "../../Providers/Context";
import {useHistory} from "react-router-dom";
// component has form that passes back the userId, postId and comments to database
//uses button to fire request
//display comments of a post 
//display a form for leaving new comments on post

const  Comments =({post_id, user_id}) =>{
  const [commentText, setCommentText] = useState("");
  // const [postId, setPostId] = useState("");
  const { currentUsers, token, loading } = useContext(AContext);
  const API = apiURL();
  const [content, setContent] = useState("")
  const history = useHistory()

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    let dataObj = {
      post_id: post_id,
      content:commentText,
      user_id: user_id
    }
    postNewComment(dataObj)
  };


  const postNewComment = async (body) => {
    try {
      const res = await axios.post(API + `/posts/${post_id}/comments`, body);
      debugger
      console.log(res.data)
 
      // handleSubmit(dataObj)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.currentTarget.value)}
          type="text"
          placeholder="Add Comment"
        />
        <button type="submit">Post</button>
      </form>
      <li>
        {commentText}
        </li>
    </div>
  );
  }
export default Comments