import React from 'react';

const BundleCard = ({ imageUrl, alt, name, price }) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-background-light dark:bg-gray-800 shadow-lg min-w-64">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        aria-label={alt}
      ></div>
      <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{price}</p>
        </div>
        <button className="w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold hover:bg-primary/30 transition-colors">
          <span className="truncate">View Bundle</span>
        </button>
      </div>
    </div>
  );
};

export default BundleCard;
