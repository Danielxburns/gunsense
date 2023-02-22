import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { MOCK_REPS } from '../../mockData/mockReps';

const repsAdapter = createEntityAdapter({
  selectId: (rep) => rep.name,
});

const initialState = repsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchReps = createAsyncThunk('reps/fetchReps', async () => {
  const response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: MOCK_REPS });
    }, 3000);
  });
  console.log('fetchReps response.data[0] :>> ', response.data[0]);
  return response.data;
});

export const repsSlice = createSlice({
  name: 'reps',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchReps.pending, (state) => {
      state.status = 'fetching reps';
    })
    .addCase(fetchReps.fulfilled, (state, action) => {
      state.status = 'succeeded';
      repsAdapter.addMany(state, action.payload)
    })
    .addCase(fetchReps.rejected, (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    })
  },
});

export default repsSlice.reducer;

export const { selectById: selectRepById, selectAll: selectAllReps } = repsAdapter.getSelectors(state => state.reps);
