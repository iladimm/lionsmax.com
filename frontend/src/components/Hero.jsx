import React from 'react';

const Hero = () => {
  return (
    <section className="bg-brand-teal text-white text-center py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold">
          Maximum Strength & Vitality in Your Prime
        </h1>
        <p className="mt-4 text-lg">
          Your trusted source for supplements and wellness guidance.
        </p>
        <button className="mt-8 bg-brand-orange text-white font-bold py-3 px-6 rounded-full hover:bg-brand-orange-dark transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
