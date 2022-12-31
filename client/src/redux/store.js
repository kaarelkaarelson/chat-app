import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './slices/messagesSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
