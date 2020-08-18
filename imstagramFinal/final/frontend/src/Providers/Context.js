import React, { createContext, useState, useEffect } from "react";
import firebase from "../Firebase";
import { getFirebaseIdToken } from "../Utils/Firebase";
export const AContext = createContext();
const Context = ({ children }) => {
  const [token, setToken] = useState(null);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const updater = (user) => {
    if (user) {
      const { email, uid } = user;
      const prior = user;
      setUsers({ email, prior, id: uid });
      getFirebaseIdToken().then((token) => {
        setToken(token);
        setLoading(false);
      });
    } else {
      setUsers(null);
      setLoading(false);
    }
  };
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(updater);
    return unsubscribe;
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <AContext.Provider value={(users, token)}>{children}</AContext.Provider>
  );
};

export default Context;
