// App.jsx
import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-gray-900 text-gray-200 min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}

