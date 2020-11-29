import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../Utils/apiURL";
import { AContext } from "../Providers/Context";
// import "../CSS/Explorer.css";

import ShowComments from './Comments/ShowComments'
import Likes from "./Likes";

import NavBar from "./Authentication.js/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ShowContent from "./Comments/ShowComments";
//component displays posts, image, caption and date created from database
//grab contexts from all post
//comments can be made for posts
//likes can be made for post
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: '1fr 1fr 1fr 1fr',

    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    gridRow: '1/4',
    width: 300,
    height: 250,
  },
  gridListTile: {
    // width: 300,
    // height: 250,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));
const Explorer = () => {
  const [posts, setPosts] = useState([]);
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
 
  const API = apiURL();
  const { currentUser, token } = useContext(AContext);
  const classes = useStyles();

  const fetchPosts = async () => {
    try {
      let res = await axios.get(`${API}/posts`);
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
      <div className={classes.root}>
        <GridList cellHeight={180} cols={4} className={classes.gridList}>
          <GridListTile key="Subheader" className={classes.gridListTile} cols={4} style={{ height: "auto" }}>
            <GridListTile key={post.posts_images}>
              <img
                src={post.posts_images}
                alt={post.title}
                width="200px"
                height="300px"
              />
           
              <p value={post.content}>
                {post.content}
                <br></br>
                {post.post_time}
                
              </p>
              <ShowContent/>
              <Likes/>

              {/* </div> */}
            </GridListTile>
          </GridListTile>
        </GridList>
      </div>
    );
  });
  return (
    <div className="Explorer">
      <NavBar />

      <div className="pictureContainer">{displayPics}</div>
    </div>
  );
};
export default Explorer;
