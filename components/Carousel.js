// Carousel.jsx
import React, { useState, useEffect } from 'react';

const images = [
  '/Images/The-7-Best-Coffee-Brands-of-2024_PT23_COFFEE_KS_05_16_02.jpg',
  '/Images/confident-coffee-roaster-man-is-checking-preparation-process_636537-32786.avif'
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-full h-130 object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Optional dots navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
