import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import background animation
import bg_animation from "@/assets/loop_glow.gif";

function HeroSection() {
  const heroRef = useRef(null);
  const navigate = useNavigate();

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
                  navigate('/builddspace/services');
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

      </>
  );
}

export default HeroSection;
