import React, { useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../../Utils/apiURL";
import { AContext } from "../../Providers/Context";
import {useHistory} from "react-router-dom";
// component has form that passes back the userId, postId and content to database
//uses button to fire request


const  Comments =({ post_id }) =>{
  const [content, setContent] = useState("");
  const [postId, setPostId] = useState("");
  const { currentUsers, token, loading } = useContext(AContext);
  const API = apiURL();
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      let res = await axios({
        method: "post",
        url: `${API}/comments/${currentUsers.id}`,
        data: { content: content },
        headers: {
          AuthToken: token,
        },
      });
      // debugger
      setPostId(res.data.payload)
      // res.data.body.comment.id = res.data.body.id["id"]
      setContent(res.data.body.content);
      history.push("/posts")
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
          type="text"
          placeholder="comments"
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
export default Comments