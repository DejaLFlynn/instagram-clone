import React from 'react'
import NavBar from './NavBar'
import SignIn from './SignIn'



const LandingPage =()=>{
    return (
        <div className="LandingPage">
            <SignIn/>
            <NavBar/>
        </div>
    )

}

export default LandingPage;