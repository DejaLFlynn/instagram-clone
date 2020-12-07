import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../Utils/apiURL";
import { AContext } from "../Providers/Context";
import "../CSS/Explorer.css";
import Avatar from "@material-ui/core/Avatar";
import ShowComments from "./Comments/ShowComments";
import Likes from "./Likes";
import FavoriteIcon from '@material-ui/icons/Favorite';
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
//component displays posts, image, caption and date created from database
//grab contexts from all post
//comments can be made for posts
//likes can be made for post
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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Explorer = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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


  return (
    <div className="Explorer">
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              <NavBar />
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Explore Users
              </Typography>

              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center"></Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {posts.map((post) => (
                <Grid item key={post} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={post.posts_images}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {post.content}
                      </Typography>
                      <Typography>{post.content}</Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton size="small" color="primary" >
                        {/* <Likes /> */}
                      </IconButton>
                      <ShowComments />
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
          
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            <Footer />
          </Typography>
        </footer>
      </React.Fragment>
    </div>
  );
};
export default Explorer;
