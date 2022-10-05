import React, { useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentuser] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setCurrentuser(user);
      }
    );
  }

  

  function sendVerification(email) {
    return sendEmailVerification(auth.currentUser, email);
  }

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setCurrentuser(user);
      }
    );
  }

  function logOut() {
    return signOut(auth);
  }

  function resetPassword(email) {
    const auth = getAuth();
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        return "Password reset email sent!";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setCurrentuser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logOut,
    resetPassword,
    sendVerification,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
