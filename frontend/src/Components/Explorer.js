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
import NewLike from './NewLike'

//component displays posts, image, caption and date created from database
//grab contexts from all post
//comments can be made for posts
//likes can be made for post
const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardMedia: {
//     paddingTop: "56.25%", // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
}));

const Explorer = () => {
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [posts, setPosts] = useState([]);
  const [pic, setPic] = useState([]);
  const [homePosts, setHomePosts] = useState([])
  const API = apiURL();
  const { currentUser, token } = useContext(AContext);
  const classes = useStyles();

  const fetchPosts = async () => {
    try {
      let res = await axios.get(`${API}/posts`);
      debugger
      setPosts(res.data.posts);
      setPic(res.data.pic)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const showHomePosts = posts.map((post)=>{
    return(
       <div>
         <img
         src={post.posts_images}>
         
         </img>
      
       </div>
    )
 
})

  return (
    <div className="Explorer">
<div>

     <NavBar>
     </NavBar>
     <IconButton>
       
     </IconButton>
     <div>
     {showHomePosts}
     </div>
</div>


    </div>
  );
};
export default Explorer;
