import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../api/pocketbase';

const initialState = {
  numOfMessages: 0,
  messages: [],
  isLoading: false,
  canFetch: false,
  error: false,
};

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await client.collection('messages_table').getFullList();

  return response;
});

export const addNewMessage = createAsyncThunk('messages/addNewMessage', async (messageData) => {
  console.log('beginning new message', messageData);

  const response = await client
    .collection('messages_table')
    .create({ message: messageData.message, user_id: messageData.userId });

  console.log('message added', response);
  return response;
});

export const updateMessage = createAsyncThunk('messages/addNewMessage', async (messageData) => {
  console.log('updating new message', messageData);

  try {
    const response = await client.collection('messages_table').update({
      id: messageData.id,
      like: messageData.like,
      wow: messageData.wow,
      heart: messageData.heart,
    });

    console.log('done');
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const messagesSlice = createSlice({
  name: 'messages',

  initialState,

  reducers: {
    startLoading: (state) => {
      console.log('starting loading');
      state.isLoading = true;
    },
    endLoading: (state) => {
      console.log('finished loading');
      state.isLoading = false;
    },
    allowFetch: (state) => {
      console.log('can fetch');
      state.canFetch = true;
    },
    prohibitFetch: (state) => {
      console.log('cannot fetch');
      state.canFetch = false;
    },
    hasError: (state, action) => {
      state.error = action.payload;
    },
    messagesSuccess: (state, action) => {
      state.numOfMessages = action.payload.length;
      state.messages = action.payload;
      state.isLoading = false;
    },
    addMessageAct: {
      reducer(state, action) {
        state.messages.push(action.payload);
      },
      prepare(message, userId) {
        return {
          payload: {
            message: message,
            user_id: userId,
          },
        };
      },
    },
    addReaction(state, action) {
      const { messageId, reaction } = action.payload;
      console.log('adding reaction', messageId, reaction);
      const existingMessage = state.messages.find((message) => message.id === messageId);
      if (existingMessage) {
        existingMessage.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMessages.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        console.log('sucess', action.payload);
        state.status = 'succeeded';
        // Adding date and reactions
        const loadedMessages = action.payload?.map((message) => {
          const formattedMessage = {
            id: message.id,
            message: message.message,
            created: message.created,
            userId: message.user_id,
            reactions: {
              like: message.like,
              wow: message.wow,
              heart: message.heart,
            },
          };

          return formattedMessage;
        });

        console.log('loadedMessages', loadedMessages);

        state.canFetch = false;
        state.messages = loadedMessages;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        console.log('messages fetch failed');
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewMessage.fulfilled, (state, action) => {
        console.log('after', action.payload);
        // action.payload.ijd = state.messages.length;
        const newMessage = {
          id: state.messages.length,
          message: action.payload.message,
          userId: action.payload.user_id,
          created: new Date().toISOString(),
          reactions: {
            like: action.payload.like,
            wow: action.payload.wow,
            heart: action.payload.heart,
          },
        };

        console.log('cache message', newMessage);
        state.messages.push(newMessage);
      })
      .addCase(addNewMessage.rejected, (state, action) => {
        console.log('after', action.payload);
        console.log('failed to create new message');
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllMessages = (state) => state.messages.messages; // Advantage: changes occur in slice not in every component
export const getMessagesIsLoading = (state) => state.messages.isLoading;
export const getMessagesCanFetch = (state) => state.messages.canFetch;
export const getMessagesError = (state) => state.messages.error;

export const {
  startLoading,
  endLoading,
  allowFetch,
  prohibitFetch,
  hasError,
  messagesSuccess,
  addMessageAct,
  addReaction,
} = messagesSlice.actions;

export default messagesSlice.reducer;
