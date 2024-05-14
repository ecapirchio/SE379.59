// Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './products.json';

function Products() {
  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {productsData.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;