import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { InputField } from './InputField';
import useAuth from '../hooks/useAuth';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { auth, signUp } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();

    signUp(username, password)
      .then(() => {
        console.log('promise resolved, navigating ...');
        navigate('/auth/profile');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEmailChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col items-center space-y-8 shadow-xl rounded-lg p-10 min-w-min w-full">
      <h1 className="text-2xl text-center">Sign Up</h1>
      <InputField label="Username" onChange={handleEmailChange} />
      <InputField label="Password" onChange={handlePasswordChange} />
      <div className="flex flex-col space-y-1">
        <Button type="submit" onClick={() => console.log('Sign up button clicked')}>
          Sign up
        </Button>
      </div>
    </form>
  );
};

export { SignUp };
