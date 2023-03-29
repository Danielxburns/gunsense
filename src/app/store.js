import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import usersReducer from '../features/users/usersSlice';
import incidentsReducer from '../features/incidents/incidentsSlice';
import lettersReducer from '../features/letters/lettersSlice';
import repsReducer from '../features/reps/repsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    incidents: incidentsReducer,
    letters: lettersReducer,
    reps: repsReducer,
  },
  middleware: (getDefaultMiddleware) => (process.env.NODE_ENV !== 'production') ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
