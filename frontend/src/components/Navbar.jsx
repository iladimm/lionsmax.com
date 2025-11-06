import React from 'react';
import logo from '/src/assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src={logo} alt="LionsMax" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-700 hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">Blog</a>
              <a href="#" className="text-gray-700 hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">Shop</a>
              <a href="#" className="text-gray-700 hover:text-brand-orange px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
