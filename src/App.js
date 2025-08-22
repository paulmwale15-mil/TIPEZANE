import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import NewsSection from "./Components/NewsSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <HeroSection />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default App;
