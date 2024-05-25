/*import './App.css';
import React from 'react';
import { Layout } from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;*/

import './App.css';
import React, { useState } from 'react';
import { Layout } from './components/Layout';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'sunset' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme === 'light' ? '' : `theme-${newTheme}`;
  };

  return (
    <div className="App">
      <Layout theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;

