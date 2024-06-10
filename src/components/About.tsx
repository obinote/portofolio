"use client";

import { motion } from "framer-motion";
import { Avatar } from "./ui/avatar";
import Image from "next/image";
import profilePicture from "@/assets/image/Robi.png";

const About = () => {
  return (
    <section id="about" className="py-12 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="mb-4">
            <Avatar className="size-60 float-left mr-3 mb-3 relative">
              <Image
                src={profilePicture}
                alt="profile picture"
                fill
                className="object-cover"
              />
            </Avatar>
          </motion.div>
          <motion.p
            className="text-center font-sans text-primary text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}>
            As a freelance{" "}
            <span className="text-emerald-600 font-bold">Graphic Designer</span>
            , I specialize in creating eye-catching YouTube thumbnails, flyers,
            social media posts, e-books, and logos. My experience in these areas
            has sharpened my skills, enabling me to produce compelling content
            that engages audiences. Passionate about helping brands and content
            creators connect with their target audiences, I am committed to
            delivering innovative, high-quality design solutions. I bring fresh
            ideas, creativity, and technical expertise to every project, and I
            am eager to collaborate with other creatives to contribute to design
            concepts that effectively communicate and captivate viewers.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
