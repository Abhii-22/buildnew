import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import bg_image from "@/assets/IMAGES/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg";
import StartupIncubation from "@/assets/IMAGES/campaign-creators-gMsnXqILjp4-unsplash (3).jpg";
import StartupSupport from "@/assets/IMAGES/pexels-yankrukov-7792886.jpg";
import constructionImage from "@/assets/IMAGES/osman-talha-dikyar-PomM7aa5m18-unsplash.jpg";
import renovationImage from "@/assets/IMAGES/getty-images-X-lDEMCZBz0-unsplash.jpg";
import sustainableDesignImage from "@/assets/IMAGES/getty-images-KD_fT_T4D24-unsplash.jpg";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedService, setSelectedService] = useState(null); // Selected service for details modal

  const sliderRef = useRef(null);
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
    // {
    //   id: 3,
    //   image: `${constructionImage}?height=200&width=300`,
    //   name: "Interior Fit-Outs",
    //   description: "Interior design and finishing including furniture, ceilings, and aesthetic enhancements.",
    //   details: [
    //     "Interior design and execution",
    //     "Modular furniture solutions",
    //     "Lighting and false ceiling installation",
    //     "Painting, carpentry, and finishing works",
        
    //   ],
    // },
    // {
    //   id: 4,
    //   image: `${renovationImage}?height=200&width=300`,
    //   name: "Site Development & Landscaping",
    //   description: "Preparation and beautification of land including grading, paving, and planting.",
    //   details: [
    //     "Land clearing and grading",
    //     "Road and pathway construction",
    //     "Boundary walls and fencing",
    //     "Green zone planning and garden installation",
        
    //   ],
    // },
    // {
    //   id: 5,
    //   image: `${sustainableDesignImage}?height=200&width=300`,
    //   name: " Construction Technology Solutions",
    //   description: "Eco-friendly design solutions for a greener future.",
    //   details: [
    //     "Use of construction management software",
    //     "Drone surveys & 3D mapping",
    //     "IoT-enabled monitoring (for large sites)",
    //     "Material tracking and workflow automation",
        
    //   ],
    // }
  ];

  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        // Reserved for future use
      }
    };

    calculateHeaderHeight();

    window.addEventListener("resize", calculateHeaderHeight);
    return () => window.removeEventListener("resize", calculateHeaderHeight);
  }, []);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(services.length - 4);
    }
  };

  const slideRight = () => {
    if (currentIndex < services.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    let interval;
    if (!isHovering && !selectedService) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= services.length - 4 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [services.length, isHovering, selectedService]);

  const visibleCards = 2; // Show 2 cards at a time

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[100vh] flex items-center" ref={heroRef}>
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${bg_image})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/30 to-black/30"></div>

        {/* Top Right Text */}
        <div className="absolute top-24 right-8 z-20">
          <div className="text-right">
            <div className="text-white font-bold text-sm md:text-base lg:text-lg leading-tight">
              <span className="text-red-500">B</span><span className="text-white">UILDING </span>
              <span className="text-red-500">I</span><span className="text-white">NNOVATION </span>
              <span className="text-red-500">L</span><span className="text-white">EARNING</span>
            </div>
            <div className="text-white font-bold text-sm md:text-base lg:text-lg leading-tight mt-1">
              <span className="text-red-500">D</span><span className="text-white">ESIGN & </span>
              <span className="text-red-500">D</span><span className="text-white">EVELOPMENT </span>
              <span className="text-red-500">S</span><span className="text-white">PACE</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between"
          >
            <div className="lg:w-1/2 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Crafting Spaces That Inspire
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Innovative architectural and design solutions to transform your vision into reality
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const servicesSection = document.querySelector('#services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-3 bg-transparent border border-white/30 text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </button>
              </div>
            </div>
            <div className="lg:w-1/2"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Slider Section */}
      <section id="services" className="bg-white py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-8">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 w-full text-center">
                Our Design &amp; Construction Services
              </h2>

              
            </div>

            <div
              className="relative overflow-hidden"
              ref={sliderRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div
                className="flex justify-center transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
              >
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="min-w-[260px] max-w-[320px] px-4 transition-all duration-300 cursor-pointer flex-shrink-0"
                    onClick={() => setSelectedService(service)}
                    aria-label={`Show detailed services for ${service.name}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => { if (e.key === 'Enter') setSelectedService(service) }}
                  >
                    <div
                      className="block bg-white border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
                      style={{ minHeight: "300px", maxHeight: "370px" }}
                    >
                      <div className="relative h-36 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Services Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-6 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)} // Close modal clicking outside
              aria-modal="true"
              role="dialog"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <motion.div
                className="bg-gray-900 rounded-2xl shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()} // Prevent modal close on clicking inside
              >
                <button
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
                  onClick={() => setSelectedService(null)}
                  aria-label="Close service details modal"
                >
                  {/* Removed icon */}
                </button>
                <h3 id="modal-title" className="text-3xl font-bold text-amber-400 mb-4">
                  {selectedService.name} - Detailed Services
                </h3>
                <p id="modal-description" className="text-gray-300 mb-6">{selectedService.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {selectedService.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                {/* Register button for all services */}
                <button
                  className="mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300"
                  onClick={() => {
                    // Handle registration logic here
                    console.log(`Register for ${selectedService.name}`);
                  }}
                >
                  Register
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

export default HeroSection;
