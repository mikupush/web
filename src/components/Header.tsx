import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavLinks from "@/components/NavLinks";
import logo from "@/assets/Miku-logo64.svg?url";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Miku Push!" className="h-15" />
        </a>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

