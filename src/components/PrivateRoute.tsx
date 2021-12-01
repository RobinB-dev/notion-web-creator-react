import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"

const PrivateRoute = () => {
  const { isLogged } = useAuth()
    return isLogged ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute

