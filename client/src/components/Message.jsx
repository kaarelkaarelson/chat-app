import React from 'react';
import { selectAllUsers } from '../redux/slices/usersSlice';
import { useSelector } from 'react-redux';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';

const Message = ({ message }) => {
  const users = useSelector(selectAllUsers);
  const messageByUser = users.find((user) => user.id === message.userId);

  useEffect(() => {
    console.log(messageByUser)
  }, [])
  const { auth } = useAuth();
  const userId = auth.id;

  return (
    <div
      className={
        (userId === messageByUser?.id ? 'ml-auto bg-dark ' : 'mr-auto bg-light ') +
        'relative flex flex-col text-[12px] sm:text-xs md:text-base space-y-2 md:space-y-5 shadow-xl rounded-lg p-3 min-w-min'
      }>
      <h2>{messageByUser?.username}</h2>
      <p>{message.message}</p>
      <div className="flex flex-row justify-between">
        <ReactionButtons message={message} />
        <TimeAgo timestamp={message.created}></TimeAgo>
      </div>
    </div>
  );
};

export { Message };
