import React, {createContext, useState, useEffect} from 'react'
import firebase from '../Firebase'
import {getFirebaseIdToken} from '../Utils/Firebase'
export const AContext = createContext();
const Context =({children})=>{
const [token, setToken] = useState(null);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const updater = user =>{
    if(user){
        const {email, uid} = user;
        const prior = user.metadata.prior;
        setUser({email, prior, id:uid})
        getFirebaseIdToken().then((token)=>{
            setToken(token)
            setLoading(false)
        })
    }else {
        setUser(null)
        setLoading(false)
    }
}
useEffect(()=>{
    const unsubscribe = firebase.auth().onAuthStateChanged(updater)
    return unsubscribe
}, [])
if(loading) return <div>Loading</div>
return(

    <AContext.Provider value={(user, token)}>
        {children}
    </AContext.Provider>
)
}

export default Context;