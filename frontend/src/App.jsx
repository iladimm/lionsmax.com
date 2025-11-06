import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeaturedPosts from './components/FeaturedPosts.jsx';
import FeaturedOn from './components/FeaturedOn.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedPosts />
      <FeaturedOn />
      <Footer />
    </div>
  );
};

export default App;
