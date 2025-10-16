import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { assets } from '../assets/assets'; 

const Navbar = () => {
  const navigate = useNavigate(); // 2. Initialize useNavigate

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
        <img src={assets.logo} alt="BridgeUp Logo" className="w-16 h-16" />
        <span className="text-xl font-semibold text-blue-500">BridgeUp</span>
      </div>
      <ul className="hidden md:flex items-center space-x-8">
        <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer"
          onClick={()=>navigate('/working')}
        >
          How It Works
          </li>
        {/* 3. Features link uses navigate */}
        <li 
          className="hover:text-blue-500 transition-colors duration-200 cursor-pointer"
          onClick={() => navigate('/features')}
        >
          Features
        </li>
        <li className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">Find Mentors</li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="hidden md:block px-4 py-2 font-medium text-white transition-colors duration-200 hover:text-blue-500" 
         onClick={()=> navigate('/register-login')}>
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
