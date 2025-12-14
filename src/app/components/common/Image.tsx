"use client";

import React from "react";
import logo from "../../../../public/logo-kedevs.jpg";
import Image from "next/image";

function ImageComponent() {
  return (
    <Image
      src={logo}
      alt="Kedevs"
      width={500}
      height={300}
      className="w-[200px] rounded-md"
    ></Image>
  );
}

export default ImageComponent;
