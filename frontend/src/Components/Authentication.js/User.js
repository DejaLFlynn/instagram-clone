import React, { useState, useEffect, useContext } from "react";
import { AContext } from "../../Providers/Context";
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";
import Upload from "../Upload";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import UsersGallery from "./UsersGallery";
import UserPosts from './UserPosts'
// component displays the info saved in the database for the current logged-in user
//grab context that contains the current user✅
//fire network request using axios to the backend using the current user id to retrieve the user information stored in database
//save the user information to the state
//render user information from the state
//user may upload new pics from component to the database
//display pictures thant belong to logged-in user uploaded by logged-in user
//make a new component for user gallery and call in return
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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

const User = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const API = apiURL();
  const [profile, setProfile] = useState([]);
  const { currentUsers, token, loading } = useContext(AContext);
  const [newProfile, setNewProfile] = useState(null);
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [userPic, setUserPic] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const fetchUserById = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `${API}/users/${currentUsers.id}`,
        headers: {
          AuthToken: token,
        },
      });

      setProfile(res.data.payload);
      setUserName(res.data.payload.name);
      setBio(res.data.payload.bio);
      setUserPic(res.data.payload.user_pic);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   fetchUserById();
  // }, [token]);

  useEffect(() => {
    fetchUserById();
  }, [profile, token]);

  return (
    <div className="User">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <NavBar />
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              M
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={userName}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={userPic}
          title="userPics"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {bio}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>More info:</Typography>
            <Typography paragraph>More info</Typography>
            <Typography paragraph>More Info</Typography>
            <Typography paragraph>More info</Typography>
            <Typography>More info</Typography>
          </CardContent>
        </Collapse>
      </Card>
      <UserPosts/>
      <UsersGallery />
      <NavBar />
      {/* <Upload /> */}
    </div>
  );
};

export default User;
