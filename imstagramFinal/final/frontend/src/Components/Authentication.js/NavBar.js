import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../Utils/Firebase";
import { AContext } from "../../Providers/Context";
import SignIn from './SignIn'
import "../../CSS/NavBar.CSS";
const NavBar = () => {
//   const currentUsers = useContext(AContext);
//   const displayButtons = () => {
//     if (currentUsers) {
//       return <button onClick={logout}>Logout</button>;
//     } else {
//       return (
//         <>
//           <NavLink to={"/login"}>Login</NavLink>
//           <NavLink to={"/signup"}>All users</NavLink>
//           <NavLink to={"/home"} className="home" >Home</NavLink> 

//         </>
//       );
//     }
//   };

  return (
    <>
      <div>
        <nav>
          <NavLink  exact to={"/"}>Home</NavLink>
          <NavLink to={"/posts"}>All posts</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/signup"}>Sign Up</NavLink>
          <NavLink to={"/users"}>User</NavLink>

          {/* <button onClick={logout}> Logout</button>
          {displayButtons()} */}
        </nav>
      </div>
    </>
  );
};
export default NavBar;


