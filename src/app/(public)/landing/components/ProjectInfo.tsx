"use client";

import { X, ArrowRight } from "@/../node_modules/lucide-react";
import { useEffect, useState } from "react";
import { Project } from "../types/project";
import { Button } from "@mui/material";

interface ProjectInfoProps {
  project: Project | null;
  onOpen: (open: boolean) => void;
}

export function ProjectInfo({ project, onOpen }: ProjectInfoProps) {
  return (
    <>
      <div className="flex justify-between items-center p-6 md:p-8 border-b border-border/50 bg-gradient-to-r from-accent/5 to-transparent">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-[#10B981] ">
          Ver más
        </h2>
        <Button
          onClick={() => onOpen(false)}
          className="p-2 hover:bg-secondary/50 rounded-full transition-all duration-200 group"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Description and Gallery */}
          <div className="flex flex-col justify-between">
            {/* Project Description */}
            <div>
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-8 font-light">
                {project?.description}
              </p>

              {/* Gallery Grid */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {project &&
                  project.gallery.map((image, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-lg md:rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group cursor-pointer"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Side - Mockups and CTA */}
          <div className="flex flex-col items-center justify-between">
            {/* Mockups Stack */}
            <div className="relative w-full h-48 md:h-64 mb-8">
              {project &&
                project.mockups.map((mockup, idx) => (
                  <div
                    key={idx}
                    className="absolute rounded-lg md:rounded-xl overflow-hidden border-4 border-foreground/20 shadow-2xl transition-transform duration-500 hover:shadow-accent/20"
                    style={{
                      width: idx === 0 ? "100%" : idx === 1 ? "70%" : "50%",
                      left: idx === 0 ? "0" : idx === 1 ? "15%" : "25%",
                      top: idx === 0 ? "0" : idx === 1 ? "20px" : "40px",
                      zIndex: 3 - idx,
                    }}
                  >
                    <img
                      src={mockup || "/placeholder.svg"}
                      alt={`Mockup ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>

            {/* Client Info */}
            <div className="text-center w-full">
              <p className="text-xs md:text-sm text-muted-foreground mb-2 uppercase tracking-widest font-semibold">
                Cliente
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                {project && project.name}
              </h3>

              <button className="group relative px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:shadow-2xl inline-flex items-center gap-2 text-sm md:text-base">
                de
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
