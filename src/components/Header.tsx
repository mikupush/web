import React from 'react';
import logo from '../assets/logofinal.png';
import { SquareArrowOutUpRight } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 md:px-16 py-4 bg-transparent absolute top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <img src={logo.src} alt="Mikupush Logo" className="h-8 w-8 object-contain" />
      </div>

      <nav className="hidden md:flex gap-6 text-teal-text font-medium ml-auto items-center">
        <a href="#docs" className="">Docs</a>
        <a href="#download" className="">Download</a>
        <a
          href="https://github.com/mikupush"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 transition-colors border-b-2 border-transparent pb-[2px] hover:border-current"
        >
          <span className="leading-none">GitHub</span>
          <SquareArrowOutUpRight className="w-3 h-3 align-center" />
        </a>
      </nav>

      <div className="md:hidden">
        <button className="text-teal-text text-2xl">☰</button>
      </div>
    </header>
  );
};

export default Header;



