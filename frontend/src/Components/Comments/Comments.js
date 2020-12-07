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
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let dataObj = {
       
        postId: postId,
      };
      const res = await axios.post(API + `/comments`, dataObj);
      // let res = await axios({
      //   method: "post",
      //   url: `${API}/comments/${currentUsers.id}`,
      //   data: { comments: comments },
      //   headers: {
      //     AuthToken: token,
      //   },
      // });
      debugger
      setPostId(res.data.payload)
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
          placeholder="comments"
        />
      <li>
        {comments}
        </li>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
export default Comments