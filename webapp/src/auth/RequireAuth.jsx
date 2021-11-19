import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'

const RequireAuth = ({ children }) => {
    const { user } = useAuth();
    return user ? <Outlet /> : <Navigate to='/unauthorized' />
}

export default RequireAuth;
