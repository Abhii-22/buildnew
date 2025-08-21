import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import background animation
import bg_animation from "@/assets/loop_glow.gif";

// Import images
import StartupIncubation from "@/assets/IMAGES/campaign-creators-gMsnXqILjp4-unsplash (3).jpg";
import StartupSupport from "@/assets/IMAGES/pexels-yankrukov-7792886.jpg";
import workSpaceImage from "@/assets/IMAGES/kyle-gregory-devaras-6RTM8EsD1T8-unsplash.jpg";

function HeroSection() {
  const [selectedService, setSelectedService] = useState(null);
  const heroRef = useRef(null);

  const services = [
    {
      id: 1,
      image: `${StartupIncubation}?height=200&width=300`,
      name: " Startup Incubation",
      description: "Provides early-stage startups with workspace, mentorship, technical support, and resources to develop, launch, and scale their business ideas.",
      details: [
        "Mentorship Access :Connects startups with experienced mentors in tech, business, and product development.",
        "Workspace & Infrastructure :Offers physical or virtual office space with essential tools and resources.",
        "Product Development Support :Assists in building and refining MVPs through technical guidance.",
      ],
    },
    {
      id: 2,
      image: `${StartupSupport}?height=200&width=300`,
      name: "Startup Support",
      description: "Helps founders assess and refine their startup ideas based on market demand.",
      details: [
        "Residential, commercial, and industrial construction",
        "Turnkey project execution",
        "Foundation work",
        "Concrete & masonry work",
        "Plastering, tiling, and flooring",
      ],
    },
    {
      id: 3,
      image: `${workSpaceImage}?height=200&width=300`,
      name: "Work Space",
      description: "Flexible and modern workspaces to foster collaboration and innovation.",
      details: [
        "Dedicated desks and private offices",
        "High-speed internet and amenities",
        "Access to meeting rooms and event spaces",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center text-center" ref={heroRef}>
        <img
          src={bg_animation}
          alt="Background Animation"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="relative z-20 container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { 
                opacity: 1, 
                transition: { staggerChildren: 0.3, delayChildren: 0.2 }
              }
            }}
          >
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} 
              className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
            >
              Innovate. Incubate. Inspire.
            </motion.h1>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }} 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              We empower visionary startups to build, launch, and scale their dreams into reality.
            </motion.p>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} 
              className="mt-12"
            >
              <motion.button
                onClick={() => {
                  const servicesSection = document.querySelector('#services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-10 py-4 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
<section id="services" className="bg-gradient-to-b from-gray-50 to-white py-24 relative">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
        Our <span className="text-amber-500">Services</span>
      </h2>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden relative group cursor-pointer border border-gray-200 hover:shadow-2xl transition-all"
            onClick={() => setSelectedService(service)}
          >
            {/* Image */}
            <div className="h-52 overflow-hidden relative">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col justify-between h-56">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {service.description}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-4 py-2 bg-amber-500 text-white rounded-lg shadow hover:bg-amber-600 transition-colors"
              >
                Learn More →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>

  {/* Modal */}
  <AnimatePresence>
    {selectedService && (
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedService(null)}
      >
        <motion.div
          className="bg-gray-900/90 border border-gray-700 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 relative text-white"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedService(null)}
          >
            ✕
          </button>

          {/* Modal Content */}
          <h3 className="text-3xl font-bold text-amber-400 mb-4">
            {selectedService.name}
          </h3>
          <p className="text-gray-300 mb-6">{selectedService.description}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {selectedService.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg shadow-lg transition-all"
          >
            Register Now
          </motion.button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>

     {/* About Section */}
<section id="about" className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-28 overflow-hidden">
  {/* Background Accent */}
  <div className="absolute inset-0 -skew-y-3 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 opacity-40"></div>
  
  <div className="relative container mx-auto px-6 lg:px-20 max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
    
    {/* LEFT: Text */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-6"
    >
      <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
        We <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">empower startups</span> 
        to build, scale, and succeed 🚀
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        At Builddspace, we bring founders, mentors, and investors together to 
        accelerate innovation. With resources, guidance, and community, 
        your ideas turn into impactful ventures.
      </p>

      {/* Highlight Stats */}
      <div className="grid grid-cols-2 gap-6 pt-4">
        {[
          { num: "100+", label: "Startups Accelerated" },
          { num: "50+", label: "Expert Mentors" },
          { num: "10M+", label: "Funds Raised" },
          { num: "20+", label: "Global Events" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold text-indigo-600">{stat.num}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT: Layered Images */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex justify-center lg:justify-end"
    >
      {/* Floating card 1 */}
      <motion.img
        src="/IMAGES/getty-images-82LbsqatQNA-unsplash.jpg"
        alt="Startup Team"
        className="rounded-3xl shadow-2xl w-72 lg:w-96 relative z-20"
        whileHover={{ scale: 1.05 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      {/* Floating card 2 (behind) */}
      <motion.img
        src="/IMAGES/thisisengineering-r-65knhjRV8-unsplash.jpg"
        alt="Mentorship"
        className="rounded-2xl shadow-xl w-60 lg:w-80 absolute -top-10 -left-16 opacity-80"
        whileHover={{ scale: 1.05 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </motion.div>
  </div>
</section>

    </>
  );
}

export default HeroSection;
