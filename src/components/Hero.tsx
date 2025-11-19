import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { OS } from "@/lib/detect-os";
import { detectOS } from "@/lib/detect-os";
import { useTranslation } from "@/hooks/i18n";
import { usePlatform } from "@/hooks/os";


import lockIcon from "@/assets/Icons/lockIcon.svg?url";
import starIcon from "@/assets/Icons/starIcon.svg?url";
import featherIcon from "@/assets/Icons/featherIcon.svg?url";

import macIcon from "@/assets/os-macos.svg?url";
import winIcon from "@/assets/os-windows.svg?url";
import linuxIcon from "@/assets/os-linux.svg?url";

export default function Hero() {
  const { t } = useTranslation();
  const { platform } = usePlatform();

  const platformIcon = {
    windows: winIcon,
    macos: macIcon,
    linux: linuxIcon,
    other: undefined
  }

  return (
    <section className="flex flex-col py-16 z-10">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 id="hero-title" className="text-3xl md:text-5xl font-bold text-on-background max-w-2xl leading-tight">
          <span className="font-emoji">⚡</span> {t('hero_title')}
        </h1>

        <p className="mt-4 text-base md:text-lg text-on-background/80">
          {t('hero_subtitle')}
        </p>

        <div className="mt-6 flex flex-col items-center">
          <Button asChild variant="primary" size="lg" className="bg-white hover:bg-neutral-200 gap-3 px-6">
            <a href={`#download-${platform}`}>
              {platformIcon[platform] && <img src={platformIcon[platform]} alt="" aria-hidden className="h-5 w-5" />}
              <span className="text-base">{t('download_for_platform', { platform })}</span>
            </a>
          </Button>

          <a href="#download" className="mt-3 text-sm font-medium opacity-90 hover:opacity-100 underline">
            {t('or_other')}
          </a>
        </div>


      </div>
    </section>
  );
}