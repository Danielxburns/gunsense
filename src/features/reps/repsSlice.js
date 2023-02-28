import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

//import { MOCK_REPS } from '../../mockData/mockReps';
/* const CIVIC_API_KEY = process.env.REACT_APP_CIVIC_API_KEY; */

const repsAdapter = createEntityAdapter({
  selectId: (rep) => rep.name,
});

const initialState = repsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchReps = createAsyncThunk('reps/fetchReps', async (address) => {
  if(!address) return;
  const { street, city, state, zip } = address
  try {
    const response = await axios({
      method: 'get',
      url: "https://www.googleapis.com/civicinfo/v2/representatives",
      params: {
        key: process.env.REACT_APP_CIVIC_API_KEY,
        address: `${street} ${city} ${state} ${zip}`
      }
    })
    return response.data
  } catch(error) {
    console.error('error fetching reps :>> ', error);
  }
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
      const reps = sortReps(action.payload)
      repsAdapter.addMany(state, reps)
    })
    .addCase(fetchReps.rejected, (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    })
  },
});

function sortReps(obj) {
  return obj.offices.reduce(
    (officialsArr, office) => {
      if (office.officialIndices.length) {
        let idx = office.officialIndices[0]
        let rep = officialsArr[idx]        
        rep = { ...rep, 'officeName': office.name, 'level': office.levels[0] }
        officialsArr[idx] = rep
      }
      return officialsArr;
    },
    [ ...obj.officials ]
  );
}

export default repsSlice.reducer;

export const { selectById: selectRepById, selectAll: selectAllReps } = repsAdapter.getSelectors(state => state.reps);
