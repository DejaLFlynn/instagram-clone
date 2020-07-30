import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {apiURL} from '../../Utils/apiURL'
import {context} from '../../Providers/Context'
import Upload from '../Upload'
const User =()=>{
    const [users, setUsers]=useState([])
    const API = apiURL()
    const {token} =useContext(context)
    const fetchUsers = async()=>{
        let res = await axios({
            method: 'get',
            url: `${API}/users`,
            headers:{
                'userToken': token,
            },
        })
        setUsers(res.data.users);
    }
     useEffect(() => {
        fetchUsers()
    }, [API]);

    return (
        <div className="User">
            <h1>All Users </h1>
            <Upload/>
            
            <ul>
                {users.map(user=>{
                    return<li key={user.id} >{user.email}</li>
                })}
            </ul>

        </div>
    )

}

export default User;