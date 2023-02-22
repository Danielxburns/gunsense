import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { MOCK_USERS } from '../../mockData/mockUsers';
//import axios from 'axios';

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id.$oid,
});

const initialState = usersAdapter.getInitialState({
  currentUser: null,
  status: 'idle',
  error: null,
});

// const url = 'http://localhost:5000'

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async () => {
    /* --------- PLACE API CALL HERE --------- */
    /* example: const response = await axios.get(`${url}/users`); */
    /* ------- THIS IS A MOCK API CALL ------- */
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: MOCK_USERS });
      }, 3000);
    });
    return response.data;
  }
);

export const addNewUser = createAsyncThunk(
  'users/addNewUser',
  async (newuser) => {
    /* --------- PLACE API CALL HERE --------- */
    /* example: const response = await axios.post(`${url}/users`, newuser); */
    /* ------- THIS IS A MOCK API CALL ------- */
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { ...newuser, id: { $oid: nanoid() } };
        resolve({ data: userData });
      }, 3000);
    });
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signInUser(state, action) {
      console.log('signInUser - action.payload :>> ', action.payload);
      state.currentUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        state.status = 'fetching all users';
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        usersAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        console.log('error fetching all users:>> ', action.error);
      })
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

export const { signInUser } = usersSlice.actions;

export const { selectById: selectUserById } = usersAdapter.getSelectors(
  (state) => state.users
);
