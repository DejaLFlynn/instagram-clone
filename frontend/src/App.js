import React, { useState, useEffect, useContext } from "react";
import "./App.css";

import Footer from "./Components/Footer";
import { apiURL } from "./Utils/apiURL";
import axios from "axios";
import { AContext } from "./Providers/Context";
import User from "./Components/Authentication.js/User";
import NavBar from "./Components/Authentication.js/NavBar";
import SignUp from "./Components/SignUp";
import Explorer from "./Components/Explorer";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Context from "./Providers/Context";
import { AuthRoute, ProtectedRoute } from "./Utils/Route";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { getFirebaseIdToken } from "./Utils/Firebase";
import LoadingComponent from "./Components/LoadingComponent";
import MainPage from "./Components/MainPage";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © Deja-Flynn"}
      <Link color="inherit" href="https://material-ui.com/"></Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function App() {
  const API = apiURL();
  const { currentUsers, token, loading } = useContext(AContext);
  const [profile, setProfile] = useState([]);
  const fetchUserById = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `${API}/users/${currentUsers.id}`,
        headers: {
          AuthToken: token,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserById();
  }, [profile, token]);

  return (
    <div className="App">
      <div className="app_header">
        <Context>
         

          <Switch>
            <AuthRoute exact path="/">
              <Home />

              {/* <NavBar/> */}
            </AuthRoute>
            {/* <LoadingComponent> */}
            <AuthRoute exact path="/signup">
              <SignUp />
              <NavBar />
            </AuthRoute>
            <AuthRoute exact path="/posts">
              <MainPage />
            </AuthRoute>
            <AuthRoute exact path="/users/:id">
              <User />
            </AuthRoute>
            <ProtectedRoute exact path="/users/:id">
              <User />
              <NavBar />
            </ProtectedRoute>
            <ProtectedRoute exact path="/posts">
              <MainPage />
              <NavBar />
            </ProtectedRoute>
            {/* </LoadingComponent> */}
          </Switch>

          <footer>
            <Footer />
            <Copyright />
          </footer>
        </Context>
      </div>
    </div>
  );
}

export default App;
