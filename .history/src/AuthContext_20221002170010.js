import React, { useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const auth = getAuth();

  const [currentUser, setCurrentuser] = useState();

  const value = {
    currentUser,
  };

  function signUp(auth, email, password) {
    createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    onAuthStateChanged((user) => {
        setCurrentuser(user);
      });
  }, [])

 

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
