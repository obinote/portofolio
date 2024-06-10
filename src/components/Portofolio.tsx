import Image from "next/image";
import { Project } from "./GalleryProject";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const Portfolio = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="portfolio" className="py-12 bg-gray-100 dark:bg-gray-400">
      <div className="container mx-auto">
        <div className="mb-9">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">
            YouTube Thumbnail
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.category === "yt-thumnail")
              .map((project) => (
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
                    thumbnail={project.thumbnail}
                  />
                </motion.div>
              ))}
          </div>
        </div>
        <div className="mb-9">
          <h2 className="text-3xl font-bold text-center mb-6">E-book Design</h2>
          <div className="grid grid-cols-1">
            {projects
              .filter((project) => project.category === "e-book")
              .map((project) => (
                <div key={project.id} className="columns-1 gap-3 sm:columns-2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: project.thumbnail.width, marginBottom: 36 }}>
                    <ProjectCard
                      description={project.description}
                      name={project.name}
                      thumbnail={project.thumbnail}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="gap-3 columns-2 [&>div:not(:first-child)]:mt-4">
                    {project.items.map((item, idx) => (
                      <div className="relative " key={`${project.id}-${idx}`}>
                        <Image
                          key={`${project.id}-${idx}`}
                          src={item.path}
                          width={item.width}
                          height={item.height}
                          alt={`${project.name}-${idx}`}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
          </div>
        </div>
        <div className="mb-9">
          <h2 className="text-3xl font-bold text-center mb-6">Logo Design</h2>
          <div className="grid grid-cols-1">
            {projects
              .filter((project) => project.category === "logo")
              .map((project) => (
                <div key={project.id} className="columns-1 gap-3 sm:columns-2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: project.thumbnail.width, marginBottom: 36 }}>
                    <ProjectCard
                      description={project.description}
                      name={project.name}
                      thumbnail={project.thumbnail}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="gap-3 columns-2 [&>div:not(:first-child)]:mt-4">
                    {project.items.map((item, idx) => (
                      <div className="relative " key={`${project.id}-${idx}`}>
                        <Image
                          key={`${project.id}-${idx}`}
                          src={item.path}
                          width={item.width}
                          height={item.height}
                          alt={`${project.name}-${idx}`}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
