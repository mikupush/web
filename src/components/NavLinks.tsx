import React from "react";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { useTranslation } from "@/hooks/i18n";

export default function NavLinks() {
  const { t } = useTranslation();

  return (
    <nav className="flex items-center gap-3">
      <Button asChild variant="ghost">
        <a href="#docs">{t('docs')}</a>
      </Button>
      <Button asChild variant="ghost">
        <a href="#download">{t('download')}</a>
      </Button>
      <Button asChild variant="ghost">
        <a
          href="https://github.com/mikupush"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          {t('github')} <SquareArrowOutUpRight className="w-4 h-4" />
        </a>
      </Button>
    </nav>
  );
}
