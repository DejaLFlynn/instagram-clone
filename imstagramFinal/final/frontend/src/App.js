import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import User from "./Components/Authentication.js/User";
import NavBar from "./Components/Authentication.js/NavBar";
import Explorer from "./Components/Explorer";
import { Route, Switch } from "react-router-dom";
import Error from "./Components/Error";
import Home from "./Components/Home";
import AuthProvider from "./Providers/Context";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/posts"}>
            {" "}
            <Explorer />
          </Route>
          <Route path={"/users"}>
            <User />{" "}
          </Route>
          {/* <Route path="*" component={Error} /> */}
        </Switch>
        <footer>
          <Footer />
        </footer>
      </AuthProvider>
    </div>
  );
}

export default App;
