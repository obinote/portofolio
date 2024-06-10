"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

type ProjectItemProps = {
  path: string;
  width: number;
  height: number;
  id?: string;
};

export default function ProjectItem({
  path,
  width,
  height,
  id,
}: ProjectItemProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative ">
      <Image
        src={path}
        width={width}
        height={height}
        alt={id as string}
        onLoadingComplete={() => setIsLoaded(true)}
        className={cn(
          `object-cover transition-opacity ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`
        )}
      />

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary">
          <Spinner />
        </div>
      )}
    </div>
  );
}
