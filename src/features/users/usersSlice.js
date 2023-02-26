import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';
import { getDoc } from 'firebase/firestore'

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
      const userDocRef = await createUserDocumentFromAuth(user, {
        ...signUpData,
      });
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
      });
  },
});

export default usersSlice.reducer;

export const { signInUser } = usersSlice.actions;

export const { selectById: selectUserById } = usersAdapter.getSelectors(
  (state) => state.users
);
