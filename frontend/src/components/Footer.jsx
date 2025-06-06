import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
        <footer className="bg-gradient-to-br from-blue-700 to-purple-700 py-4 px-14">


      <div className="flex justify-between items-center">
        
        <div className="flex flex-col items-center w-1/3">
          <p className="text-white text-2xl font-bold">SMART</p>
          <p className="text-white text-2xl font-bold">RAM</p>
          <p className="text-white text-2xl font-bold">Optimization</p>
        </div>

        <div className="flex w-1/3 justify-around">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-white text-lg font-semibold">Navigation Links</p>
            <Link to="/" className="text-white text-sm hover:text-gray-300">Home</Link>
            <Link to="/about" className="text-white text-sm hover:text-gray-300">About</Link>
            <Link to="/data" className="text-white text-sm hover:text-gray-300">Dataset</Link>
            <Link to="/analytics" className="text-white text-sm hover:text-gray-300">Analytics</Link>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-white text-lg font-semibold">Follow Us</p>
            <a href="https://twitter.com/uncagedspirit_" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-gray-300">Twitter</a>
            <a href="https://github.com/uncagedspirit" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-gray-300">GitHub</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-white text-sm">&copy; 2024 Smart RAM Utlization. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
