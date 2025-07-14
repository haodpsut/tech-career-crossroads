
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-12 md:py-20 bg-gray-900 border-b border-gray-800">
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        Tech Career Crossroads
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-400">Your Guide to Navigating the Worlds of CS and Networking</p>
    </header>
  );
};

export default Header;
