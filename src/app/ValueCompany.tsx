"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "@mui/icons-material";
import Link from "next/link";

import { FaReact, FaPython, FaNode, FaAws, FaAngular } from "react-icons/fa";
import { IoLogoDocker, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";

function ValueCompany() {
  return (
    <main className="mx-2 md:mx-32 px-5 py-10 bg-[#0a1224] rounded-lg">
      <div className="grid grid-cols-2">
        <div className="col-span-2 lg:col-span-1">
          <h1 className="p-4 text-2xl font-medium text-slate-200">
            Añada valor de inmediato
          </h1>
          <p className="p-4 text-lg text-slate-300">
            Tenemos experiencia en aumento de personal y sabemos cómo ponernos
            al día rápidamente, aportando valor de negocio desde el primer
            momento. Nuestros ingenieros tienen amplia experiencia en
            tecnologías como React, Angular, Javascript, Python, Django y .Net,
            así como en prácticas de QA y DevOps. Garantizamos que se integrarán
            a la perfección en los equipos de los clientes e impulsarán sus
            proyectos. Traducción realizada con la versión gratuita del
            traductor DeepL.com
          </p>
          <Link href="/team" legacyBehavior passHref className="">
            <Button className="ms-4 bg-slate-300 hover:bg-slate-200 text-gray-950">
              Nuestro equipo <ChevronRight />
            </Button>
          </Link>
        </div>
        <div className="col-span-2 lg:col-span-1 text-slate-200 mb-24 lg:mb-0">
          <div className=" grid grid-cols-3">
            <div className="col-span-1 flex flex-col space-y-4 animate-slow items-center">
              <FaReact className="text-6xl" />
              <FaNode className="text-6xl" />
              <FaPython className="text-6xl" />
            </div>
            <div className="col-span-1 flex flex-col space-y-4 animate-medium items-center">
              <FaAws className="text-6xl" />
              <IoLogoDocker className="text-6xl" />
              <IoLogoJavascript className="text-6xl" />
            </div>
            <div className="col-span-1 flex flex-col space-y-4 animate-fast items-center">
              <RiNextjsFill className="text-6xl" />
              <DiDjango className="text-6xl" />
              <FaAngular className="text-6xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-3 md:col-span-1">
          <h1 className="p-4 text-xl text-slate-200">El mejor talento</h1>
          <p className="p-4 text-md text-slate-400">
            Nuestro proceso de selección garantiza que sólo trabajamos con el
            10% de los mejores talentos informáticos para garantizar un software
            de alta calidad.
          </p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <h1 className="p-4 text-xl text-slate-200">
            zona horaria conveniente
          </h1>
          <p className="p-4 text-md text-slate-400">
            Estamos ubicados en latinoamerica, la cual facilita la colaboración
            con equipos de U.S durante el hora de trabajo.
          </p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <h1 className="p-4 text-xl text-slate-200">Dominio del Ingles</h1>
          <p className="p-4 text-md text-slate-400">
            Nuestro equipo tiene un alto nivel hablado y escrito de Ingles, por
            ello el lenguaje no es una barrera
          </p>
        </div>
      </div>
    </main>
  );
}

export default ValueCompany;
