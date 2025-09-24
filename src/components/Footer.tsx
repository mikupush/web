import React from 'react';
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <p className="text-sm font-sans text-on-background">
          Miku Push! 2025 made with 🖤
        </p>
        <nav className="flex gap-6 font-medium items-center">
          <a href="#docs">Docs</a>
          <a href="#download">Download</a>

          <Button asChild variant="ghost" className="text-base font-medium">
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
      </div>
    </footer>
  );
};

export default Footer;
