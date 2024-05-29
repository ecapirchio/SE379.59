import './App.css';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/baseball">Baseball</Link> | 
        <Link to="/basketball">Basketball</Link> | 
        <Link to="/football">Football</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;

