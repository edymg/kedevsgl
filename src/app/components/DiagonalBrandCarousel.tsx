"use client";

import React from "react";
import BrandCarousel from "./BrandCarousel";

const brands1 = [
  "/adiel.jpg",
  "/movento.jpg",
  "/nomadas.jpg",
  "/paraiso.jpg",
  "/enai.jpg",
  "/business.jpg",
  "/horse.jpg",
  "/np-products.jpg",
];
const brands2 = [
  "/adiel.jpg",
  "/movento.jpg",
  "/nomadas.jpg",
  "/paraiso.jpg",
  "/enai.jpg",
  "/business.jpg",
  "/horse.jpg",
  "/np-products.jpg",
];

const DiagonalBrandCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden relative bg-blue-dark py-16">
      <div className="transform -skew-y-3">
        <BrandCarousel brands={brands1} />
        <BrandCarousel brands={brands2} repeatType="reverse" />
      </div>
    </div>
  );
};

export default DiagonalBrandCarousel;
