import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SportList } from './components/sports/SportsList.jsx';
import { SportDetail } from './components/sports/SportDetail.jsx';
import { RouteNotFound } from './components/RouteNotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <div className="flex-centered">
                <div>
                  <h1>Welcome to the Sports Website</h1>
                  <p>This website provides information about various sports teams including baseball, football, and basketball. Navigate to your favorite sport using the links above to see the teams and their details.</p>
                </div>
              </div>
            }
          />
          <Route path=":sportType" element={<SportList />} />
          <Route path=":sportType/:sportId" element={<SportDetail />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
