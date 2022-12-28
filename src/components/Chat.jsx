import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Button';
import { InputField } from './InputField';
import {
  selectAllMessages,
  getMessagesIsLoading,
  getMessagesError,
  addNewMessage,
} from '../redux/slices/messagesSlice';
import { Message } from './Message';
import useAuth from '../hooks/useAuth';

const Chat = () => {
  const [message, setMessage] = useState('');
  const { auth } = useAuth();

  const userId = auth?.id;
  const messageRef = useRef(null);

  const dispatch = useDispatch();

  const messages = useSelector(selectAllMessages);
  const messagesIsLoading = useSelector(getMessagesIsLoading);
  const error = useSelector(getMessagesError);

  useEffect(() => {
    if (messageRef) {
      messageRef.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, []);

  const handleSend = (e) => {
    e.preventDefault();

    dispatch(addNewMessage({ message, userId }));
  };

  const onMessageChange = (e) => setMessage(e.target.value);

  return (
    <div className="w-full">
      <div
        className="flex flex-col px-5 py-5 overflow-y-auto h-[60vh] space-y-5 > * + * [&>div]:w-[90%] bg-white "
        ref={messageRef}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>

      <form
        onSubmit={handleSend}
        className="flex flex-col space-y-3 shadow-xl rounded-lg p-3 min-w-min w-full">
        <div className="flex flex-row space justify-between">
          <InputField label="Message" onChange={onMessageChange} />
          <div className='mt-auto'>
            <Button type="submit">Send</Button>
          </div>
        </div>

        {/* <div className="flex flex-col space-y-1"> */}
        {/* </div> */}
      </form>
    </div>
  );
};

export default Chat;
