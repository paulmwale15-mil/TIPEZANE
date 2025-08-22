import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const images = [
  "https://picsum.photos/id/1015/1200/600",
  "https://picsum.photos/id/1016/1200/600",
  "https://picsum.photos/id/1018/1200/600"
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="hero-content">
        <h1>To see and be seen</h1>
        <p>Choose a service to get started</p>
        <div className="service-cards">
          <div className="card">Skills</div>
          <div className="card">Transport</div>
          <div className="card">Real Estate</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
