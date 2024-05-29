import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './App.css';
import { ProductsList } from './components/products/ProductsList.jsx';
import { ProductDetail } from './components/products/ProductDetail.jsx';
import { RouteNotFound } from './components/RouteNotFound.jsx';
import { Baseball } from './components/Baseball.jsx';
import { Basketball } from './components/Basketball.jsx';
import { Football } from './components/Football.jsx';
import { TeamDetail } from './components/TeamDetail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <div>
                <h1>Welcome to the Sports Standings Website</h1>
                <p>This website displays the latest standings of your favorite sports teams.</p>
              </div>
            }
          />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="baseball" element={<Baseball />} />
          <Route path="basketball" element={<Basketball />} />
          <Route path="football" element={<Football />} />
          <Route path="team/:id" element={<TeamDetail />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
