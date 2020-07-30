import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {apiURL} from '../../Utils/apiURL'

import Upload from '../Upload'
const User =()=>{
const [name, setName] = useState("")
const [bio, setBio] = useState("")
const [pic, setPic] = useState("")
const API = apiURL()

const fetchUser = async()=>{
    try {
        let res = await axios.get(`${API}/users`);
        debugger
        setName(res.data.body.users[0].name)
        setBio(res.data.body.users[0].bio)
        setPic(res.data.body.users[0].user_pic)
        
    } catch (error) {
        console.log(error)
    }
}
        useEffect(()=>{
            fetchUser()
        },[])
    return (
        <div className="User">
           <h1>{name}</h1> 
    <h2>{bio}</h2>
    <img src={pic}></img>

        </div>
    )

}

export default User;