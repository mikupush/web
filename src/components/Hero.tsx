import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import lockIcon from "@/assets/Icons/lockIcon.svg?url";
import starIcon from "@/assets/Icons/starIcon.svg?url";
import featherIcon from "@/assets/Icons/featherIcon.svg?url";

export default function Hero() {
  return (
    <section className="bg-primary flex flex-col py-16">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-on-background max-w-2xl leading-tight">
          <span className="font-emoji">⚡</span> Lightweight and Simple open source alternative to WeTransfer
        </h1>

        <p className="mt-4 text-base md:text-lg text-on-background/80">
          For desktop available for macOS, Windows and Linux
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <Button asChild variant="outline">
            <a href="#docs">Docs</a>
          </Button>
          <Button variant="ghost">
            <a href="#download">Download</a>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <Card className="bg-background border border-primary/20 shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              <img src={lockIcon} alt="Privacy Icon" className="w-20 h-20" />
              <CardTitle className="text-on-background text-lg font-semibold">
                Privacy-First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-on-background/80 leading-relaxed">
                Anonymous sharing by default. You don’t have to create an account
                or provide your email to share files.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border border-primary/20 shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              <img src={starIcon} alt="Star Icon" className="w-20 h-20" />
              <CardTitle className="text-on-background text-lg font-semibold">
                Simple by design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-on-background/80 leading-relaxed">
                Share files without complications, just upload and share the link
                with whoever you want. Very simple right?{" "}
                <span className="font-emoji">😁</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border border-primary/20 shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              <img src={featherIcon} alt="Feather Icon" className="w-20 h-20" />
              <CardTitle className="text-on-background text-lg font-semibold">
                Lightweight
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-on-background/80 leading-relaxed">
                Runs quietly in the background without hogging your machine.
                Ready to provide a great native user experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


