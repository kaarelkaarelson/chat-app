import React from 'react';
import { useDispatch } from 'react-redux';
import { addReaction } from '../redux/slices/messagesSlice';

const reactionEmoji = {
  like: '👍',
  wow: '😮',
  heart: '❤️',
};
const ReactionButtons = ({ message }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => dispatch(addReaction({ messageId: message.id, reaction: name }))}>
        {emoji} {message?.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
