import React from "react";
import "../CSS/Footer.CSS";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFF",
    color: "#A9A9A9",
    minHeight: "2rem",
    display: "flex",
    alignItems: "center",
    "& *": {
      fontFamily: "Arial",
    },
  },
  content: {
    margin: theme.spacing(1),
    fontSize: 8,
    
  },

  
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footer">
      <BottomNavigation className={classes.root}>
        <a href={`https://about.instagram.com/about-us`}>
          <Typography className={classes.content} align="center"  color="textSecondary" >
            ABOUT
          </Typography>
        </a>
        <a href="https://help.instagram.com/">
          <Typography className={classes.content} align="center"color="textSecondary">
            {" "}
            HELP
          </Typography>
        </a>
        <a href="https://about.instagram.com/blog/">
          <Typography className={classes.content} align="center" color="textSecondary">
            PRESS
          </Typography>
        </a>
        <a href="https://www.instagram.com/developer/">
          <Typography className={classes.content} align="center"color="textSecondary">
            API
          </Typography>
        </a>
        <a href="https://www.instagram.com/about/jobs/">
          <Typography className={classes.content} align="center"color="textSecondary">
            {" "}
            JOBS
          </Typography>
        </a>
        <a href="https://help.instagram.com/519522125107875">
          <Typography className={classes.content} align="center"color="textSecondary">
            PRIVACY
          </Typography>
        </a>
        <a href="https://help.instagram.com/581066165581870">
          <Typography className={classes.content} align="center"color="textSecondary">
            TERMS
          </Typography>
        </a>
        <a href="https://www.instagram.com/explore/locations/">
          <Typography className={classes.content} align="center"color="textSecondary">
            LOCATIONS
          </Typography>
        </a>
        <a href="https://www.instagram.com/directory/profiles/">
          <Typography className={classes.content} align="center"color="textSecondary">
            TOP ACCOUNTS
          </Typography>
        </a>
        <a href={`https://www.instagram.com/directory/hashtags/`}>
          <Typography className={classes.content} align="center"color="textSecondary">
            HASHTAGS 
          </Typography>
        </a>
       
        <a
          href={`https://www.linkedin.com/in/deja-flynn`}
          className={classes.content}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>

        <a
          href={`https://github.com/DejaLFlynn?tab=repositories`}
          className={classes.content}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      </BottomNavigation>
    </div>
  );
};

export default Footer;
