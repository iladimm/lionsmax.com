import React from 'react';
import ProductCard from './ProductCard';
import Omega3 from '../assets/omega-3.jpg';
import VitaminD3 from '../assets/vitamin-d3.jpg';
import Probiotic from '../assets/probiotic.jpg';
import Turmeric from '../assets/turmeric.jpg';

const BestSellers = () => {
  const products = [
    {
      imageUrl: Omega3,
      altText: 'Bottle of Omega-3 supplement',
      name: 'Omega-3 Rich Formula',
      price: '$29.99',
    },
    {
      imageUrl: VitaminD3,
      altText: 'Bottle of Vitamin D3 supplement',
      name: 'Sunshine Vitamin D3',
      price: '$19.99',
    },
    {
      imageUrl: Probiotic,
      altText: 'Bottle of Probiotic supplement',
      name: 'Advanced Probiotic Blend',
      price: '$34.99',
    },
    {
      imageUrl: Turmeric,
      altText: 'Bottle of Turmeric supplement',
      name: 'Turmeric Joint Complex',
      price: '$27.99',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              altText={product.altText}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
