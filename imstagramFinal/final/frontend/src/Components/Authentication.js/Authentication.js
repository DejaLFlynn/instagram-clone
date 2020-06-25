import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './NavBar'


const Authentication = () => {
    
    const [authentication, setAuthentication]  = useState(false) 

    const handleAuthentication = () => {
        setAuthentication(true)
        
    }

    return (
        
        <>
        <div>

        <NavBar/>    
        </div>
            
        </>
    )
  }
  
export default Authentication;