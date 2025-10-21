import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { OS } from "@/lib/detect-os";
import { detectOS } from "@/lib/detect-os";
import { useI18n } from "@/lib/i18n";

import lockIcon from "@/assets/Icons/lockIcon.svg?url";
import starIcon from "@/assets/Icons/starIcon.svg?url";
import featherIcon from "@/assets/Icons/featherIcon.svg?url";

import macIcon from "@/assets/os-macos.svg?url";
import winIcon from "@/assets/os-windows.svg?url";
import linuxIcon from "@/assets/os-linux.svg?url";

export default function Hero() {
  const t = useI18n();

  const [os, setOs] = useState<OS>("other");
  useEffect(() => {
    setOs(detectOS());
  }, []);

  const info =
    os === "windows" ? { href: "#download-windows", icon: winIcon,   label: "Download for Windows" } :
    os === "macos"   ? { href: "#download-macos",   icon: macIcon,   label: "Download for macOS" } :
    os === "linux"   ? { href: "#download-linux",   icon: linuxIcon, label: "Download for Linux" } :
                       { href: "#download",         icon: null,      label: "Download" };

  return (
    <section className="flex flex-col py-16">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-on-background max-w-2xl leading-tight">
          <span className="font-emoji">⚡</span> {t.hero_title}
        </h1>

        <p className="mt-4 text-base md:text-lg text-on-background/80">
          {t.hero_subtitle}
        </p>

        <div className="mt-6 flex flex-col items-center">
          <Button asChild variant="download" size="lg" className="gap-3 px-6">
            <a href={info.href}>
              {info.icon && <img src={info.icon} alt="" aria-hidden className="h-5 w-5" />}
              <span className="text-base">{info.label}</span>
            </a>
          </Button>

          <a href="#download" className="mt-3 text-sm font-medium opacity-90 hover:opacity-100 underline">
            {t.or_other}
          </a>
        </div>

        <h2 className="mt-14 text-2xl md:text-3xl font-extrabold">
          {t.features_title}
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <Card className="bg-background border border-primary/20 shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              <img src={lockIcon} alt="Privacy Icon" className="w-20 h-20" />
              <CardTitle className="text-on-background text-lg font-semibold">
                {t.privacy_first}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-on-background/80 leading-relaxed">
                {t.privacy_copy}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border border-primary/20 shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              <img src={starIcon} alt="Star Icon" className="w-20 h-20" />
              <CardTitle className="text-on-background text-lg font-semibold">
                {t.simple_by_design}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-on-background/80 leading-relaxed">
                {t.simple_copy}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border border-primary/20 shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              <img src={featherIcon} alt="Feather Icon" className="w-20 h-20" />
              <CardTitle className="text-on-background text-lg font-semibold">
                {t.lightweight}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-on-background/80 leading-relaxed">
                {t.lightweight_copy}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}