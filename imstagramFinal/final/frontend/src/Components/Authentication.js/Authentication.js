import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'


import NavBar from './NavBar'
import LandingPage from './LandingPage'
import ExplorePage from './ExplorePage'
import User from './User'
// import SignUp from './SignUpModal'

const Authentication = () => {
    
    const [authorization, setAuthorization]  = useState(false) 

    const handleAuthorization = () => {
        setAuthorization(true)
        console.log(authorization)
    }

    return (
        <>
            {!authorization ?
                <Switch>
                <Route exact path={"/"}>
                    <LandingPage onLogin={handleAuthorization}/>
                </Route>
                <Route exact path={"/SignUp"}>
                    <SignUp onLogin={handleAuthorization}/>
                </Route>
                </Switch>
                : <Redirect to={"/ExplorePage"}/> }

            {authorization ?
                <>
                <NavBar />
                <Switch>
                <Route exact path={"/ExplorePage"} >
                    <ExplorePage/>
                </Route>
                <Route exact path={"/User"}>
                    <User />
                </Route>

                </Switch>
                </>
            : <Redirect to={"/"}/>  }
        </>
    )
  }
  
export default Authentication;