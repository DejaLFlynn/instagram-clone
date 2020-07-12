import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [users_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  // const handleUsername = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setUserName(e.target.value);
  //     history.push("/users");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleEmail = (e) => {
  //   e.preventDefault();
  //   try {
  //     setEmail(e.target.value);
  //     history.push("/email");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handlePassword = (e) => {
  //   e.preventDefault();
  //   try {
  //     setPassword(e.target.value);
  //     history.push("/password");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = await axios({
      method: "post",
      url: "http://localhost:4001/users",
      data: {
        users_name: users_name,
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

export default SignIn;
