import React from 'react';
import { assets } from '../assets/assets';

/**
 * Renders the main footer component, including branding, quick links,
 * social media links, and the copyright notice.
 */
const Footer = () => {
  // SVG icons for social media links (LinkedIn, GitHub, Instagram)
  const socialIcons = [
    { name: 'LinkedIn', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    ), url: '#linkedin' },
    { name: 'GitHub', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3 5.3 5.3 0 0 0 15 5.82c-2.73 0-4.88 1.45-5 3.76a4.57 4.57 0 0 0-1.5 2.5v1.44c0 1.25.96 2.2 2.22 2.2h.56"/></svg>
    ), url: '#github' },
    { name: 'Instagram', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    ), url: '#instagram' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8 lg:px-16">
        
        {/* Main Footer Grid */}
        <div className="flex flex-wrap justify-between border-b border-gray-200 pb-10">

          {/* Column 1: Branding and Description */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-8">
            <div className="flex items-center mb-4">
              {/* Using your existing logo import */}
              <img src={assets.logo} alt="BridgeUp Logo" className="w-16 h-16" /> 
              <span className="text-2xl font-semibold text-blue-600">BridgeUp</span> 
            </div>
            <p className="text-sm text-black max-w-xs">
              Building bridges between students through online mentorship.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-1/2 md:w-1/6 mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-3 text-black">
              <li><a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a></li>
              <li><a href="#features" className="hover:text-blue-600 transition-colors duration-200">Features</a></li>
              <li><a href="#privacy" className="hover:text-blue-600 transition-colors duration-200">Privacy</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Connect With Us (Social Icons) */}
          <div className="w-1/2 md:w-1/6">
            <h4 className="text-lg font-bold mb-4 text-black">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map((item) => (
                <a 
                  key={item.name} 
                  href={item.url} 
                  aria-label={item.name}
                  className="p-2 border border-gray-300 rounded-full text-black hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 text-center text-sm text-black">
          &copy; {currentYear} BridgeUp. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
