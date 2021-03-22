import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../Utils/apiURL";
import { AContext } from "../../Providers/Context";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { fetchUserPic } from "../../Utils/UserCalls";
// component has form that passes back the userId, postId and comments to database
//uses button to fire request
//display comments of a post
//display a form for leaving new comments on post
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
    position: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Comments = ({ post_id, user_id }) => {
  const [commentText, setCommentText] = useState("");
  // const [postId, setPostId] = useState("");
  const { currentUsers, token, loading } = useContext(AContext);
  const [comments, setComments] = useState([]);
  const [userPic, setUserPic] = useState([]);
  const API = apiURL();
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let dataObj = {
      post_id: post_id,
      content: commentText,
      user_id: user_id,
    };
    postNewComment(dataObj);
  };

  const postNewComment = async (body) => {
    try {
      const res = await axios.post(API + `/posts/${post_id}/comments`, body);
      setContent(res.data.payload.content);
 
    } catch (error) {
      console.log(error);
    }
  };
  const getComments = async () => {
    try {
      const res = await axios.get(API + `/posts/${post_id}/comments`);
      setComments(res.data.comments);
      setUserPic(res.data.comments)
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);
  const displayComments = comments.map((comment) => {
    return (
      
      <li>
        {/* <Avatar src={comment.user_pic}></Avatar> */}
        {comment.name}{comment.content}
      </li>
    );
  });

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
      
      <ul> {content} {displayComments}</ul>
    </div>
  );
};
export default Comments;
