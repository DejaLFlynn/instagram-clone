import React, { useState, useEffect, useContext } from "react";
import { AContext } from "../../Providers/Context";
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";
import GridListTile from "@material-ui/core/GridListTile";
import CardMedia from "@material-ui/core/CardMedia";

import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import { GridList } from "@material-ui/core";
// import { ImageListItem } from "@material-ui/core";
// import { ImageList } from "@material-ui/core";
import Upload from "../Upload"

// import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    // paddingTop: theme.spacing(8),
    // paddingBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "row",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    
  },
}));
const UsersGallery = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const API = apiURL();
  const { currentUsers, token } = useContext(AContext);
  const [userPosts, setPosts] = useState([]);
  const classes = useStyles();

  const fetchUserById = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `${API}/posts/${currentUsers.id}`,
        headers: {
          AuthToken: token,
        },
      });

      setPosts(res.data.usersPosts);
    
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchUserById();
  }, [userPosts, token]);

  
  return (
		<div id="PostsGalleryDiv" className={classes.root}>
			<GridList
				id="gridList"
				cols={3}
				cellHeight={300}
				spacing={30}
				className={classes.GridList}
			>
				{userPosts.map((postImg) => {
					return (
						<GridListTile id="GridListTile">
							<img
								key={postImg.id}
								src={postImg.posts_images}
								alt="user_Post"
								className="displayPicturesPost"
							
							/>
          <Upload />
						</GridListTile>
					);
				})}
			</GridList>
		</div>
	);
};

export default UsersGallery;
