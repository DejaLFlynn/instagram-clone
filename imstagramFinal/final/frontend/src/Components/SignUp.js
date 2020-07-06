import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import {apiUrl} from '../Utils/apiURL'

const SignUpPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      history.push("/")
    } catch (error) {
      setError(error.message)
    }
  //   let newUser = await axios({
  //     method: "post",
  //     url: "http://localhost:4001/users",
  //     data: {
  //       users_name: username,
  //       password: password,
  //     },
  //   });
  //   console.log(newUser);
  };

  return (
    <>
      <div className="signup">
        {" "}
        SignUpPage
        {error ? <div>{error}</div>: null}
        <form onSubmit={handleSubmit}>
          <input
            // onChange={handleUsernameChange}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="username"
          />

          <input
            //  onChange={handlePasswordChange}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
            autoComplete="on"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
