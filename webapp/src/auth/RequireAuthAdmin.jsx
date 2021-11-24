import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserInfo } from '../core/hooks/useUserInfo';
import { useAuth } from './AuthContext'

const RequireAuthAdmin = ({ children }) => {
    const { user } = useAuth();
    const { admin } = useUserInfo();
    return user && admin === true ? <Outlet /> : <Navigate to='/unauthorized' />
}

export default RequireAuthAdmin;