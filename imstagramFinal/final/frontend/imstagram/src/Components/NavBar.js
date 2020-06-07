import React from "react";
import { NavLink } from "react-router-dom";
import '../CSS/NavBar.css'

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <nav>
          <NavLink exact to={"/"}>
          <img src="https://imageog.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" className="home" alt="home"/>
          </NavLink>
          <NavLink exact to={"/posts"}>
            <img src="https://cdn.iconscout.com/icon/free/png-512/explore-1781524-1513844.png"className="explore" alt="posts"  />
             </NavLink>
          <NavLink exact to={"/users/:id"}>
            <img src="https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png" className="profile" alt="avatar"/>

          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
