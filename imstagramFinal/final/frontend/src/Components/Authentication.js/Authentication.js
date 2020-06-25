import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './NavBar'
import LandingPage from './LandingPage'
import Explore from './ExplorePage'
import User from './User'
import SignUp from '../SignUp'
const Authentication = () => {
    
    const [authentication, setAuthentication]  = useState(false) 

    const handleAuthentication = () => {
        setAuthentication(true)
        
    }

    return (
        
        <>
   
   {!authentication ?
                <Switch>
                <Route exact path={"/"}>
                    <LandingPage onLogin={handleAuthentication}/>
                </Route>
                <Route exact path={"/signUp"}>
                    <SignUp onLogin={handleAuthentication}/>
                </Route>
                </Switch>
                : <Redirect to={"/explore"}/> }

            {authentication ?
                <>
                <NavBar />
                <Switch>
                <Route exact path={"/explore"} >
                    <Explore/>
                </Route>
                <Route exact path={"/user"}>
                    <User />
                </Route>

                </Switch>
                </>
            : <Redirect to={"/"}/>  }
            
        </>
    )
  }
  
export default Authentication;