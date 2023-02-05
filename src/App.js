import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from './features/users/usersSlice';
import { fetchAllIncidents } from './features/incidents/incidentsSlice';
import Home from './features/home/Home';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const usersStatus = useSelector((state) => state.users.status);
  const incidentsStatus = useSelector((state) => state.incidents.status);
 console.log('incidentsStatus :>> ', incidentsStatus);
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

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
