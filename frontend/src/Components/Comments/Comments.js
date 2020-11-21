import React, { useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../../Utils/apiURL";
import { AContext } from "../../Providers/Context";
// component has form that passes back the userId, postId and content to database
//uses button to fire request


export default function CommentsForm({ id, createComment }) {
  const [content, setContent] = useState("");
  const [postId, setPostId] = useState("");
  const { currentUsers, token, loading } = useContext(AContext);
  const API = apiURL();

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
      debugger;

      // res.data.body
      createComment(res.data.body.content);
    } catch (error) {}
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
