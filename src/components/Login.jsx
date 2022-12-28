import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { InputField } from './InputField';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { auth, login } = useAuth();

  useEffect(() => {
    if (auth) {
      navigate('/auth/profile');
    }
  }, [auth]);

  const handleLogin = (e) => {
    e.preventDefault();

    login(username, password)
      .then(() => {
        navigate('/auth/profile');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center space-y-8 shadow-xl rounded-lg p-10 min-w-min w-full">
      <h1 className="text-2xl text-center">Log in</h1>
      <InputField label="Username" onChange={handleUsernameChange} />
      <InputField label="Password" onChange={handlePasswordChange} />
      <div className="flex flex-col space-y-1">
        <Button type="submit">Login</Button>
        <p className="text-xl text-center">or</p>
        <Button type="button" onClick={() => navigate('/signup')}>
          Sign up
        </Button>
      </div>
      <div>{username}</div>
      <div>{password}</div>
    </form>
  );
};

export { Login };
