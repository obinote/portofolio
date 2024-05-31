import React from "react";
import { ProjectCard } from "./ProjectCard";

type ProjectImageType = {
  id?: string;
  path: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  category: string;
  story: string;
  thumbnail: ProjectImageType;
  items: ProjectImageType[];
};

// export const projects: Project[] = [
//   {
//     id: "eb_001",
//     name: "The Mystery of Eggs",
//     description: "Become an expert in cooking eggs",
//     story: "",
//     thumbnail: {
//       path: "https://drive.google.com/uc?export=view&id=1qFHrb3681YWcXlqI-zzLsuzv7-1JLUIr",
//       width: 291,
//       height: 678,
//     },
//     items: [],
//   },
// ];

export default function GalleryProject({ projects }: { projects: Project[] }) {
  return (
    <div className="min-h-screen flex items-start relative">
      <div className="flex-1 max max-w-screen-lg mx-auto p-8">
        <div className="columns-1 gap-4 sm:columns-2 sm:gap-4 md:columns-3 [&>div:not(:first-child)]:mt-4">
          {projects.map((project) => {
            return (
              <ProjectCard
                description={project.description}
                id={project.id}
                name={project.name}
                thumbnail={project.thumbnail}
                key={project.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
