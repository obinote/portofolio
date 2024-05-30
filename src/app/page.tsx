"use client";

import React, { useCallback, useEffect, useState } from "react";
import GalleryProject, { Project } from "@/components/GalleryProject";
import Spinner from "@/components/Spinner";

export default function HomePage() {
  const [data, setData] = useState<Project[]>([]);
  const [visibleData, setVisibleData] = useState<Project[]>([]);
  const [itemsToShow, setItemsToShow] = useState<number>(20);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const jsonData = await res.json();
      setData(jsonData);
      setVisibleData(jsonData.slice(0, 20));
    };
    fetchData();
  }, []);

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
    <div className="container py-6 flex flex-col">
      <section>
        <div className="flex items-center justify-center flex-col mb-5">
          <h3 className="text-4xl font-sans font-bold text-primary">
            Hello, I am <span className="text-emerald-500">Robi!</span>
          </h3>
          <h5 className="text-xl font-sans text-primary">
            I am a freelance graphic designer.
          </h5>
        </div>
        <div className="flex items-center justify-center flex-col mb-5">
          <p>
            I assist clients in engaging effectively with their intended
            audiences.
          </p>
          <p>Feel free to reach out to me for all your graphic design needs!</p>
        </div>
      </section>
      <section>
        <GalleryProject projects={visibleData} />

        {isLoading && <Spinner />}
      </section>
    </div>
  );
}
