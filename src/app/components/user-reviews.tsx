"use client";

import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./animate-background";

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
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "El CRM ha revolucionado nuestra gestión de clientes. ¡Increíble herramienta!",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    company: "Movento S.A",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    text: "El CRM nos permite organizar y entender mejor las necesidades de nuestros clientes. Es fantástico.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    company: "Colegio Paraiso",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    text: "Gracias al CRM, hemos optimizado nuestra comunicación con los padres y mejorado nuestra eficiencia.",
  },
];

export default function UserReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="w-full py-12 relative overflow-hidden mb-8 mt-16 bg-gradient-to-b from-emerald-400/40 via-green-500/20 to-transparent rounded-lg">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-6xl font-bold text-center mt-8  my-12 md:px-10">
          Lo que dicen nuestros
          <span className="text-green-letter"> Clientes</span>
        </h2>
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            onClick={prevReview}
            className="mr-4 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Card className="w-full max-w-2xl overflow-hidden">
            <CardContent className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage
                        src={reviews[currentReview].avatar}
                        alt={reviews[currentReview].name}
                      />
                      <AvatarFallback>
                        {reviews[currentReview].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {reviews[currentReview].name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {reviews[currentReview].company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < reviews[currentReview].rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
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
      </div>
    </section>
  );
}
