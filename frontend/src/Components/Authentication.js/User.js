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
import UserPosts from "./UserPosts";
import SideBar from "../Comments/SideBar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
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
    flexGrow: 1,
    alignItems: "stretch",
    
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
  profile: {
    position: 'absolute', 
    left: '40%', 
    top: '30%',
    transform: 'translate(-50%, -50%)'
    

  },

  avatar: {
    width: "200px",
    height: "200px",
    left: '20%', 
    // backgroundColor: red[500],
    position: "center",
    
  },
  userName: {},
  bio: {},
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
      // debugger
      setProfile(res.data.payload);
      setUserName(res.data.payload.name);
      setBio(res.data.payload.bio);
      setUserPic(res.data.payload.user_pic);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchUserById();
  }, [profile, token]);

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper>
          <NavBar />
        </Paper>
      </Grid>
      <CssBaseline />
        <Avatar className={classes.avatar} src={userPic}></Avatar>
  
      <div className={classes.profile}>

          <h2> {userName}</h2>
          <p> {bio}</p>
    
   
      </div>
      <div>
        <img src="https://i.postimg.cc/nh6Y34Hp/Screen-Shot-2021-03-05-at-1-50-34-PM.png" />
      </div>
      <Upload />
      <UsersGallery />

      {/* <SideBar className={classes.sidebar} /> */}
    </div>
  );
};

export default User;
