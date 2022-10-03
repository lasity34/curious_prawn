import React, { useContext } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

const [currentUser, setCurrentuser] = useState()

const value = {
    currentUser
}

export function AuthProvider({ children }) {

    return (
        <AuthContext.Provider value={}>
            {children}
        </AuthContext.Provider>
    )
}