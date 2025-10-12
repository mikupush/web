import React from "react";
import Layout from "@/layouts/Layout";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

export default function ReactLanding() {
  return (
    <Layout>
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>
      <Footer />
    </Layout>
  );
}

