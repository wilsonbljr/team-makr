import { createContext, useContext, useState } from 'react'
import { useSkills } from '../core/hooks/useSkills';
import { useTeams } from '../core/hooks/useTeams';
import { useUserInfo } from '../core/hooks/useUserInfo';
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
    const { setCurrentUserInfo, unsetCurrentUserInfo } = useUserInfo();
    const { setCurrentUserTeams } = useTeams();
    const { setCurrentUserSkills } = useSkills();

    const setCurrentUser = async (email, password) => {
        const status = await login(email, password)
            .then(async ({ token, userId, status}) => {
                if (token === undefined) {
                    return status;
                }
                setToken(token);
                setUser(userId);
                await setCurrentUserInfo(userId, token);
                await setCurrentUserTeams(userId, token);
                await setCurrentUserSkills(userId, token);
            }).catch(err => err.message);
        return status;
    }

    const unsetCurrentUser = async () => {
        const res = await logout(token)
            .then((res) => {
                setUser(null);
                setToken(null);
                unsetCurrentUserInfo();
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