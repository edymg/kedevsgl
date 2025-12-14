"use client";

import React from "react";
import Image from "next/image";

function LogoHorizontal() {
  return (
    <Image
      src="/logo-kedevs-full-bg-white.png"
      alt="Kedevs"
      width={150}
      height={50}
      className="rounded-md"
    ></Image>
  );
}

export default LogoHorizontal;
