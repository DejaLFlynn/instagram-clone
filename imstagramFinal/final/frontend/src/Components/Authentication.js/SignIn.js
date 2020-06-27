import React, { useState } from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const SignIn = () => {
  const [users_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory()
  const handleUsername =async (e)=>{
    e.preventDefault()
    try {
      setUserName(e.target.value)
      history.push('/users')
    } catch (error) {
      console.log(error)
    }


  }
  const handleEmail=(e)=>{
    try {
      
      setEmail(e.target.value)
      history.push('/users')
    } catch (error) {
      
    }

  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    let newUser = await axios({
      method: 'post',
      url: 'http://localhost:4001/users',
      data: {
        users_name: users_name,
        email: email

      }
    })
    console.log(newUser)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        onChange={handleUsername}
        type="text"
        placeholder="username"
      />

      <input
         onChange={handleEmail}
        type="email"
        placeholder="email"
  E  />
      <button
       type="submit">
      submit
      </button>

      </form>
    </div>
  );
};

export default SignIn;
