"use client";

import { Project } from "@/components/GalleryProject";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ProjectsDetail({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const jsonData = await res.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const project = data.find((project) => project.id === params.id);
console.log(project?.items)
  return (
    <div className="container py-6">
      <h2 className="font-sans text-primary font-bold text-4xl mb-3">
        {project?.name}
      </h2>
      <h6 className="font-sans text-primary font-bold text-lg mb-6">
        {project?.story}
      </h6>
      <div className="relative flex justify-center">
        <Image
          src={project?.thumbnail.path as string}
          width={project?.thumbnail.width}
          height={project?.thumbnail.height}
          alt={project?.name as string}
          className="object-contain"
        />
      </div>
      <div className="min-h-screen flex items-start relative">
        <div className="flex-1 max max-w-screen-lg mx-auto p-8">
          <div className="columns-1 gap-4 sm:columns-2 sm:gap-4 [&>img:not(:first-child)]:mt-4">
            {project?.items.map((item) => {
              return (
                <Image
                  key={item.id}
                  src={item?.path as string}
                  width={item?.width}
                  height={item?.height}
                  alt={item.id as string}
                  className="object-contain shadow-md"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
