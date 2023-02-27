import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
  getUserDataFromAuth,
} from '../../utils/firebase.utils';
import { getDoc } from 'firebase/firestore';

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

const initialState = usersAdapter.getInitialState({
  currentUser: null,
  status: 'idle',
  error: null,
});

export const addNewUser = createAsyncThunk(
  'users/addNewUser',
  async (signUpData) => {
    const { email, password } = signUpData;
    delete signUpData.password;
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocument(user, { ...signUpData });
      const userSnapshot = await getDoc(userDocRef);
      return { id: userSnapshot.id, ...userSnapshot.data() }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user. Email already in use');
      } else {
        console.log('error creating user :>> ', error.message);
      }
    }
  }
);

export const getUserData = createAsyncThunk(
  'users/getUserData',
  async (userAuth) => {
    try {
      const userData = await getUserDataFromAuth(userAuth);
      return userData;
    } catch (error) {
      alert('error retrieving user data from FireStore: ', error.message);
    }
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addNewUser.pending, (state) => {
        state.status = 'adding new user';
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
        usersAdapter.upsertOne(state, action.payload);
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.status = 'failed';
        console.log('addNewUser rejected error :>> ', action.error);
        state.error = action.error.message;
      })
      .addCase(getUserData.pending, (state) => {
        state.status = 'getting user data';
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
        usersAdapter.upsertOne(state, action.payload);
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = 'failed';
        console.log('getUserData rejected error :>> ', action.error);
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;

export const { setCurrentUser } = usersSlice.actions;

export const { selectById: selectUserById } = usersAdapter.getSelectors(
  (state) => state.users
);
