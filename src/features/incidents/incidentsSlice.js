import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { MOCK_INCIDENTS } from '../../mockData/mockIncidents';

const incidentsAdapter = createEntityAdapter({
  selectId: (incident) => incident.id.$oid,
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = incidentsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchAllIncidents = createAsyncThunk(
  'incidents/fetchAllIncidents',
  async () => {
    /* --------- PLACE API CALL HERE --------- */
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: MOCK_INCIDENTS });
      }, 3000);
    });
    console.log('fetchAllIncidents response.data[0] :>> ', response.data[0]);
    return response.data;
  }
);

export const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllIncidents.pending, (state, action) => {
        state.status = 'fetching all incidents';
      })
      .addCase(fetchAllIncidents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(
          'fetchAllIncidents action.payload[0] :>> ',
          action.payload[0]
        );
        incidentsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAllIncidents.rejected, (state, action) => {
        state.status = 'failed';
        console.log('fetchAllIncidents rejected error :>> ', action.error);
        state.error = action.error.message;
      });
  },
});

export default incidentsSlice.reducer;

export const { selectById: selectIncidentById, selectAll: selectAllIncidents } = incidentsAdapter.getSelectors(
  (state) => state.incidents
);
