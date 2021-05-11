import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
  },
}));
const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ width: "100%" }}></div>
{/* 
      <img src="https://i.postimg.cc/Sxrx5RNv/Screen-Shot-2021-03-01-at-11-58-03-AM.png"></img> */}
    </div>
  );
};

export default SideBar;
