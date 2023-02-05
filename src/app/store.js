import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import incidentsReducer from '../features/incidents/incidentsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    incidents: incidentsReducer
  },
});
