import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import User from "./Components/Authentication.js/User";
import NavBar from "./Components/Authentication.js/NavBar";
import SignUp from "./Components/SignUp";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Context from "./Providers/Context";
import { AuthRoute, ProtectedRoute } from "./Utils/Route";
import MainPage from "./Components/MainPage";
import Error from './Components/Error'
function App() {
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
            <Route path="*" component={Error} />
          </Switch>

          <footer>
            <Footer />
          </footer>
        </Context>
      </div>
    </div>
  );
}

export default App;
