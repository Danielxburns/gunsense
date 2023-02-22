import { configureStore } from '@reduxjs/toolkit';
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
});
