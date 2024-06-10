// "use client";

import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

type Thumnail = {
  id?: string;
  path: string;
  width: number;
  height: number;
};

type ProjectCardProps = {
  id?: string;
  name: string;
  description: string;
  thumbnail: Thumnail;
};

export function ProjectCard({
  id,
  name,
  description,
  thumbnail,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card_item border-foreground border-2 flex justify-center items-center">
      <CardContent className="p-0">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-card-foreground/30">
          <div className="relative flex justify-center gap-x-3">
            <Image
              src={thumbnail.path}
              width={thumbnail.width}
              height={thumbnail.height}
              alt={name}
              className="object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            />
          </div>
          <div className="absolute inset-0 bg-card-foreground opacity-40 -translate-x-[100%] duration-500 group-hover:translate-x-0"></div>
          <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 min-h-16">
            <h1 className="font-sans text-xl font-bold text-primary-foreground">
              {name}
            </h1>
            <p className="mb-3 text-base italic font-medium text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-2">
              {description}
            </p>
            {id && (
              <Link
                href={`/projects/${id}`}
                className="rounded-full bg-card-foreground py-2 px-3.5 font-sans text-sm capitalize text-primary-foreground shadow shadow-card-foreground/60">
                See More
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden animate-pulse">
      <CardContent className="p-4">
        <div className="w-full h-[300px] bg-gray-300" />
      </CardContent>
    </Card>
  );
}
