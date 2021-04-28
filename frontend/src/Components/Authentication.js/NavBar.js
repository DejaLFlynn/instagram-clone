import React from "react";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../../CSS/NavBar.CSS";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    backgroundColor: "white",
  },
  grow: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(4),
    color: "black",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginLeft: theme.spacing(10),
      color: "black",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(50),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.up("md")]: {},
  },
}));
const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography className={classes.title} variant="h5" noWrap>
            ℑ𝓂𝓈𝓉𝒶𝑔𝓇𝒶𝓂
          </Typography>
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
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink to={"/posts"} color="inherit">
              <HomeOutlinedIcon
                className={classes.menuButton}
              ></HomeOutlinedIcon>
            </NavLink>

            <NavLink to={"/users/:id"}>
              <AccountCircleRoundedIcon
                className={classes.menuButton}
              ></AccountCircleRoundedIcon>
            </NavLink>
            <NavLink to={"/"}>
              <ExitToAppRoundedIcon
                className={classes.menuButton}
              ></ExitToAppRoundedIcon>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </div>
  );
};
export default NavBar;
