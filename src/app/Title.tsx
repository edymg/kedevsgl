"use client";

import React from "react";
import Link from "next/link";
import { BtnContact } from "./components/common/btn-contact";

function Title() {
  return (
    <main className={`pt-20`}>
      <div className="pt-10 md:pt-32">
        <h1 className="text-xl md:text-6xl text-center font-bold px-16">
          Desata el potencial de
          <span className="font-bold text-green-letter"> crecimiento </span>
          de tu organización e impúlsala a convertirse en su mejor versión
        </h1>
        <div className="flex justify-center py-8">
          <Link href="/contact">
            <BtnContact title="Contactarse" />
          </Link>
        </div>
      </div>
    </main>
  );
}
export default Title;
