import React, {createContext, useState, useEffect} from 'react'
import Firebase from '../Firebase'
import {firebaseIdToken} from '../Utils/Firebase'
export const AContext = createContext();
const Context =({children})=>{
const [token, setToken] = useState(null);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const updater = user =>{
    if(user){
        const {users_name, email} = user;
        const prior = user.metadata.prior;
        setUser({users_name, email, prior})
        firebaseIdToken().then((token)=>{
            setToken(token)
            setLoading(false)
        })
    }else {
        setUser(null)
        setLoading(false)
    }
}
useEffect(()=>{
    const unsubscribe = firebaseIdToken.auth().onAuthStateChanged(updater)
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