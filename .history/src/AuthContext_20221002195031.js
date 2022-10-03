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
  const [currentUser, setCurrentuser] = useState('');
  const [loading, setLoading] = useState(true)



console.log(auth)
  function signIn(email, password) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      setCurrentuser(user)
      
    })
  }

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false)
      setCurrentuser(user);
    });
    console.log(unsubscribe)
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signIn,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
