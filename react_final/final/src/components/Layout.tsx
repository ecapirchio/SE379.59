/*import { Outlet, Link } from 'react-router-dom';
import React from 'react';

export const Layout = () => {
  return (
    <div className="app-container">
      <header className="nav">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="products">Products</Link>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

import { Outlet, Link } from 'react-router-dom';
import React from 'react';

export const Layout = ({ theme, toggleTheme }) => {
  return (
    <div className="app-container">
      <header className="nav">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="baseball">Baseball</Link>
          <Link to="football">Football</Link>
          <Link to="basketball">Basketball</Link>
          <button onClick={toggleTheme} style={{ marginLeft: 'auto' }}>
            Switch to {theme === 'light' ? 'Dark' : theme === 'dark' ? 'Sunset' : 'Light'} Theme
          </button>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>   
    </div>
  );
}; */

import { Outlet, Link } from 'react-router-dom';
import React from 'react';

export const Layout = ({ theme, toggleTheme }) => {
  return (
    <div className="app-container">
      <header className="nav">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="baseball">Baseball</Link>
          <Link to="football">Football</Link>
          <Link to="basketball">Basketball</Link>
          <button onClick={toggleTheme} style={{ marginLeft: 'auto' }}>
            Switch to {theme === 'light' ? 'Dark' : theme === 'dark' ? 'Sunset' : 'Light'} Theme
          </button>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>   
    </div>
  );
};

