import React from "react";
import Explorer from "./Explorer";
import NavBar from "./Authentication.js/NavBar";
import SideBar from "./Comments/SideBar";
import Home from "./Home";
import Likes from "./Likes";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    
    alignItems: "stretch",
  },
  column: {
    flexDirection: "column",
    alignContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const MainPage = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Grid item xs={12}>
        <Paper>
          <NavBar />
        </Paper>
      </Grid>
      <Grid container className={classes.root}>
        <Grid container item className={classes.column}>
          <Grid container item>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <Likes />
                <Explorer />
              </Paper>
            </Grid>
         
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
