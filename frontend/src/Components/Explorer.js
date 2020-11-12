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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 300,
    height: 250,
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
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
            <GridListTile key={post.posts_images}>
              <img
                src={post.posts_images}
                alt={post.title}
                width="300px"
                height="300px"
              />
              < ShowComments />
              {/* <div className="allPics" key={post.id + post.posts_images + post.content} > */}
              <img
                alt="allImg"
                className="postImages"
                src={post.posts_images}
                width="300px"
                height="200px"
              />
              <p value={post.content}>
                {post.content}
                <br></br>
                {post.post_time}
              </p>
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
