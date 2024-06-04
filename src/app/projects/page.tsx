"use client";

import GalleryProject, { Project } from "@/components/GalleryProject";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

type categoryData = {
  id: string;
  title: string;
};

export default function ProjectsPage() {
  const param = useSearchParams();
  const [data, setData] = useState<Project[]>([]);
  const [categoryData, setCategoryData] = useState<categoryData[]>([]);
  const [category, setCategory] = useState<string>(param.get('cat') as string);
  const [visibleData, setVisibleData] = useState<Project[]>([]);
  const [itemsToShow, setItemsToShow] = useState<number>(20);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch("/category.json");
      const jsonData: categoryData[] = await res.json();

      setCategoryData(jsonData);
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const jsonData: Project[] = await res.json();

      if (category) {
        setData(jsonData.filter((data) => data.category === category));
        setVisibleData(
          jsonData.filter((data) => data.category === category).slice(0, 20)
        );
      } else {
        setData(jsonData);
        setVisibleData(jsonData.slice(0, 20));
      }
    };
    fetchData();
  }, [category]);

  const loadMore = useCallback(async () => {
    if (!isLoading && hasMore) {
      await setIsLoading(true);
      const newVisibleData = data.slice(0, itemsToShow + 20);
      setVisibleData(newVisibleData);
      setItemsToShow(itemsToShow + 20);

      if (newVisibleData.length === data.length) {
        setHasMore(false);
      }

      setIsLoading(false);
    }
  }, [data, hasMore, isLoading, itemsToShow]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 50) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore]);

  return (
    <>
      <GalleryProject projects={visibleData} />
      {isLoading && <Spinner />}
      <div className="flex flex-row w-full fixed bottom-3 items-center justify-center">
        <Drawer>
          <DrawerTrigger className="font-sans text-primary-foreground bg-card-foreground p-2 px-4 rounded-full">
            Category
          </DrawerTrigger>
          <DrawerContent>
            <DrawerClose>
              <Button
                className={cn(
                  "rounded-none bg-card w-full text-card-foreground hover:text-card",
                  !category ? "text-card bg-primary" : ""
                )}
                onClick={() => setCategory("")}>
                All Category
              </Button>
            </DrawerClose>
            {categoryData.map((cat) => (
              <DrawerClose key={cat.id}>
                <Button
                  className={cn(
                    "rounded-none bg-card w-full text-card-foreground hover:text-card",
                    cat.id === category && "text-card bg-primary"
                  )}
                  onClick={() => setCategory(cat.id)}>
                  {cat.title}
                </Button>
              </DrawerClose>
            ))}
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
