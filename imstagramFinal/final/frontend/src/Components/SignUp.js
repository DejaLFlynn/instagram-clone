import React, { useState } from "react";
import axios from 'axios'

const SignUpPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange =(e)=>{

    setUserName(e.target.value)


  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value)

  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    let newUser = await axios({
      method: 'post',
      url: 'http://localhost:4001/users',
      data: {
        users_name: username,
        password: password

      }
    })
    console.log(newUser)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        onChange={handleUsernameChange}
        type="text"
        placeholder="username"
      />

      <input
         onChange={handlePasswordChange}
        type="password"
        placeholder="password"
      />
      <button
       type="submit">
      submit
      </button>

      </form>
    </div>
  );
};

export default SignUpPage;
