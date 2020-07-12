import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {apiURL} from '../../Utils/apiURL'
import Upload from '../Upload'
const User =()=>{
    const [users, setUsers]=useState([])
    const API = apiURL()
    
    useEffect(() => {
        const fetchUsers = async()=>{
            let res = await axios({
                method: 'get',
                url: `${API}/users`
            })
            setUsers(res.data.users);
        }
        fetchUsers()
    }, []);

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