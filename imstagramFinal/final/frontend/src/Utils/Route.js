import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AContext } from "../Providers/Context";

export const AuthRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AContext);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !currentUser ? children : <Redirect to="/" />;
      }}
    />
  );
};


export const ProtectedRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AContext);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return currentUser ? children : <Redirect to="/login" />;
      }}
    />
  );
};