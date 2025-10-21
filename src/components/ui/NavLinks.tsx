import React from "react";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function NavLinks() {
  const t = useI18n();
  return (
    <nav className="flex items-center gap-3">
      <Button asChild variant="ghost">
        <a href="#docs">{t.docs}</a>
      </Button>
      <Button asChild variant="ghost">
        <a href="#download">{t.download}</a>
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
