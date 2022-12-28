import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../api/pocketbase';

const initialState = {
  numOfMessages: 0,
  messages: [],
  isLoading: false,
  error: false,
};

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await client.collection('messages').getFullList();

  return response;
});

export const addNewMessage = createAsyncThunk('messages/addNewMessage', async (messageData) => {
  console.log('beginning new message', messageData);

  try {
    const response = await client
      .collection('messages')
      .create({ message: messageData.message, user_id: messageData.userId });

    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const updateReactions = createAsyncThunk('messages/addNewMessage', async (messageData) => {
  console.log('beginning new message', messageData);

  try {
    const response = await client.collection('messages').update({
      id: messageData.id,
      like: messageData.likes,
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
      state.isLoading = true;
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
    addReactionAct(state, action) {
      const { messageId, reaction } = action.payload;
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

        state.messages = loadedMessages;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        console.log('messages fetch failed');
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewMessage.fulfilled, (state, action) => {
        console.log('after', action);
        // action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
        // action.payload.userId = Number(action.payload.userId);
        // action.payload.date = new Date().toISOString();
        // action.payload.reactions = {
        //   thumbsUp: 0,
        //   hooray: 0,
        //   heart: 0,
        //   rocket: 0,
        //   eyes: 0,
        // };
        // console.log(action.payload);
        // state.posts.push(action.payload);
      });
  },
});

export const selectAllMessages = (state) => state.messages.messages; // Advantage: changes occur in slice not in every component
export const getMessagesIsLoading = (state) => state.messages.isLoading;
export const getMessagesError = (state) => state.messages.error;

export const { startLoading, hasError, messagesSuccess, addMessageAct, addReactionAct } =
  messagesSlice.actions;

export default messagesSlice.reducer;
