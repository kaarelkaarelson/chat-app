import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Login } from './components/Login';
import { PageNotFound } from './components/PageNotFound';
import { SignUp } from './components/SignUp';
import Chat from './components/Chat';
import { Profile } from './components/Profile';
import { ProtectedRoute } from './components/ProtectedRoute';
import store from './redux/store';
import { fetchMessages, getMessagesIsLoading } from './redux/slices/messagesSlice';
import { fetchUsers } from './redux/slices/usersSlice';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchUsers());
    store.dispatch(fetchMessages());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          {/* <Route index element={<LoadingSpinner/>} /> */}
          <Route path="signup" element={<SignUp />} />
          <Route path="auth" element={<ProtectedRoute />}>
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
