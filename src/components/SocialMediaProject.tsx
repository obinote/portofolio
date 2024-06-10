"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const logoData = [
  {
    id: "sm_005",
    name: "Baby Massage Promo",
    description: "Service Offer",
    path: "https://drive.google.com/uc?export=view&id=1bY0fnu0Ytm0AeiPlTY2BmbQQ0I-2cBHK",
    category: "post",
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  {
    id: "sm_004",
    name: "Remote Working",
    description: "Workshop",
    path: "https://drive.google.com/uc?export=view&id=1wD0UbjrDSpMooyc7nNyPhnXwqEm5hOL2",
    category: "post",
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  {
    id: "sm_003",
    name: "Fitness Training",
    description: "Special Offer",
    path: "https://drive.google.com/uc?export=view&id=12xymB0rXpCkwuYbqAov7-VUo3zteLeTT",
    category: "post",
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  {
    id: "sm_002",
    name: "Baby Massage",
    description: "Discover the Magic of Baby Massage",
    path: "https://drive.google.com/uc?export=view&id=1UmxRnBYiPD-svONdS6vY7VQzX849tXo4",
    category: "carousel",
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  {
    id: "sm_001",
    name: "Yoga Prenatal",
    description: "Embrancing motherhood a guide to prenatal yoga",
    path: "https://drive.google.com/uc?export=view&id=1HVRLsz56AXEJ1yu4Fgra8I1cgPjgzfd2",
    category: "carousel",
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
];

export default function SocialMediaProject() {
  return (
    <div className="mb-9" id="social_media">
      <h2 className="text-3xl font-bold text-center mb-6">
        Social Media Design
      </h2>
      <div className="flex flex-row flex-wrap gap-4 items-start justify-center mb-4">
        {logoData
          .filter((data) => data.category === "carousel")
          .map((project) => (
            <motion.div
              key={`${project.id}`}
              initial={project.initial}
              whileInView={project.whileInView}
              transition={project.transition}
              viewport={{ once: false }}
              style={{
                maxWidth: 768,
              }}>
              <ProjectCard
                description={project.description}
                name={project.name}
                thumbnail={{ height: 1366, width: 768, path: project.path }}
              />
            </motion.div>
          ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {logoData
          .filter((data) => data.category !== "carousel")
          .map((project) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={project.initial}
              whileInView={project.whileInView}
              transition={project.transition}
              viewport={{ once: false }}>
              <ProjectCard
                description={project.description}
                name={project.name}
                thumbnail={{ height: 1080, width: 1080, path: project.path }}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
}
