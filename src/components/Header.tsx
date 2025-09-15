import React from 'react';
import logo from '../assets/logofinal.png';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 md:px-16 py-4 bg-transparent absolute top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <img src={logo.src} alt="Mikupush Logo" className="h-8 w-8 object-contain" />
      </div>

      <nav className="hidden md:flex gap-6 text-teal-text font-medium">
        <a href="#features" className="hover:text-aqua-primary transition">Features</a>
        <a href="#pricing" className="hover:text-aqua-primary transition">Pricing</a>
      </nav>

      <div className="hidden md:flex">
        <button className="px-4 py-2 bg-aqua-primary text-white rounded-full shadow hover:bg-aqua-hover transition">
          Download
        </button>
      </div>

      <div className="md:hidden">
        <button className="text-teal-text text-2xl">☰</button>
      </div>
    </header>
  );
};

export default Header;
