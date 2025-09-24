import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="h-screen bg-primary flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-on-background max-w-2xl">
          <span className="font-emoji">⚡</span> Lightweight and Simple <br /> open source alternative to WeTransfer
        </h1>

        <p className="mt-4 text-base md:text-lg text-on-background/80">
          For desktop available for macOS, Windows and Linux
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <Button variant="outline">Download for macOS</Button>
          <Button variant="ghost">Other platforms</Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <div className="bg-background rounded-lg shadow p-6">
            <h3 className="font-bold text-lg text-on-background">Privacy-First</h3>
            <p className="text-sm text-on-background/80">
              Anonymous sharing by default. You don’t have to create an account or
              provide your email for share files.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow p-6">
            <h3 className="font-bold text-lg text-on-background">Simple by design</h3>
            <p className="text-sm text-on-background/80">
              Share files without complications, just upload it and share the link
              to whoever you want. Very simple right? <span className="font-emoji">😁</span>
            </p>
          </div>
          <div className="bg-background rounded-lg shadow p-6">
            <h3 className="font-bold text-lg text-on-background">Lightweight</h3>
            <p className="text-sm text-on-background/80">
              Runs quietly in the background without hogging your machine. Ready
              to provide a great native user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

