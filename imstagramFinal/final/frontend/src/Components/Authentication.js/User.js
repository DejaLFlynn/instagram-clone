import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiURL} from '../../Utils/apiURL'

const User =()=>{
    const [users, setUsers]=useState([])
    const API = apiURL()
    
    useEffect(() => {
        const fetchUsers = async()=>{
            let res = await axios({
                method: 'get',
                url: `http://localhost:4001/users`
            })
            setUsers(res.data.users_name);
        }
        fetchUsers()
    }, []);

    return (
        <div className="User">
            <h1>All Users </h1>
            <ul>
                {users.map(user=>{
                    return<li key={user.id} >{user.email}</li>
                })}
            </ul>
User
        </div>
    )

}

export default User;