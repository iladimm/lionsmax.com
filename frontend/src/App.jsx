import React from 'react';
import Layout from './components/Layout.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import TrustBadgeBar from './components/TrustBadgeBar.jsx';
import BestSellers from './components/BestSellers.jsx';
import BundlesSection from './components/BundlesSection.jsx';
import LeadMagnetSection from './components/LeadMagnetSection.jsx';
import './App.css';

function App() {
  return (
    <Layout>
      <HeroCarousel />
      <TrustBadgeBar />
      <BestSellers />
      <BundlesSection />
      <LeadMagnetSection />
    </Layout>
  );
}

export default App;
