import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSkills } from '../core/hooks/useSkills';
import { useTeams } from '../core/hooks/useTeams';
import { useUserInfo } from '../core/hooks/useUserInfo';
import { login, logout } from './auth';
import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext({
    user: null,
    token: null,
    loading: true,
    setCurrentUser: () => { },
    unsetCurrentUser: () => { }
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    const [loading, setLoading] = useState(true);
    const { setCurrentUserInfo, unsetCurrentUserInfo } = useUserInfo();
    const { setCurrentUserSkills, setCurrentAllSkills } = useSkills();
    const { setCurrentUserTeams } = useTeams();

    useEffect(() => {
        SecureStore.getItemAsync('token').then(res => {
            if (res) {
                SecureStore.getItemAsync('token')
                    .then((token) => {
                        const decodedToken = jwtDecode(token);
                        if (Date.now() < decodedToken.exp * 1000) {
                            setToken(token);
                            setUser(decodedToken.id);
                        } else {
                            setToken(null);
                            setUser(null);
                            setLoading(false);
                        }
                        setCurrentUserInfo(decodedToken.id, token)
                        setCurrentUserTeams(decodedToken.id, token)
                        setCurrentUserSkills(decodedToken.id, token)
                        setCurrentAllSkills(token)
                    })
                    .then(() => setLoading(false))
                    .catch(err => err);
            } else {
                setLoading(false);
            }
        })
    }, [])

    const setCurrentUser = async (email, password) => {
        const status = await login(email, password)
            .then(async ({ token, userId, status }) => {
                if (token === undefined) {
                    return status;
                }
                setUser(userId);
                setCurrentUserInfo(userId, token);
                setCurrentUserTeams(userId, token);
                setCurrentUserSkills(userId, token);
                setCurrentAllSkills(token);
                await SecureStore.setItemAsync('token', token)
                    .then(() => {
                        setToken(token);
                    })
            }).catch(err => err.message);
        return status;
    }

    const unsetCurrentUser = async () => {
        const res = await logout(token)
            .then((res) => {
                setUser(null);
                setToken(null);
                SecureStore.deleteItemAsync('token');
                setTimeout(() => unsetCurrentUserInfo(), 0);
                return res
            });
        return res;
    }

    const contextValue = {
        user,
        token,
        loading,
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