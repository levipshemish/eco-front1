import React from "react";

const images = [
  '/Images/utopian_coffee_co_logo.jpeg',
  '/Images/jbc.png',
  '/Images/speedwell.jpeg',
  '/Images/starbucks logo current copy.jpg',
  '/Images/Bonlife-Circle-Gold-Black_1642713912.webp'
];

// Duplicate images array for seamless scroll
const doubledImages = [...images, ...images];

export default function Brands() {
  return (
    <div>
          <h1 className="text-4xl px-4 font-bold  text-[#101517] font-inter">All the Brands you love</h1>
          <div className="scroll-container">
      <div className="scroll-track">
        {doubledImages.map((img, index) => (
          <img key={index} src={img} alt={`Brand ${index}`} />
        ))}
      </div>
    </div>
    </div>
  );
}
