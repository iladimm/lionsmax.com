import React from 'react';

const FeaturedOn = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured On</h2>
        <div className="flex justify-center items-center space-x-8">
          <img src="https://via.placeholder.com/150x50" alt="Forbes" className="h-12" />
          <img src="https://via.placeholder.com/150x50" alt="TechCrunch" className="h-12" />
          <img src="https://via.placeholder.com/150x50" alt="Wired" className="h-12" />
          <img src="https://via.placeholder.com/150x50" alt="Inc." className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
