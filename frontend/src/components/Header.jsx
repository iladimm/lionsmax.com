import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/80 dark:border-gray-700/80 px-4 sm:px-10 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-primary">
        <Logo />
        <h2 className="text-xl font-bold tracking-tighter">LionsMax</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="hidden md:flex items-center gap-9">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Blog</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Store</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Shop</a>
        </div>
        <div className="flex gap-2">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <span className="material-symbols-outlined text-xl">search</span>
          </button>
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <span className="material-symbols-outlined text-xl">person</span>
          </button>
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <span className="material-symbols-outlined text-xl">shopping_cart</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
