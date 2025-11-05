import React, { useState } from 'react';
import './ProductListing.css';

function ProductListing() {
  const [products] = useState([
    { id: 1, name: 'Omega-3 Rich Formula', price: 29.99, image: 'omega3.jpg' },
    { id: 2, name: 'Sunshine Vitamin D3', price: 19.99, image: 'vitamin-d3.jpg' },
    { id: 3, name: 'Advanced Probiotic Blend', price: 34.99, image: 'probiotic.jpg' },
    { id: 4, name: 'Turmeric Joint Complex', price: 27.99, image: 'turmeric.jpg' },
  ]);

  return (
    <div className="product-listing">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
