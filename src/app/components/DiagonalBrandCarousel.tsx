"use client";

import React from "react";
import BrandCarousel from "./BrandCarousel";

const brands = [
  "/adiel.jpg",
  "/movento.jpg",
  "/nomadas.jpg",
  "/paraiso.jpg",
  "/logo-atenas.png",
  "/Logo-RSV-sin-fondo.png",
  "/horse.jpg",
  "/np-products.jpg",
];

const brandsRandom = [
  "/nomadas.jpg",
  "/paraiso.jpg",
  "/logo-atenas.png",
  "/Logo-RSV-sin-fondo.png",
  "/horse.jpg",
  "/np-products.jpg",
  "/adiel.jpg",
  "/movento.jpg",
];

const randomBrands = brands.sort();
console.log(randomBrands, "randomBrands");

const DiagonalBrandCarousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden relative bg-blue-dark py-16">
      <div className="transform -skew-y-3">
        <BrandCarousel brands={brands} />
        <BrandCarousel brands={brandsRandom} repeatType="reverse" />
      </div>
    </div>
  );
};

export default DiagonalBrandCarousel;
