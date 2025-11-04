import React from 'react';
import Omega3 from '../assets/omega-3.png';
import VitaminD3 from '../assets/vitamin-d3.png';
import ProbioticBlend from '../assets/probiotic-blend.png';
import TurmericComplex from '../assets/turmeric-complex.png';

const BestSellers = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden shadow-md"
              style={{ backgroundImage: `url(${Omega3})` }}
              data-alt="Bottle of Omega-3 supplement"
            ></div>
            <div className="text-center">
              <p className="font-medium">Omega-3 Rich Formula</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">$29.99</p>
              <button className="mt-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Add to Cart</button>
            </div>
          </div>
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden shadow-md"
              style={{ backgroundImage: `url(${VitaminD3})` }}
              data-alt="Bottle of Vitamin D3 supplement"
            ></div>
            <div className="text-center">
              <p className="font-medium">Sunshine Vitamin D3</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">$19.99</p>
              <button className="mt-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Add to Cart</button>
            </div>
          </div>
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden shadow-md"
              style={{ backgroundImage: `url(${ProbioticBlend})` }}
              data-alt="Bottle of Probiotic supplement"
            ></div>
            <div className="text-center">
              <p className="font-medium">Advanced Probiotic Blend</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">$34.99</p>
              <button className="mt-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Add to Cart</button>
            </div>
          </div>
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden shadow-md"
              style={{ backgroundImage: `url(${TurmericComplex})` }}
              data-alt="Bottle of Turmeric supplement"
            ></div>
            <div className="text-center">
              <p className="font-medium">Turmeric Joint Complex</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">$27.99</p>
              <button className="mt-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
