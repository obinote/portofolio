"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const thumbnailData = [
  {
    id: "yt_012",
    name: "Stripe + Next.js",
    description: "Tutorial how to setup stripe on next js",
    path: "https://drive.google.com/uc?export=view&id=1ybHotTrvmjiRfwhkM8kIKD6jy8j41AW6",
  },
  {
    id: "yt_011",
    name: "Amazon Affiliate",
    description: "Learn how to get money from amazon affiliate",
    path: "https://drive.google.com/uc?export=view&id=1jzzzBhbIalUSflogxnCBuRrum1SyjFap",
  },
  {
    id: "yt_010",
    name: "Canva Monetization",
    description: "From zero to $100 in Day with Canva",
    path: "https://drive.google.com/uc?export=view&id=1KRCTeA5MhUQLX_ewjQqiHAlSIc0qN7nT",
  },
  {
    id: "yt_009",
    name: "Postpartum Food",
    description: "Best Food to Speed Up Postpartum Recovery",
    path: "https://drive.google.com/uc?export=view&id=12NN88FL2gyWVtL6mHczGlp6LiL_tpV_d",
  },
  {
    id: "yt_008",
    name: "7 Smoothies",
    description: "Smoothies Diet Booster",
    path: "https://drive.google.com/uc?export=view&id=1OG91AQ6g2PHExF3nFUlg6o9fctte63oq",
  },
  {
    id: "yt_007",
    name: "Baby Feeding",
    description: "Pumpkin Complementary Feeding",
    path: "https://drive.google.com/uc?export=view&id=1omONkFj0bWPSHWlcme9vz8n4h8QlxPc8",
  },
  {
    id: "yt_006",
    name: "Hiit Cardio",
    description: "15 Minutes Dumbbell Hiit",
    path: "https://drive.google.com/uc?export=view&id=1dgdUEl2yFhqGCTc_VL0WrJBa-ebNtPjU",
  },
  {
    id: "yt_005",
    name: "Free Kick",
    description: "Football Penalty Kick",
    path: "https://drive.google.com/uc?export=view&id=1VvoBLYlsLwgu8U9n0Pc1D_97vWsUPD8x",
  },
  {
    id: "yt_004",
    name: "Deal in 30 Min",
    description: "Learn how to make deal with client in 30 minutes",
    path: "https://drive.google.com/uc?export=view&id=1dYWJORDo3UGxifs1uIKK07Fn42IevsoD",
  },
  {
    id: "yt_003",
    name: "English Podcast",
    description: "Learn English with Podcast EP 24",
    path: "https://drive.google.com/uc?export=view&id=1pLXSS1ikCTJ3jligIkWJRo_AuNfBq62Y",
  },
  {
    id: "yt_002",
    name: "Siomay",
    description: "Indonesian dumpling",
    path: "https://drive.google.com/uc?export=view&id=1HEZEGgwh1tdmK0KPLS-wYC-QqJHgzWlR",
  },
  {
    id: "yt_001",
    name: "Yoga Prenatal",
    description: "Yoga Prenatal in 15 minutes",
    path: "https://drive.google.com/uc?export=view&id=1VYeaK44Ggud_CU8GHky5LSIyKw6976z9",
  },
];
export default function YtThumbnailProject() {
  return (
    <div className="mb-9">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        YouTube Thumbnail
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {thumbnailData.map((project) => (
          <motion.div
            key={project.id}
            className="relative"
            initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}>
            <ProjectCard
              description={project.description}
              name={project.name}
              thumbnail={{ height: 720, width: 1280, path: project.path }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
