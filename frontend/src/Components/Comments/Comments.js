import React, { useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../../Utils/apiURL";
import { AContext } from "../../Providers/Context";
import {useHistory} from "react-router-dom";
// component has form that passes back the userId, postId and comments to database
//uses button to fire request


const  Comments =({ post_id }) =>{
  const [comments, setComments] = useState("");
  const [postId, setPostId] = useState("");
  const { currentUsers, token, loading } = useContext(AContext);
  const API = apiURL();
  const [content, setContent] = useState("")
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let dataObj = {
        
        postId: postId,
        content,
      };
      const res = await axios.post(API + `/comments`, dataObj);
      debugger
      setPostId(res.data.payload)
      setContent("")
      // res.data.body.comment.id = res.data.body.id["id"]
      setComments(res.data.body.comments);
      history.push("/posts")
    } catch (error) {
        console.log(error)
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.currentTarget.value)}
          type="text"
          placeholder="Add Comment"
        />
      <li>
        {comments}
        </li>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
export default Comments