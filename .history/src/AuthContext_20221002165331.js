import React, { useContext, useState } from 'react'
import { getAuth} from "firebase/auth"


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {

     const auth = getAuth()

    const [currentUser, setCurrentuser] = useState()

    const value = {
        currentUser
    }

    function signUp(email, password) {
       auth.cre
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}