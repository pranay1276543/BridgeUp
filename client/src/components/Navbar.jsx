// Navbar.jsx
import React from 'react';
import {assets} from '../assets/assets.js';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center space-x-2">
        <img src={assets.logo} alt="BridgeUp Logo" className="w-8 h-8" />
        <span className="text-xl font-semibold text-blue-500">BridgeUp</span>
      </div>
      <ul className="hidden md:flex items-center space-x-8">
        <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">How It Works</li>
        <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">Features</li>
        <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">Find Mentors</li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="hidden md:block px-4 py-2 font-medium text-white transition-colors duration-200 hover:text-blue-500">
          Sign In
        </button>
        <button className="px-5 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;