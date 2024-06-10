import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-muted-foreground text-primary-foreground h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center flex-col mb-5">
        <h3 className="text-4xl font-sans font-bold">
          Hello, I am <span className="text-emerald-600">Robi!</span>
        </h3>
        <h5 className="text-xl font-sans">
          I am a freelance graphic designer.
        </h5>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: false }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-center flex-col mb-5">
        <p className="text-center">
          I assist clients in engaging effectively with their intended
          audiences.
          <span className="sm:hidden"> Feel free to reach out to me for all your graphic design needs!</span>
        </p>
        <p className="text-center hidden sm:block">Feel free to reach out to me for all your graphic design needs!</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}>
        <Link href={"#portfolio"}>
          <Button variant={"secondary"} className="text-primary font-sans font-bold">View My Work</Button>
        </Link>
      </motion.div>
      {/* <motion.a
        href="#portfolio"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
        View My Work
      </motion.a> */}
    </section>
  );
};

export default Hero;