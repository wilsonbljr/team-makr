import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'

const RequireAuth = ({ children }) => {
    const { user } = useAuth();
    console.log(user)
    return user ? <Outlet /> : <Navigate to='/unauthorized' />
}

export default RequireAuth;
