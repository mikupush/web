import React from "react";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight, Menu } from "lucide-react";
import logo from "@/assets/Miku-logo64.svg?url";

function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-3">
      <Button asChild variant="ghost">
        <a href="#docs">Docs</a>
      </Button>
      <Button asChild variant="ghost">
        <a href="#download">Download</a>
      </Button>
      <Button asChild variant="primary">
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
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Miku Push!" className="h-8 w-auto" />
        </a>

        <NavLinks />

        <div className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

