"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const logoData = [
  {
    id: "l_001",
    name: "Emerald Logo",
    description: "Logo for mom and baby massage",
    path: "https://drive.google.com/uc?export=view&id=1Ucnmwvw_GWxpjJHQYQWTW2yLsqmroCVM",
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
];

export default function LogoProject() {
  return (
    <div className="mb-9" id="logo">
      <h2 className="text-3xl font-bold text-center mb-6">Logo Design</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {logoData.map((project) => (
          <motion.div
            key={`${project.id}`}
            initial={project.initial}
            whileInView={project.whileInView}
            transition={project.transition}
            viewport={{ once: false }}
            style={{
              maxWidth: 500,
              marginBottom: 36,
            }}>
            <ProjectCard
              description={project.description}
              name={project.name}
              thumbnail={{ height: 500, width: 500, path: project.path }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
