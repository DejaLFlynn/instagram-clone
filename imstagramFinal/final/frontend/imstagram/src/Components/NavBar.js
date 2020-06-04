import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <nav>
          <NavLink exact to={"/"}></NavLink>
          <NavLink to={"/posts"}> Explore</NavLink>
          <NavLink to={"/users/:id"}>User</NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
