import React from 'react';
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '../assets/Miku cloud 64.svg?url';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 md:px-16 py-4 bg-transparent absolute top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Mikupush logo" className="w-auto  h-16 " />
        </a>
      </div>

      <nav className="hidden md:flex gap-6 font-medium ml-auto items-center">
        <a href="#docs">Docs</a>
        <a href="#download">Download</a>

        <Button asChild variant="ghost">
          <a
            href="https://github.com/mikupush"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            GitHub <SquareArrowOutUpRight className="w-4 h-4" />
          </a>
        </Button>

      </nav>

      <div className="md:hidden">
        <button className="text-teal-text text-2xl">☰</button>
      </div>
    </header>
  );
};

export default Header;
