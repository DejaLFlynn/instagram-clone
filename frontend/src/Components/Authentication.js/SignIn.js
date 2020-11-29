import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { login } from "./../../Utils/Firebase";
import { apiURL } from "../../Utils/apiURL";
const API = apiURL();

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // console.log(email, password)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push(`/posts`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="SignIn">
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="on"
          type="text"
          className="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        ></input>
        <input
          autoComplete="on"
          type="password"
          className="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        ></input>
        <input type="submit"></input>
      </form>
      <div>
        <Link to="/signup" className="signUp">
          Don't have an account?
          <span className="span"> Sign up </span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
