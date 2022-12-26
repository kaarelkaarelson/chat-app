import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { auth } = useAuth();

  if (!auth) {
    return (
      <Navigate
        to="/"
        // state={{ path: location.pathname }}
      />
    );
  }

  // return ({auth.user ? <Outlet /> : <Navigate to="/login" state={{ path: location.pathname }} />});

  console.log(auth)
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export { ProtectedRoute };
