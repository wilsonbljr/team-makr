import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserInfo } from '../../../mobile/src/core/hooks/useUserInfo';
import { useAuth } from '../../../mobile/src/auth/AuthContext'

const RequireAuthAdmin = ({ children }) => {
    const { user } = useAuth();
    const { admin } = useUserInfo();
    return user && admin === true ? <Outlet /> : <Navigate to='/home' />
}

export default RequireAuthAdmin;