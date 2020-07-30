import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {apiUrl} from '../Utils/apiURL'

const SignUpPage = () => {
  const [users_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const API = apiUrl()
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = await axios({
      method: "post",
      url: `${API}/users`,
      data: {
        id: res.user.uuid,
        email: email,
        password: password,
      },
    })
    history.push("/");
    ;
    console.log(newUser);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  onChange={(e) => setUserName(e.currentTarget.value)} type="text" placeholder="username" />
        <input  onChange={(e) => setEmail(e.currentTarget.value)} type="email" placeholder="email" />
        <input  onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder="password"/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
