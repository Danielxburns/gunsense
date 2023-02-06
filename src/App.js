import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from './features/users/usersSlice';
import { fetchAllIncidents } from './features/incidents/incidentsSlice';
import { fetchAllLetters } from './features/letters/lettersSlice';
import Home from './features/home/Home';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const usersStatus = useSelector((state) => state.users.status);
  const incidentsStatus = useSelector((state) => state.incidents.status);
  const lettersStatus = useSelector((state => state.letters.status));

 console.log('lettersStatus :>> ', lettersStatus);

  useEffect(() => {
    if ((usersStatus === 'idle')) {
      dispatch(fetchAllUsers());
    }
  }, [usersStatus, dispatch]);
  
  useEffect(() => {
    if ((incidentsStatus === 'idle')) {
      dispatch(fetchAllIncidents());
    }
  }, [incidentsStatus, dispatch]);

  useEffect(() => {
    if ((lettersStatus === 'idle')) {
      dispatch(fetchAllLetters());
    }
  }, [lettersStatus, dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
