import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../Utils/apiURL";
import { AContext } from "../Providers/Context";
import "../CSS/Explorer.css";
import Avatar from "@material-ui/core/Avatar";
import ShowComments from "./Comments/ShowComments";
import Likes from "./Likes";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavBar from "./Authentication.js/NavBar";
import Footer from "./Footer";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ShowContent from "./Comments/ShowComments";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { fetchPostUser } from "../Utils/UserCalls";
import Search from "./Search";
import NewLike from "./NewLike";
import Like from './Likes'
import SideBar from '../Components/Comments/SideBar'
import Comments from "./Comments/Comments";
import { red } from "@material-ui/core/colors";
import { CardHeader } from "@material-ui/core";
import NewComment from "./NewComment";
import NewComments from "./Comments/NewComments";
//component displays posts, image, caption and date created from database
//grab contexts from all post
//comments can be made for posts
//likes can be made for post
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 750,
    position: 'center',
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

const Explorer = () => {
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [posts, setPosts] = useState([]);
  const [pic, setPic] = useState([]);
  const [userPic, setUserPic] = useState([]);
  const [postContent, setPostContent] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const API = apiURL();
  const { currentUser, token } = useContext(AContext);
  const [userName, setUserName] = useState("");
  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const fetchPosts = async () => {
    try {
      let res = await axios.get(`${API}/posts`);
     
      setPosts(res.data.posts);
      setPic(res.data.pic);
      setPostContent(res.data.content);
      setUserPic(res.data.user_pic);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const showHomePosts = posts.map((post) => {
    return (
      <div>
        
       <Card className={classes.root}>
         <CardHeader
         avatar={
          <Avatar src={post.user_pic}></Avatar>
         }
         action={
          <IconButton aria-label="settings">
           
          </IconButton>
        }
        title={userName}
       
      />
      <CardMedia
         
         className={classes.media}
         image={post.posts_images}
         title="userPics"
       />
    <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.content}
          </Typography>
        </CardContent>
        <CardContent>
        <NewLike/>
        </CardContent>
        <CardContent>
        {/* <Comments/> */}
        <NewComments/>
        </CardContent>
       </Card>
      
      </div>
    );
  });

  return (
    <div className="Explorer">
      <div>
       
        <IconButton></IconButton>

        <div>{showHomePosts}
       
      
        </div>
      </div>
     
    </div>
  );
};
export default Explorer;
