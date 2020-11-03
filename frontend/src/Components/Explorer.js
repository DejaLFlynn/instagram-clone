import React, {useContext, useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../Utils/apiURL";
import {AContext} from "../Providers/Context"
import "../CSS/Explore.CSS";
import Grid from "@material-ui/core/Grid";
import Likes from "./Likes";
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Paper'
import NavBar from './Authentication.js/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& *': {
        fontFamily: 'audiowide',
        outlineColor: '#36386D',
        border: 'none',
    },
},
}))
const Explorer = () => {
  const [posts, setPosts] = useState([]);
  const [pic, setPic] = useState("");
  const [name, setName] = useState("")
  const API = apiURL();
  const {currentUser, token} = useContext(AContext)
  const classes = useStyles();


  const fetchPosts = async () => {
    try {
      let res = await axios.get(`${API}/posts`);
      debugger

   
      setPosts(res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  let displayPics = posts.map((post) => {
    return (
      <div className="allPics" key={post.id + post.posts_images + post.content}>
        <img alt="allImg" className="postImages" src={post.posts_images}></img>
        <p value={post.content}></p>
      </div>
    );
  });
  return (
    // <Grid className={classes.root} container display="flex" direction="row" justify="center" alignItems="center">
    //   {posts.map(post=>{
    //     return(
    //       <Grid className={classes.post} display="flex" direction="column" justify="center" alignItems="center">
    //         <Typography className={classes.text} >{post.content}</Typography>
    //         <Card src={post.posts_images} classes={classes.Card}>

    //         </Card>
    //       </Grid>
    //     )})}

    <div className="Explorer">
      <NavBar/>
      <div className="pictureContainer">
      
        {displayPics}
       
      </div>
    </div>
    // </Grid>
  );
};
export default Explorer;
