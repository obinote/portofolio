"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const logoData = [
  {
    id: "eb_001",
    name: "The Mystery of Eggs",
    description: "Become an expert in cooking eggs",
    path: "https://drive.google.com/uc?export=view&id=1LehCPlvxqw8HrXqsN_G3o8oZBw0_20Mp",
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
];

export default function BookProject() {
  return (
    <div className="mb-9" id="e-book">
      <h2 className="text-3xl font-bold text-center mb-6">E-book Design</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {logoData.map((project) => (
          <motion.div
            key={`${project.id}`}
            initial={project.initial}
            whileInView={project.whileInView}
            transition={project.transition}
            viewport={{ once: false }}
            style={{
              maxWidth: 512,
              marginBottom: 36,
            }}>
            <ProjectCard
              description={project.description}
              name={project.name}
              thumbnail={{ height: 512, width: 800, path: project.path }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
