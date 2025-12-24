"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: number;
  name: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "María González",
    company: "Hotel Enai",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    text: "De perder el 30% de reservas por errores humanos a tener un sistema que gestiona todo automáticamente. ¡Cambió nuestro negocio!",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    company: "Movento S.A",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    text: "Hoy tenemos control total de nuestra operación comercial. El sistema evoluciona cada mes sin depender de un solo programador.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    company: "Colegio Paraíso",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 4,
    text: "Reportes que antes tomaban 3 días ahora se generan en 15 minutos. El equipo puede enfocarse en lo importante. La comunicación con los padres.",
  },
];

export default function ReviewCarousel() {
  const [currentReview, setCurrentReview] = useState(0);
  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-4 relative overflow-hidden mb-4 sm:mb-16 font-montserrat">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-6xl font-bold text-center mt-8 my-12 md:px-10">
            Lo que dicen nuestros{" "}
            <span className="text-green-letter">Clientes</span>
          </p>
        </motion.h2>

        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            onClick={prevReview}
            className="mr-4 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Card
            className="w-full max-w-2xl md:max-w-3xl h-auto md:h-52 overflow-hidden shadow-lg bg-gradient-to-b from-[#0b1e2e] via-[#112240] to-[#0a192f] rounded-lg
             relative "
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

            <div className="absolute h-96 w-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute h-96 w-96 -bottom-48 -right-48 bg-emerald-500/20 rounded-full blur-3xl" />

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a192f] to-transparent"></div>

            <CardContent className="p-6 ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-center h-full"
                >
                  <div className="flex items-center mb-4 z-50">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-green-100">
                      <AvatarImage
                        src={reviews[currentReview].avatar}
                        alt={reviews[currentReview].name}
                      />
                      <AvatarFallback>
                        {reviews[currentReview].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        {reviews[currentReview].name}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {reviews[currentReview].company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4 z-50">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < reviews[currentReview].rating
                            ? "text-yellow-400 fill-current stroke-white stroke-[0.5]"
                            : "text-gray-300 "
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-white z-50 italic">
                    &ldquo;{reviews[currentReview].text}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
          <Button
            variant="ghost"
            onClick={nextReview}
            className="ml-4 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentReview === index ? "bg-green-500 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
