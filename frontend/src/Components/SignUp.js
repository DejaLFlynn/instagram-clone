import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiURL } from "../Utils/apiURL";
import { signUp } from "../Utils/Firebase";
import { AContext } from "../Providers/Context";
import { storage } from "../Firebase";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
//component signs up user using name, email, password and picture
//sends data to firebase
//qurans@gmail.com
//password
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 445,
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
              <Button
                onClick={handleUpload}
                fullWidth
                variant="contained"
                color="primary"
                label="Log In"
              >
                Upload Image
              </Button>
            </CardContent>
          </div>
          <Box mt={5}></Box>
        </Card>
        <Card className={classes.root}>
          <CardActionArea className={classes.root} padding="10px">
            <Link to="/" className="signUp">
              Have an account?
              <span className="span"> Login </span>
            </Link>
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
        </Card>
      </Grid>
    </>
  );
};

export default SignUpPage;
// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { apiURL } from "../Utils/apiURL";
// import { signUp } from "../Utils/Firebase";
// import { AContext } from "../Providers/Context";
// import { storage } from "../Firebase";

// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// // //component signs up user using name, email, password and picture
// // //sends data to firebase
// // //qurans@gmail.com
// // //password
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       <Link color="inherit" href="https://material-ui.com/">
//         https://cta-imstagram.netlify.app/
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignUpPage() {
//   const classes = useStyles();
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const { token } = useContext(AContext);
//   const [url, setUrl] = useState("");
//   const [bio, setBio] = useState("");
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState(null);
//   const API = apiURL();
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await signUp(email, password);
//       // debugger

//       let res2 = await axios({
//         method: "post",
//         url: `${API}/users`,
//         data: { id: res.user.uid, email: email, name: name, image: url },

//         headers: {
//           AuthToken: token,
//         },
//       });

//       console.log(res2.data);
//       history.push("/posts");
//     } catch (error) {
//       setError(error.message);

//       console.log(error);
//     }
//   };
//   const handleChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };
//   const handleUpload = (e) => {
//     e.stopPropagation();
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {},
//       (error) => {
//         console.log(error);
//       },
//       () => {
//         storage
//           .ref("images")
//           .child(image.name)
//           .getDownloadURL()
//           .then((url) => {
//             setUrl(url);
//           });
//       }
//     );
//   };
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="Username"
//                 value={name}
//                 onChange={(e) => setName(e.currentTarget.value)}
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Bio"
//                 name="lastName"
//                 autoComplete="lname"
//                 value={bio}
//                 onChange={(e) => setBio(e.currentTarget.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.currentTarget.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.currentTarget.value)}
//                 autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <input type="file" onChange={handleChange} />
//               <br />
//             </Grid>
//           </Grid>

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//             onClick={handleUpload}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//         <Button onClick={handleUpload}>Upload Image</Button>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
