import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-br from-blue-700 to-purple-700 p-6 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        Smart RAM Utilization
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-white text-lg hover:text-gray-300">Home</Link>
        <Link to="/about" className="text-white text-lg hover:text-gray-300">About</Link>
        <Link to="/data" className="text-white text-lg hover:text-gray-300">Dataset</Link>
        <Link to="/analytics" className="text-white text-lg hover:text-gray-300">Analytics</Link>
        <Link to="/Output" className="text-white text-lg hover:text-gray-300">Output</Link>
      </div>
    </nav>
  );
}

export default Navbar;
