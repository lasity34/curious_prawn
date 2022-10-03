import React, { useContext, useState } from 'react'
import { auth } from './firebase/firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {


    const [currentUser, setCurrentuser] = useState()

    const value = {
        currentUser
    }

    function signUp(email, password) {
        auth.crea
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}