import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './NavBar'
import LandingPage from './LandingPage'


const Authentication = () => {
    
    const [authentication, setAuthentication]  = useState(false) 

    const handleAuthentication = () => {
        setAuthentication(true)
        
    }

    return (
        
        <>
        <div>
<LandingPage/>
        <NavBar/>    
        </div>
            
        </>
    )
  }
  
export default Authentication;