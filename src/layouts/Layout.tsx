import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-primary text-on-background antialiased">
            {children}
    </div>
  );
}
