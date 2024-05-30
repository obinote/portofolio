import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import linkedin from "@/assets/image/linkedin.png";
import upwork from "@/assets/image/upwork.png";
import profilePicture from "@/assets/image/Robi.png";
import React from "react";
import Link from "next/link";

const skills: string[] = [
  "Graphic Design",
  "YT Thumbnails",
  "Photo Editing",
  "Photo Retouch",
  "Social Media Design",
  "E-books Design",
  "Logo Design",
];

const softwares: string[] = ["Canva", "Adobe Photoshop"];

const Careers: string[] = [];

export default function AboutPage() {
  return (
    <div className="container py-6 ">
      <div className="w-full mb-8">
        <blockquote className="text-xl italic font-semibold text-primary justify-center font-sans">
          <figure className="max-w-screen-md mx-auto items-center">
            <blockquote>
              <p className="italic text-center font-medium text-primary">
                There are three responses to a design - yes, no, and WOW!
              </p>
              <p className="italic text-center font-medium text-primary">
                Wow is the one to aim for.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center mt-3">
              <div className="flex">
                <cite className="pe-3 font-bold text-primary">
                  Milton Glaser
                </cite>
              </div>
            </figcaption>
          </figure>
        </blockquote>
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8 md:gap-y-0">
        <div className="w-full md:w-8/12">
          <div className="flex flex-col mb-4 sm:flex-row sm:gap-x-4 sm:items-center">
            <Avatar className="size-60 float-left mr-3 mb-3 relative">
              <Image
                src={profilePicture}
                alt="profile picture"
                fill
                className="object-cover"
              />
            </Avatar>
            <div className="grid grid-cols-1">
              <div className="mb-3">
                <p className="md:col-span-2 font-bold">Name</p>
                <p className="md:col-span-4">Ahmad Robi</p>
              </div>
              <div className="mb-3">
                <p className="md:col-span-2 font-bold">Location</p>
                <p className="md:col-span-4">Indonesia, East Java</p>
              </div>
              <div className="mb-3">
                <p className="md:col-span-2 font-bold">Languages</p>
                <p className="md:col-span-4">English - Fluent</p>
                <p className="md:col-span-4">
                  Indonesian - Navite or Bilingual
                </p>
              </div>
            </div>
          </div>
          <div className="gap-y-3 font-sans text-justify flex flex-col">
            <p>
              As a freelance graphic designer, my focus lies in crafting YouTube
              thumbnails, editing photos, creating social media posts, e-books,
              and logos.
            </p>
            <p>
              I have refined my skills through various projects, concentrating
              on these specific areas. I have developed a sharp eye for
              designing attention-grabbing YouTube thumbnails, crafting
              memorable logos, producing compelling social media content,
              formatting visually appealing e-books, and mastering advanced
              photo editing techniques.
            </p>
            <p>
              My passion is utilizing my design expertise to help brands and
              content creators effectively engage with their target audiences.
              Whether it is designing captivating YouTube thumbnails, creating
              logos that mirror brand identities, producing engaging social
              media content, developing user-friendly e-books, or enhancing
              images through expert editing, I am committed to delivering
              innovative and high-quality design solutions.
            </p>
            <p>
              I am thrilled to bring my fresh ideas, creativity, and technical
              skills to new projects while collaborating with other creative
              individuals. I am eager to contribute to innovative design
              concepts that effectively communicate and resonate with audiences.
            </p>
            <p>
              Excited about contributing to innovative design concepts that
              effectively communicate and engage viewers!
            </p>
          </div>
        </div>
        <div className="w-full md:w-4/12">
          <div className="flex flex-col gap-y-2 mb-6">
            <p className="font-sans text-primary text-lg font-bold">Contact</p>
            <div className="flex flex-row gap-x-3">
              <Link
                href="https://www.linkedin.com/in/ahmad-robi-9b6648126/"
                target="_blank">
                <div className="relative size-6">
                  <Image src={linkedin} fill alt="linkein icon" />
                </div>
              </Link>
              <Link
                href="https://www.upwork.com/freelancers/~0126aaa5eee68f6ecc"
                target="_blank">
                <div className="relative size-6">
                  <Image src={upwork} fill alt="upwork icon" />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mb-6">
            <p className="font-sans text-primary text-lg font-bold">Skill</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {skills.map((skill, idx) => (
                <p key={idx} className="font-sans text-base text-primary">
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mb-6">
            <p className="font-sans text-primary text-lg font-bold">Software</p>
            <div className="grid grid-cols-1 gap-2">
              {softwares.map((software, idx) => (
                <p key={idx} className="font-sans text-base text-primary">
                  {software}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mb-6">
            <p className="font-sans text-primary text-lg font-bold">
              Career Highlights
            </p>
            <div className="grid grid-cols-1 gap-2">
              {Careers.map((Career, idx) => (
                <p key={idx} className="font-sans text-base text-primary">
                  {Career}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
