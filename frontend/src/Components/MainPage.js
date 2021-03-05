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
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      alignItems: "stretch"
    },
    column: {
      flexDirection: "column"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));
const MainPage = () => {
    const classes = useStyles();
  return (
    <div>
        <NavBar/>
       <CssBaseline />
      <Grid container className={classes.root}>
        {/* COLUMN ONE */}
        <Grid container item className={classes.column}>
    
          <Grid container item>
            <Grid item xs={8}>
              <Paper className={classes.paper}><Explorer/></Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}><SideBar/></Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
