import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Logo Design",
      description: "Creating unique and memorable logos.",
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.8 },
    },
    {
      id: 2,
      title: "Branding",
      description: "Developing comprehensive brand identities.",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.2 },
    },
    {
      id: 3,
      title: "Web Design",
      description: "Designing visually appealing and user-friendly websites.",
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, delay: 0.4 },
    },
    // Tambahkan lebih banyak layanan sesuai kebutuhan
  ];

  const variants = [
    {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.8 },
    },
    {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.2 },
    },
    {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, delay: 0.4 },
    },
  ];

  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              initial={service.initial}
              whileInView={service.whileInView}
              transition={service.transition}
              viewport={{ once: false }}
              key={service.id}
              className="p-6 bg-white shadow-md rounded-md text-center">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
