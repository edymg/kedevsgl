"use client";

import { useEffect, useRef, useState } from "react";

import { ArrowRight } from "@/../node_modules/lucide-react";

import { Button } from "@mui/material";

import useScrollActive from "@/hooks/useScrollActive";

import { useActiveNavbarStore } from "@/store/activeNavbar";

import { projects } from "@/lib/project";

import { Project } from "../types/project";

import Modal from "@/components/ui/modal";
import { ProjectInfo } from "./ProjectInfo";
import AnimatedTitle from "./AnimatedTitle";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(!open);

  const inputGalleryRef = useRef(null);

  const isActiveSectionProjects = useScrollActive(inputGalleryRef);
  const { setIsActiveGallery } = useActiveNavbarStore();

  useEffect(() => {
    setIsActiveGallery(isActiveSectionProjects);
  }, [isActiveSectionProjects]);

  return (
    <>
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen scroll-mt-24 font-montserrat"
        id="gallery"
        ref={inputGalleryRef}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
              <span className="text-accent">
                Negocios que operan con orden y control gracias a
              </span>{" "}
              <AnimatedTitle title="Kedevs" color="primary" />
            </h2>
            <p className="text-[20px] text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Empresas que crecen sin caos operativo porque automatizaron y
              ordenaron sus procesos con nuestro acompañamiento.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col items-center text-center sm:w-[48%]"
              >
                {/* Project Card with Image */}
                <div className="bg-white relative w-full mb-6 rounded-2xl overflow-hidden bg-secondary group-hover:border-accent/50 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden  bg-white">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 bg-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Client Name and Category */}
                <div className="mb-4 w-full">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>

                {/* CTA Button - Rounded pill style matching reference */}
                <Button
                  onClick={() => {
                    setSelectedProject(project);
                    onOpen();
                  }}
                  className="w-full max-w-xs py-3 px-6 bg-accent hover:bg-red-400/90 text-accent-foreground font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-lg shadow-accent/20 hover:shadow-accent/30 cursor-pointer"
                  sx={{
                    background: "linear-gradient(to right, #10B981, #047857)",
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    padding: "12px 24px",
                    borderRadius: "8px", // Slightly rounded corners
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(to right, #0CA678, #065F46)",
                      boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
                      transform: "translateY(-1px)",
                      "& .MuiButton-endIcon": {
                        transform: "translateX(3px)",
                      },
                    },
                    "&:active": {
                      transform: "translateY(0)",
                    },
                  }}
                >
                  <span className="text-[12px]">Ver más</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal open={open} onOpen={onOpen} width="90%">
        <ProjectInfo project={selectedProject} onOpen={onOpen} />
      </Modal>
    </>
  );
}
