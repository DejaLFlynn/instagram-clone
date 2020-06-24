import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'


import NavBar from './NavBar'
import LandingPage from './LandingPage'
import Home from './Home'
import Profile from './ProfilePage'
import SignIn from './SignIn'

const Authentication = () => {
    
    const [authentication, setAuthentication]  = useState(false) 

    const handleAuthentication = () => {
        setAuthentication(true)
        
    }

    return (
        <>
            {!Authentication ?
                <Switch>
                <Route exact path={"/"}>
                    <LandingPage onLogin={handleAuthentication}/>
                </Route>
                <Route exact path={"/signIn"}>
                    <SignIn onLogin={handleAuthentication}/>
                </Route>
                </Switch>
                : <Redirect to={"/home"}/> }

            {Authentication ?
                <>
                <NavBar />
                <Switch>
                <Route exact path={"/Home"} >
                    <Home/>
                </Route>
                <Route exact path={"/Profile"}>
                    <Profile />
                </Route>

                </Switch>
                </>
            : <Redirect to={"/"}/>  }
        </>
    )
  }
  
export default Authentication;