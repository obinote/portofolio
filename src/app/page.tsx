"use client";

import React, { useCallback, useEffect, useState } from "react";
import GalleryProject, { Project } from "@/components/GalleryProject";
import Spinner from "@/components/Spinner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portofolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

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
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Services /> */}
        <Portfolio projects={data} />
        <Contact />
        <BackToTop />
      </main>
    </div>
  );
}
