"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import linkedin from "@/assets/image/linkedin.png";
import upwork from "@/assets/image/upwork.png";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-background">
      <div className="container mx-auto">
        <div className="w-full mb-8">
          <blockquote className="text-xl italic font-semibold text-primary justify-center font-sans">
            <figure className="max-w-screen-md mx-auto items-center">
              <blockquote>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  viewport={{ once: false }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="italic text-center font-medium text-primary">
                  There are three responses to a design - yes, no, and WOW!
                  <span className="sm:hidden"> Wow is the one to aim for.</span>
                </motion.p>
                <p className="italic text-center font-medium text-primary hidden sm:block">
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
        <div className="w-full mb-8 flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: false }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-primary text-3xl font-bold text-center mb-5">
            Contact
          </motion.p>
          <motion.div
            className="flex flex-row gap-x-3"
            initial={{ opacity: 0, y: 50, rotate: 45 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.4 }}>
            <Link
              href="https://www.linkedin.com/in/ahmad-robi-9b6648126/"
              target="_blank">
              <div className="relative size-12 rounded-md overflow-hidden">
                <Image src={linkedin} fill alt="linkein icon" />
              </div>
            </Link>
            <Link
              href="https://www.upwork.com/freelancers/~0126aaa5eee68f6ecc"
              target="_blank">
              <div className="relative size-12 rounded-md overflow-hidden">
                <Image src={upwork} fill alt="upwork icon" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
