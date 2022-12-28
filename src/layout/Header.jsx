import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import client from '../api/pocketbase';
import useAuth from '../hooks/useAuth';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  let tokenData = JSON.parse(localStorage.getItem('pocketbase_auth'));
  // console.log(tokenData.access_token);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
      <div className="flex items-center flex-no-shrink text-teal-lighter mr-6">
        <img
          src="https://www.nicepng.com/png/full/82-824454_image-set-png-256x256-px-chat-icon-chat.png"
          className="mr-3 h-8"
          alt="Flowbite Logo"
        />
        <span className="font-semibold text-xl tracking-tight">Talksta</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            onClick={() => navigate('/auth/chat')}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
            Join Chat
          </a>
          <a
            onClick={() => navigate('/auth/profile')}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
            Profile
          </a>
          <div>{auth ? 'authenticated' : 'not authenticated'}</div>

          <button
            onClick={(e) => {
              console.log(client.authStore.isValid);
              console.log(auth);
              console.log(tokenData)
            }}>
            Log data
          </button>
        </div>
        <div>
          <a
            // onClick={() => navigate("/")}
            onClick={handleLogout}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

export { Header };
