import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../features/users/usersSlice';
import { fetchAllIncidents } from '../features/incidents/incidentsSlice';
import { fetchAllLetters } from '../features/letters/lettersSlice';
import { fetchReps } from '../features/reps/repsSlice';
import { getUserData } from '../features/users/usersSlice';

import CssBaseline from '@mui/material/CssBaseline';
import Main from '../features/main/Main';
import {
  onAuthStateChangedListener,
} from '../utils/firebase.utils';

function App() {
  const dispatch = useDispatch();
  const incidentsStatus = useSelector((state) => state.incidents.status);
  const lettersStatus = useSelector((state) => state.letters.status);
  const repsStatus = useSelector((state) => state.reps.status);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((userAuth) => {
      console.log('inside App.js useEffect - userAuth :>> ', userAuth);
      if (userAuth) {
        dispatch(getUserData(userAuth))
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return unsubscribe;
  }, [dispatch]);

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
