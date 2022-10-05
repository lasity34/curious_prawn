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
  const [currentUser, setCurrentuser] = useState("");
  const [loading, setLoading] = useState(true);



  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setCurrentuser(user);
      }
    );
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
   
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
