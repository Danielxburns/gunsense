import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

//import { MOCK_REPS } from '../../mockData/mockReps';
/* const CIVIC_API_KEY = process.env.REACT_APP_CIVIC_API_KEY; */

const repsAdapter = createEntityAdapter({
  selectId: (rep) => rep.id,
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

function sortReps(obj) {                //take Civics object
  return obj.offices.reduce(            // reduce the offices array
    (officialsArr, office) => {         // for each office
      if (office.officialIndices.length) {  // if seat is not empty 
        office.officialIndices.map((idx) => { // get the officialsArr index of the person in office  
          let rep = officialsArr[idx]         // get person object by direct look up
          rep = { "id": idx, "officeName": office.name, "level": office.levels[0], ...rep } // create a new rep object with an id, office name and level of gov't added
          return officialsArr[idx] = rep         // replace existing person obj with updated person object in the accumulator array        
        })
      }
      return officialsArr;              // when loop is done, return the new array of officials
    },
    [ ...obj.officials ]                // spread in the officials array as the initial value
  );
}

export default repsSlice.reducer;

export const { selectById: selectRepById, selectAll: selectAllReps } = repsAdapter.getSelectors(state => state.reps);
