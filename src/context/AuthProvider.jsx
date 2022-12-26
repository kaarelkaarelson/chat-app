import React, { useState, createContext, useEffect } from 'react';
import { pb, pbLogin, pbLogout, pbSignUp } from '../hooks/pocketbase';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  //   const [user, setUser] = useState(null);
  //   const [isAuth, setIsAuth] = useState(false);

//   useEffect(() => {
//     console.log();
//   }, [auth]);

  const login = async (username, password) => {
    console.log('Authenticating user in auth');

    const authData = await pbLogin(username, password);

    // // if (!authData) { return;
    // }

    setAuth(authData.record);
    console.log(auth)

    // setIsAuth(pb.authStore.isValid);
  };

  const signUp = async (username, password) => {
    console.log('Creating user in auth');

    const signUpData = await pbSignUp(username, password);
    login(username, password);
  };

  const logout = () => {
    pbLogout();
    setAuth(null);
    console.log(auth)
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, signUp }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
