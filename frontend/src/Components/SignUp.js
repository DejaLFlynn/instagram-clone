import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiURL } from "../Utils/apiURL";
import { signUp } from "../Utils/Firebase";
import { AContext } from "../Providers/Context";
import { storage } from "../Firebase";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//component signs up user using name, email, password and picture
//sends data to firebase
//qurans@gmail.com
//password
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { token } = useContext(AContext);
  const [url, setUrl] = useState("");
  const [bio, setBio] =useState("");
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
        data: { id: res.user.uid, email: email, name: name, image: url },

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

  // console.log("image: ", uploadPic);

  return (
    <>
      <div>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={bio}
                onChange={(e) => setBio(e.currentTarget.value)}
                required
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
            <input type="file" onChange={handleChange} />
          <br />
          
       
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
      
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
           
            </Grid>
          </Grid>
        </form>
            <button onClick={handleUpload}>Upload Image</button>
      </div>
      <Box mt={5}>
   
      </Box>
    </Container>
        {/* {error ? <div>{error}</div> : null} */}
        {/* <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            placeholder="name"
          />
           <input
            value={bio}
            onChange={(e) => setBio(e.currentTarget.value)}
            type="text"
            placeholder="bio"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="text"
            placeholder="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            autoComplete="on"
            type="password"
            placeholder="password"
          />
          <input type="file" onChange={handleChange} />
          <br />
           <Dropzone handleImageChange={handleImageChange} dropzoneText={"Drop or Select Your Profile Image"}/> 
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={handleUpload}>Upload Image</button> */}
      </div>
    </>
  );
};

export default SignUpPage;
