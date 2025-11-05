import React from 'react';
import HeroCarousel from './HeroCarousel';
import TrustBadges from './TrustBadges';
import BestSellers from './BestSellers';
import BundleSection from './BundleSection';
import LeadMagnet from './LeadMagnet';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <HeroCarousel />
      <TrustBadges />
      <BestSellers />
      <BundleSection />
      <LeadMagnet />
    </div>
  );
}

export default HomePage;
