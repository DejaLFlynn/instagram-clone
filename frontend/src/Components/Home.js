import React from "react";
import { useHistory, Link } from "react-router-dom";
import { login } from "../Utils/Firebase";
import { apiURL } from "../Utils/apiURL";
// import "../CSS/Home.css";
import SignIn from "./Authentication.js/SignIn";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "justify",
    color: theme.palette.text.secondary,
  },
}));

const API = apiURL();
const Home = () => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <>
      <div className="div">
        <div className={classes.root}>
          <Grid container spacing={3} >
            <Grid item xs={6}>
              <div className="rightSide">
                <img
                  src="https://i.postimg.cc/RhDKs1vV/igphones.png"
                  alt="iphone"
                  width="400px"
                ></img>
              </div>
            </Grid>
            <Grid item xs={6}>
              <SignIn />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
