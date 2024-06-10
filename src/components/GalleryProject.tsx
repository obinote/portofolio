import React from "react";
import { ProjectCard } from "./ProjectCard";

export type ProjectImageType = {
  id?: string;
  path: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  initial: any;
  whileInView: any;
  transition: any;
  category: string;
  story: string;
  thumbnail: ProjectImageType;
  items: ProjectImageType[];
};

export default function GalleryProject({ projects }: { projects: Project[] }) {
  return (
    <div className="min-h-screen flex items-start relative">
      <div className="flex-1 max max-w-screen-xl mx-auto p-8">
        <div className="columns-1 gap-3 sm:columns-2 lg:columns-4 [&>div:not(:first-child)]:mt-4">
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
