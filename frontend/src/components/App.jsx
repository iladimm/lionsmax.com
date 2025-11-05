import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProductListing from './ProductListing';
import BundleSection from './BundleSection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/bundles" element={<BundleSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
