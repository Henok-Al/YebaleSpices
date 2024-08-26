import React from "react";

const HeroSection = () => {
  return (
    <div className="relative mb-8">
      <img
        src="/images/yebaleFbCover.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Spice Shop</h1>
        <p className="text-lg mb-8">
          Discover the finest spices from around the world
        </p>
        <img
          src="/images/yebaleFbLogo.jpg"
          alt="Spices Menu"
          className="w-24 h-24 md:h-64 md:w-64 mb-14 object-cover rounded-full border-4 border-white"
        />
      </div>
    </div>
  );
};

export default HeroSection;