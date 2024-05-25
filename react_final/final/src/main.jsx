import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//  import {SportsList} from './components/sports/SportsList.jsx';
import { ProductsList } from './components/products/ProductsList.jsx';
import { ProductDetail } from './components/products/ProductDetail.jsx';
import { RouteNotFound } from './components/RouteNotFound.jsx';
import { Baseball } from './components/Baseball.jsx';
import { Basketball } from './components/Basketball.jsx';
import { Football } from './components/Football.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <div>
                <h1>Welcome to the Sports Website</h1>
                <p>This website provides information about various sports teams including baseball, football, and basketball. Navigate to your favorite sport using the links above to see the teams and their details.</p>
              </div>
            }
          />
          
          <Route path="products" element={<ProductsList />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="baseball" element={<Baseball />} />
          <Route path="basketball" element={<Basketball />} />
          <Route path="football" element={<Football />} />

          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
