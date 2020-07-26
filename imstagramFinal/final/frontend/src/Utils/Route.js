import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../Providers/Context";

export const AuthRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(Context);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !currentUser ? children : <Redirect to="/" />;
      }}
    />
  );
};
export const SignedRoute = ({children, ...rest})=>{
  const {user}= useContext(Context) ;
  return(
    <Route
    {...rest}
    render={({location})=>{
      return user ? children : <Redirect to="/login"/>
    }}
    />
  )
}

