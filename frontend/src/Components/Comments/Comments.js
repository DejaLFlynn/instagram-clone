import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../Utils/apiURL";
import { AContext } from "../../Providers/Context";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// component has form that passes back the userId, postId and comments to database
// uses button to fire request
// display comments of a post
// display a form for leaving new comments on post
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // "& > *": {
    //   backgroundColor: theme.palette.background.paper,
    //   position: "left",
    // },
  },

  name: {
    //   display: "flex",
    //   // useStyles: "none",
    //   flexDirection: "column",
    //   padding: "8px 4px",
    // 	// 	display: "flex",
    // alignItems: "left",
    // display: "flex",
    // textAlign: 'left',
    // flexWrap: "no-wrap",
  },
  inline: {
    display: 'inline',
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
  const [userName, setUserName] = useState([]);
  const API = apiURL();
  const [content, setContent] = useState("");
  const history = useHistory();
  const classes = useStyles();

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
      setUserName(res.data.payload.name);
    } catch (error) {
      console.log(error);
    }
  };
  const getComments = async () => {
    try {
      const res = await axios.get(API + `/posts/${post_id}/comments`);
      setComments(res.data.comments);
      setUserPic(res.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);
  // console.log("comments", comments)
  const displayComments = comments.map((comment) => {
    return (
      <>
      <ListItem alignItems="left">
       
      <ListItemText primary={comment.name }
         secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textSecondary"
            // alignItems="left"
         
          >
            {comment.content}
          </Typography>
     
      } >
        

      </ListItemText>
      
     
      {/* <ListItemText
 
        secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textSecondary"
              alignItems="left"
            >
              {comment.content}
            </Typography>
       
        }
          /> */}
    </ListItem>
      {/* <ListItem className={classes.name}> */}
        {/* <ListItemText primary={comment.name } secondary={  comment.content} /> */}
        {/* <span>{comment.name + " "}</span>
        {comment.content} */}
      {/* </ListItem> */}
        </>
    );
  });

  return (
    <div className="body">
      <List>
        {displayComments}
      </List>

      <form onSubmit={handleSubmit}>
        <FormControl className={classes.margin}>
          <Input
            value={commentText}
            onChange={(e) => setCommentText(e.currentTarget.value)}
            type="text"
            placeholder="Add Comment"
            startAdornment={
              <InputAdornment position="start">
                <SentimentSatisfiedOutlinedIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit" color="primary">
          𝗣𝗼𝘀𝘁
        </Button>
      </form>
    </div>
  );
};
export default Comments;
