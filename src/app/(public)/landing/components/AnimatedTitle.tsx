"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type TitleColor = "primary" | "secondary" | "default";

const colorClasses: Record<TitleColor, string> = {
  primary: "text-green-letter",
  secondary: "text-turqueza-letter-light",
  default: "text-white",
};

interface AnimatedTitleProps {
  title: string;
  color?: TitleColor;
  className?: string;
}

/**
 *
 * @prop title @returns string
 * @prop color  @returns paleta de colores de la landing page
 * @prop className @returns para los demás estilos de tailwind
 */

export default function AnimatedTitle({
  title,
  color = "default",
  className,
}: AnimatedTitleProps) {
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const ctx = gsap.context(() => {
      const letters = titleRef.current!.querySelectorAll("span");

      gsap.fromTo(
        letters,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <span
      ref={titleRef}
      className={cn(
        "font-bold text-center inline-block font-montserrat",
        colorClasses[color],
        className
      )}
    >
      {title.split("").map((char, i) => (
        <span key={i} className="inline-block opacity-0">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
