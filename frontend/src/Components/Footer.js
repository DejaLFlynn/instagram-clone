import React from "react";
import "../CSS/Footer.CSS";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
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
 <div></div>
      // <BottomNavigation className={classes.root}>
      //   <Link href={`https://about.instagram.com/about-us`}>
      //     <Typography
      //       className={classes.content}
      //       align="center"
      //       color="textSecondary"
      //       // onClick={preventDefault}
      //     >
      //       ABOUT
      //     </Typography>
      //   </Link>
      //   <Link href="https://help.instagram.com/">
      //     <Typography
      //       className={classes.content}
      //       align="center"
      //       color="textSecondary"
      //     >
      //       {" "}
      //       HELP
      //     </Typography>
      //   </Link>
      //   <Link href="https://about.instagram.com/blog/">
      //     <Typography
      //       className={classes.content}
      //       align="center"
      //       color="textSecondary"
      //     >
      //       PRESS
      //     </Typography>
      //   </Link>
      //   <Link href="https://www.instagram.com/developer/">
      //     <Typography
      //       className={classes.content}
      //       align="center"
      //       color="textSecondary"
      //     >
      //       API
      //     </Typography>
      //   </Link>
      //   <Link href="https://www.instagram.com/about/jobs/">
      //     <Typography
      //       className={classes.content}
      //       align="center"
      //       color="textSecondary"
      //     >
      //       {" "}
      //       JOBS
      //     </Typography>
      //   </Link>
      //   <Link href="https://help.instagram.com/519522125107875">
      //     <Typography
      //       className={classes.content}
      //       align="center"
      //       color="textSecondary"
      //     >
      //       PRIVACY
      //     </Typography>
      //   </Link>
      //   <Link href="https://help.instagram.com/581066165581870">
      //     <Typography
      //       className={classes.content}
      //       align="center"
      //       color="textSecondary"
      //     >
      //       TERMS
      //     </Typography>
      //   </Link>
      //   <Link href="https://www.instagram.com/explore/locations/">
      //     <Typography
      //       className={classes.content}
      //       align="center"
      //       color="textSecondary"
      //     >
      //       LOCATIONS
      //     </Typography>
      //   </Link>
      //   <Link href="https://www.instagram.com/directory/profiles/">
      //     <Typography
      //       className={classes.content}
      //       align="center"
      //       color="textSecondary"
      //     >
      //       TOP ACCOUNTS
      //     </Typography>
      //   </Link>
      //   <Link href={`https://www.instagram.com/directory/hashtags/`}>
      //     <Typography
      //       className={classes.content}
      //       align="center"
      //       color="textSecondary"
      //     >
      //       HASHTAGS
      //     </Typography>
      //   </Link>

      //   <Link
      //     href={`https://www.linkedin.com/in/deja-flynn`}
      //     className={classes.content}
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     <LinkedInIcon />
      //   </Link>

      //   <Link
      //     href={`https://github.com/DejaLFlynn?tab=repositories`}
      //     className={classes.content}
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     <GitHubIcon />
      //   </Link>
      // </BottomNavigation>
   
   
  );
};

export default Footer;
