import React from "react";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import NavLinks from "@/components/ui/NavLinks";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const t = useI18n();
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col items-center gap-6">
        <p className="text-sm">{t.footer_made}</p>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="md:hidden">
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
        </div>
      </div>
    </footer>
  );
}