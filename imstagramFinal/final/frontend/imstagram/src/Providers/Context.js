import React, {createContext, useState, useEffect} from 'react'
import firebase from '../Firebase'
import {firebaseFunctions} from '../Util/FirebaseFunctions'

export const Context = createContext()

const AuthProvider = ({children})=>{
const [load, setLoad] = useState(true)
const [newUser, setNewUser] = useState(null)
const [token, setToken] = useState(null)

const loginUser =(user)=>{
if(user){
    const {email, users_name}= user;
    const priorUser = user.metadata
    setNewUser({email, priorUser, id: users_name});
    firebaseFunctions().then(token=>{
        setToken(token);
        setLoad(false)
    })
}else{
    setNewUser(null)
    setLoad(false)
}

}
useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(loginUser);
    return unsubscribe

}, [])
if(load) return <div>Loading Page</div>

return (
    <Context.Provider value={{newUser, token}}>
        {children}
    </Context.Provider>
)

}

export default AuthProvider;