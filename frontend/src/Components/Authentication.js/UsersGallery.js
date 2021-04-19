import React, { useState, useEffect, useContext } from "react";
import { AContext } from "../../Providers/Context";
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";
import Upload from "../Upload";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import ShowComments from "../Comments/ShowComments";
import Likes from "../Likes";
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
import IconButton from "@material-ui/core/IconButton";
import { ImageListItem } from "@material-ui/core";
import { ImageList } from "@material-ui/core";
// import Upload from "../Upload"

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
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
}));
const UsersGallery = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const API = apiURL();
  const { currentUsers, token } = useContext(AContext);
  const [posts, setPosts] = useState([]);
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
      // setPosts(res.data.payload)
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   fetchUserById();
  // }, [token]);

  useEffect(() => {
    fetchUserById();
  }, [posts, token]);

  // const display2 =()=>{
  //   return(
  // <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  //   {posts.map((item) => (
  //     <ImageListItem key={item.img}>
  //       <img
  //         srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
  //             ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
  //         alt={item.title}
  //         loading="lazy"
  //       />
  //     </ImageListItem>
  //   ))}
  // </ImageList>
  //   )
  // }

  const display = posts.map((post) => {
    return (
      <div key={post.id} className="contentDisplay">
        {/* <img src={post.posts_images} /> */}
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid item key={post} xs={12} sm={6} md={4}>
            <Card className={classes.card.posts_images}>
              <CardMedia
                className={classes.cardMedia}
                image={post.posts_images}
                title="Image title"
              />
            </Card>
          </Grid>
        </Container>
      </div>
    );
  });

  return (
    <>
      <div className="UsersGallery">
        {/* <React.Fragment>
        <CssBaseline />

        <main>
          {/* Hero unit */}
        {/* <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <div className={classes.heroButtons}>
                <Grid container spacing={1} justify="center"></Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md"> 
            {/* End hero unit */}
        {/* <Grid container spacing={1}>
              {posts.map((post) => (
                <Grid item key={post} xs={12} sm={6} md={4}>
                  <Card className={classes.card.posts_images}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={post.posts_images}
                      title="Image title"
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>  */}
        {display}
        {/* {display} */}
        {/* </Container>
        </main>
     
      {/* <Upload/> */}
      </div>
    </>
  );
};

export default UsersGallery;
