import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import Error from "./Error";
import SignUp from "./SignUp";
import Users from "./Users.js/Users/Users";
import Posts from "./Posts";
const Authorization = () => {
  const [authorization, setAuthorization] = useState(false);

  const handleAuthorization = () => {
    setAuthorization(true);
    console.log(authorization);
  };
  return (
    <>
      {!authorization ? (
        <Switch>
          <Route exact path={"/"}>
            <LandingPage onLogin={handleAuthorization} />
          </Route>
          <Route exact path={"/SignUp"}>
            <SignUp onLogin={handleAuthorization} />
          </Route>
        </Switch>
      ) : (
        <Redirect to={"/"} />
      )}

      {authorization ? (
        <>
          <NavBar />
          <Switch>
            <Route exact path={"/posts"}>
              <Posts />
            </Route>
            <Route exact path={"/users/:id"}>
              <Users />
            </Route>
            <Route path="*" component={Error} />
          </Switch>
          <Footer />
        </>
      ) : (
        <Redirect to={"/"} />
      )}
    </>
  );
};
export default Authorization;
