import React, { useState, createContext } from 'react';
import { useEffect } from 'react';
import client from '../api/pocketbase';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (auth === null) {
      console.log('Checking for local storage token');
      refreshAuthWithToken();
    }
  }, [auth]);

  const login = async (username, password) => {
    setIsLoading(true);
    console.log('Authenticating user in auth');

    const response = await client.collection('users').authWithPassword(username, password);

    if (!response) {
      setIsLoading(false);
      return;
    }

    const authData = {
      id: response.record.id,
      username: response.record.username,
      email: response.record.email,
      token: response.token,
    };

    console.log(authData);
    setAuth(authData);
    setIsLoading(false);
  };

  const refreshAuthWithToken = async () => {
    setIsLoading(true);

    let tokenData = await JSON.parse(localStorage.getItem('pocketbase_auth'));

    if (!tokenData) {
      setIsLoading(false);
      return;
    }

    const authData = {
      id: tokenData.model.id,
      username: tokenData.model.username,
      email: tokenData.model.email,
      token: tokenData.token,
    };

    setAuth(authData);
    setIsLoading(false);
  };

  const signUp = async (username, password) => {
    setIsLoading(true);
    console.log('Creating user in auth');

    try {
      await client.collection('users').create({
        username,
        password,
        passwordConfirm: password,
      });

      login(username, password);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const logout = () => {
    client.authStore.clear();
    console.log('logged out, is token valid: ', client.authStore.isValid);

    setAuth(null);
    console.log(auth);
  };

  return (
    <AuthContext.Provider value={{ auth, isLoading, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
