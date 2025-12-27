"use client";

import { X } from "@/../node_modules/lucide-react";
import { Project } from "../types/project";
import { Button, Link } from "@mui/material";
import ButtonContactModal from "./ButtonContactModal";
import Image from "next/image";

interface ProjectInfoProps {
  project: Project | null;
  onOpen: (open: boolean) => void;
}

export function ProjectInfo({ project, onOpen }: ProjectInfoProps) {
  return (
    <div className="h-screen lg:h-full font-montserrat overflow-y-auto">
      <div className="flex justify-between items-center p-6 md:px-8 border-b border-border/50 bg-gradient-to-r from-accent/5 to-transparent">
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
      <div className="flex-1 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Description and Gallery */}
          <div className="flex flex-col justify-between gap-4">
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
                      className="overflow-hidden aspect-square rounded-lg md:rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group cursor-pointer"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300g"
                      />
                    </div>
                  ))}
              </div>
            </div>

            <Link
              href={project?.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                className="mt-4 bg-accent"
                sx={{ py: 1.5, px: 4, fontWeight: "bold" }}
              >
                {project?.cta || "Visitar Sitio"}
              </Button>
            </Link>
          </div>

          {/* Right Side - Mockups and CTA */}
          <div className="flex flex-col items-center gap-3">
            {/* Mockups Stack */}
            <div className="w-full h-48 md:h-80">
              <div
                key={project!.id}
                className="h-full rounded-lg md:rounded-xl border-4 border-foreground/20 shadow-2xl transition-transform duration-500 hover:shadow-accent/20"
              >
                <img
                  src={project!.mockup || "/placeholder.svg"}
                  alt={`Mockup ${project!.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Client Info */}
            <div className="text-center">
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">
                Cliente
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {project && project.name}
              </h3>

              <ButtonContactModal title="contactanos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
