import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../Utils/Firebase";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChatBubbleOutlineTwoToneIcon from "@material-ui/icons/ChatBubbleOutlineTwoTone";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Search from "../Search";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "../../CSS/NavBar.CSS";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import Likes from '../Likes'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    outlineColor: 'gray',
    outline: 'solid',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
const NavBar = () => {
  const classes = useStyles();
  return (
      <div className="nav_bar">
      

        <AppBar position="static" color="white">
          <Toolbar className="title">

          <NavLink exact to={"/"}>
						{/* <h2 className="titleInst">Imstagram</h2> */}
            <img src="https://i.postimg.cc/44mwxHDp/Screen-Shot-2021-01-29-at-8-20-32-PM.png" width="450px"></img>
					</NavLink>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>
          <NavLink to={"/posts"}>
            <HomeOutlinedIcon></HomeOutlinedIcon>
          </NavLink>
          <NavLink to={"/users/:id"}>
            <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
          </NavLink>
          <ExitToAppRoundedIcon>
            <NavLink to={"/login"}>Login</NavLink>
          </ExitToAppRoundedIcon>

          </Toolbar>
        </AppBar>
        <br></br>
        <Likes/>
      
        {/* <nav>
          <NavLink exact to={"/"}>
           
            <img src="https://i.postimg.cc/hjMSFLhz/Screen-Shot-2020-12-01-at-9-58-32-AM.png"></img>
            <Search />
            <HomeOutlinedIcon></HomeOutlinedIcon>
          </NavLink>
          <ChatBubbleOutlineTwoToneIcon></ChatBubbleOutlineTwoToneIcon>
          <NavLink to={"/posts"}>
            <ExploreOutlinedIcon></ExploreOutlinedIcon>
          </NavLink>

          <FavoriteBorderIcon></FavoriteBorderIcon>
          <NavLink to={"/users/:id"}>
            <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
          </NavLink>

          <ExitToAppRoundedIcon>
            <NavLink to={"/login"}>Login</NavLink>
          </ExitToAppRoundedIcon>

          <NavLink to={"/signup"}>Sign Up</NavLink>

          <Link to="/" className="button">
            Sign Out
          </Link>
        </nav> */}
      </div>
  
  );
};
export default NavBar;
