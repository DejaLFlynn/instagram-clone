import React, { useState, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { apiURL } from "../Utils/apiURL";
import { signUp,login } from "../Utils/Firebase";
import { AContext } from "../Providers/Context";
import { storage } from "../Firebase";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
//component signs up user using name, email, password and picture
//sends data to firebase
//qurans@gmail.com
//password
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    padding: 50,
    backgroundColor: "white",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 240,
    padding: 200,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontWeight: 600,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

const SignUpPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { token } = useContext(AContext);
  const [url, setUrl] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const API = apiURL();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(email, password);

      let res2 = await axios({
        method: "post",
        url: `${API}/users`,
        data: { id: res.user.uid, email: email, name: name, image: url , bio:bio},

        headers: {
          AuthToken: token,
        },
      });

      console.log(res2.data);
      history.push("/posts");
    } catch (error) {
      setError(error.message);

      console.log(error);
    }
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = (e) => {
    e.stopPropagation();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };
  // const handleSubmit2 = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(email, password);
  //     history.push(`/posts`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleGuestSignIn = async () => {
    
  
    await login("guest109@gmail.com","1234abcd");
    history.push("/posts")
}

  return (
    <>
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Card className={classes.root}>
          <CssBaseline />
          <CardContent>
            <img
              src="https://i.postimg.cc/44bfJzn7/Screen-Shot-2020-12-01-at-9-58-32-AM.png"
              width="250"
              height="80px"
            />
          </CardContent>
          <div className={classes.paper}>
            <Typography className={classes.paper}>
              Sign up to see photos and videos from your friends.
            </Typography>
            <CardContent>
              <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <TextField
                  autoComplete="Username"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  variant="filled"
                />

                <TextField
                  value={bio}
                  onChange={(e) => setBio(e.currentTarget.value)}
                  required
                  fullWidth
                  id="bio"
                  label="Bio"
                  name="bio"
                  autoComplete="lname"
                  variant="outlined"
                />

                <TextField
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />

                <TextField
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <input type="file" onChange={handleChange} />
                <br />
                <Button
                onClick={handleUpload}
                fullWidth
                variant="contained"
                color="primary"
                label="Log In"
              >
                Upload Image
              </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  label="Log In"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </form>
              
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </CardContent>
          </div>
          <Box mt={5}></Box>
          <NavLink to={"/"}>
              Have an account?
              <span className="span"> Login </span>
            </NavLink>
            <Button
              className="guest"
              onClick={handleGuestSignIn}
            >
              Guest
            </Button>
            <p>Get the App</p>
            <img
              className="appleStore"
              src="https://losserranosgolfclub.com/wp-content/uploads/Download-on-the-App-Store-button.png"
              alt="appleStore"
              width="100px"
            ></img>
            <img
              className="android"
              src="https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png"
              alt="googlePlay"
              width="120px"
            ></img>
        </Card>
        {/* <Card className={classes.root}>
          <CardActionArea className={classes.root} >
            <NavLink to={"/"}>
              Have an account?
              <span className="span"> Login </span>
            </NavLink>
            <Button
              className="guest"
              // onClick={handleGuestSignIn}
            >
              Guest
            </Button>
            <p>Get the App</p>
            <img
              className="appleStore"
              src="https://losserranosgolfclub.com/wp-content/uploads/Download-on-the-App-Store-button.png"
              alt="appleStore"
              width="100px"
            ></img>
            <img
              className="android"
              src="https://www.fcsok.org/wp-content/uploads/2020/04/get-it-on-google-play-badge.png"
              alt="googlePlay"
              width="120px"
            ></img>
          </CardActionArea>
        </Card> */}
      </Grid>
    </>
  );
};

export default SignUpPage;
