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

import "../../CSS/NavBar.CSS";
const NavBar = () => {
  return (
    <>
      <div className="nav_bar">
        <nav>
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
        </nav>
      </div>
    </>
  );
};
export default NavBar;
