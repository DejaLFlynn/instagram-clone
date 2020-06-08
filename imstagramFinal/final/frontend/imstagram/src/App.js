import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import LandingPage from "./Components/LandingPage";
import Posts from "./Components/Posts";
import SignUp from "./Components/SignUp";
import Users from "./Components/Users.js/Users/Users";
// import Authorization from './Components/Authorization'

function App() {
  return (
    <div className="App">
      Imstagram "The imitation of Instagram"
      {/* <Authorization/> */}
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <LandingPage />
        </Route>
        <Route exact path={"/signUp"}>
          <SignUp />
          SignUp
        </Route>
        <Route path={"/posts"}>
          Explore Posts
          <Posts />
        </Route>
        <Route path={"/users/:id"}>
          Users Page
          <Users />
        </Route>
        <Route path="*" component={Error} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
