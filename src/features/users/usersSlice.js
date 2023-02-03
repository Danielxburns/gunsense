import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
//import axios from 'axios';

const usersAdapter = createEntityAdapter({
  selectId: (user) => user._id,
});

const initialState = usersAdapter.getInitialState({
  currentUser: {},
  status: 'idle',
  error: null,
});

// const url = 'http://localhost:5000'

export const addNewUser = createAsyncThunk(
  'users/addNewUser',
  async (newuser) => {
    //  const response = await axios.post(`${url}/users`, newuser);
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { ...newuser, _id:nanoid() }
        console.log('inside setTimeout - userData :>> ', userData);
        resolve({ data: userData });
      }, 2000);
    });
    console.log('response :>> ', response);
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    signInUser(state, action) {
      console.log('signInUser - action.payload :>> ', action.payload);
      state.currentUser = state.entities[action.payload];
    },
    updateCurrentUser(state, action) {
      console.log('updateCurrentUser - action.payload :>> ', action.payload);
      state.currentUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addNewUser.pending, (state, action) => {
        state.status = 'adding new user';
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
        usersAdapter.addOne(state, action.payload);
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.status = 'failed';
        console.log('addNewUser rejected error :>> ', action.error);
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;

export const { createNewUser, updateCurrentUser } = usersSlice.actions;

export const { selectById: selectUserById } = usersAdapter.getSelectors(
  (state) => state.users
);
