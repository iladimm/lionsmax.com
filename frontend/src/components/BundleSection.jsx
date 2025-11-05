import React, { useState } from 'react';
import './BundleSection.css';

function BundleSection() {
  const [bundles] = useState([
    { id: 1, name: 'Vitality Starter Pack', price: 79.99, image: 'bundle1.jpg', description: 'Perfect for beginners' },
    { id: 2, name: 'Mind & Body Duo', price: 54.99, image: 'bundle2.jpg', description: 'Holistic wellness' },
    { id: 3, name: 'Wellness Warrior Set', price: 129.99, image: 'bundle3.jpg', description: 'Complete wellness suite' },
  ]);

  return (
    <div className="bundle-section">
      <h2>Save with Bundles</h2>
      <div className="bundle-carousel">
        {bundles.map((bundle) => (
          <div key={bundle.id} className="bundle-card">
            <img src={bundle.image} alt={bundle.name} />
            <h3>{bundle.name}</h3>
            <p className="description">{bundle.description}</p>
            <p className="price">${bundle.price}</p>
            <button className="view-bundle">View Bundle</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BundleSection;
