import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'


import '../../CSS/NavBar.CSS'
const NavBar =()=>{
    const [NavButton, setNavButton] = useState(false)
    const handleNavButton = () => {
        setNavButton(!NavButton)
    }

    return (
        <>
        <div>
            <nav>
            <NavLink exact to={"/"}>Home</NavLink>
            { NavButton ?
             <NavLink to={"/posts"}>All posts<button className="navButton toggleButton" onClick={handleNavButton}>Explore</button></NavLink> :
             <NavLink to={"/users"}>User<button className="navButton toggleButton"  onClick={handleNavButton}>PROFILE</button></NavLink> }
             <NavLink to={"/login"}>Login</NavLink>
             <NavLink to = {"/signup"}>All users</NavLink>
            </nav>
        </div>
        </>
    )

}
export default NavBar;