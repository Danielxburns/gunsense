import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from './features/users/usersSlice';
import { fetchAllIncidents } from './features/incidents/incidentsSlice';
import { fetchAllLetters } from './features/letters/lettersSlice';
import { fetchReps } from './features/reps/repsSlice';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './features/home/Main';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const usersStatus = useSelector((state) => state.users.status);
  const incidentsStatus = useSelector((state) => state.incidents.status);
  const lettersStatus = useSelector((state) => state.letters.status);
  const repsStatus = useSelector((state) => state.reps.status);

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchAllUsers());
    }
  }, [usersStatus, dispatch]);

  useEffect(() => {
    if (incidentsStatus === 'idle') {
      dispatch(fetchAllIncidents());
    }
  }, [incidentsStatus, dispatch]);

  useEffect(() => {
    if (lettersStatus === 'idle') {
      dispatch(fetchAllLetters());
    }
  }, [lettersStatus, dispatch]);

  useEffect(() => {
    if (repsStatus === 'idle') {
      dispatch(fetchReps());
    }
  }, [repsStatus, dispatch]);

  return (
    <>
      <CssBaseline>
        <Main />
      </CssBaseline>
    </>
  );
}

export default App;
