import React from 'react'
import { useAuth } from '../Context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

function AuthRoutes() {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated)

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthRoutes