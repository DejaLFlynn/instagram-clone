import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

import User from './User'
// import Uploader from ''

import { getDefaultNormalizer } from '@testing-library/react'
const NavBar =()=>{
    const [NavButton, setNavButton] = useState(false)
    const handleNavButton = () => {
        setNavButton(!NavButton)
    }

    return (
        <>
        <div>
            <nav>

            { NavButton ? <NavLink to={"/"}><button className="navButton toggleButton" onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/users/:id"}><button className="navButton toggleButton"  onClick={handleNavButton}>PROFILE</button></NavLink> }
            </nav>
        </div>
        </>
    )

}
export default NavBar;