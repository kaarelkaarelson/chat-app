import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { LoadingSpinner } from './LoadingSpinner';

const ProtectedRoute = () => {
  const location = useLocation();
  const { auth, isLoading } = useAuth();

  // if (!auth) {
  //   console.log('user is not authenticated');
  //   return <Navigate to="/" state={{ path: location.pathname }} />;
  // }

  // return ({auth.user ? <Outlet /> : <Navigate to="/login" state={{ path: location.pathname }} />});

  console.log('Navigating', isLoading, auth);
  return !isLoading ? (
    auth ? (
      <Outlet />
    ) : (
      <Navigate to="/" state={{ path: location.pathname }} />
    )
  ) : (
    <LoadingSpinner />
  );
};

export { ProtectedRoute };
