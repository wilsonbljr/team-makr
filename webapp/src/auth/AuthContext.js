import { createContext, useContext, useState } from 'react'
import { login, logout } from './auth';

const AuthContext = createContext({
    user: null,
    token: null,
    setCurrentUser: () => { },
    unsetCurrentUser: () => { }
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [token, setToken] = useState();

    const setCurrentUser = async (email, password) => {
        const status = await login(email, password)
            .then(({ token, userId, status}) => {
                if (token === undefined) {
                    return status;
                }
                setToken(token);
                setUser(userId);
            }).catch(err => err.message);
        return status;
    }

    const unsetCurrentUser = async () => {
        const res = await logout(token)
            .then((res) => {
                setUser(null);
                setToken(null);
                return res
            });
        return res;
    }

    const contextValue = {
        user,
        token,
        setCurrentUser,
        unsetCurrentUser
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);