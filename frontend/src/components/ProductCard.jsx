import React from 'react';

const ProductCard = ({ imageUrl, alt, name, price }) => {
  return (
    <div className="flex flex-col gap-3 group">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden shadow-md"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        aria-label={alt}
      ></div>
      <div className="text-center">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{price}</p>
        <button className="mt-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
