import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { MOCK_LETTERS } from '../../mockData/mockLetters';

const lettersAdapter = createEntityAdapter({
  selectId: (letter) => letter.id.$oid,
  sortComparer: (a, b) => b.sentOn.localeCompare(a.sentOn),
});

const initialState = lettersAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchAllLetters = createAsyncThunk(
  'letters/fetchAllLetters',
  async () => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: MOCK_LETTERS });
      }, 3000);
    });
    
    return response.data;
  }
);

export const lettersSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllLetters.pending, (state, action) => {
        state.status = 'fetching all letters';
      })
      .addCase(fetchAllLetters.fulfilled, (state, action) => {
        state.status = 'succeeded'
        lettersAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAllLetters.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

export default lettersSlice.reducer;

export const { selectAll: selectAllLetters, selectById: selectLetterById } = lettersAdapter.getSelectors((state => state.letters))
