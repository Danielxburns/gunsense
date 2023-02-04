import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './features/users/usersSlice';
import Home from './features/home/Home';
import './App.css';

function App() {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchAllUsers())
},[dispatch])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
