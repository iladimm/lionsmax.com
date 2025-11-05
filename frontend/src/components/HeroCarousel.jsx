import React from 'react';

const HeroCarousel = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] bg-cover bg-center text-white flex items-center justify-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542382257-80ded14b0ce7?q=80&w=2070&auto=format&fit=crop')"}}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Support Joint Health Naturally</h1>
        <p className="text-xl mb-2">$39.99</p>
        <button className="flex-none min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-all">
          <span className="truncate">Shop Now</span>
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
