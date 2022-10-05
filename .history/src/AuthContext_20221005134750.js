import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase/firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
      }
    );
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
      }
    );
  }

  function logOut() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
     setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
