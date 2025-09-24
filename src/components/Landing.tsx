import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

const ReactLanding = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default ReactLanding;
