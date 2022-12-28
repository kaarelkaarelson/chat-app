import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../api/pocketbase';

const initialState = {
  users: [],
  isLoading: false,
  error: false,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.collection('users').getFullList();

  return response;
});

export const createUser = createAsyncThunk('users/createUser', async (userData) => {
  try {
    const response = await client.collection('users').create({
      username: userData.username,
      password: userData.password,
      confirmPassword: userData.password,
    });
    console.log('new user created', response);

    return response;
  } catch (err) {
    return err.message;
  }
});

export const usersSlice = createSlice({
  name: 'users',

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
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log('users success', action.payload);
        state.status = 'succeeded';
        // Adding date and reactions
        const min = 1;
        const loadedUsers = action.payload?.map((user) => {
          const formattedUser = {
            id: user.id,
            username: user.username,
            email: user.email,
          };

          return formattedUser;
        });

        console.log('loadedUsers', loadedUsers);

        state.users = loadedUsers;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log('users fetch failed');
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllUsers = (state) => state.users.users; // Advantage: changes occur in slice not in every component
export const getUsersIsLoading = (state) => state.users.isLoading;
export const getUsersError = (state) => state.users.error;

export const { startLoading, hasError, messagesSuccess } = usersSlice.actions;

export default usersSlice.reducer;
