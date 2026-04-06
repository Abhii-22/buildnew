import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import background animation
import bg_animation from "@/assets/loop_glow.gif";

// Import card images
import innovationImg from "@/assets/IMAGES/thisisengineering-AvGIBmvdcac-unsplash.jpg";
import incubationImg from "@/assets/IMAGES/pablo-merchan-montes-2pmRwB_q3k8-unsplash.jpg";
import inspirationImg from "@/assets/IMAGES/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg";
import collaborationImg from "@/assets/IMAGES/linkedin-sales-solutions-nISqmehpBQk-unsplash.jpg";

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

      {/* Cards Section - Diagonal Layout */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              BUILD THE FUTURE
            </h2>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-6"></div>
          </motion.div>

          {/* Diagonal Card Layout */}
          <div className="relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-gray-400 h-full"></div>
              ))}
            </div>

            <div className="relative z-10 space-y-8">
              
              {/* Card 1: Innovation - Image Left, Content Right */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.3 }}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gray-300 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="flex flex-col md:flex-row h-auto md:h-80">
                      {/* Image Side */}
                      <div className="md:w-2/5 h-48 md:h-full relative">
                        <img
                          src={innovationImg}
                          alt="Innovation"
                          className="w-full h-full object-cover shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                          <motion.h4 
                            className="text-lg md:text-2xl font-bold text-white mb-1 overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ amount: 0.3 }}
                          >
                            <span className="whitespace-nowrap">Startup Innovation</span>
                          </motion.h4>
                          <div className="flex items-center gap-2">
                            <motion.div 
                              className="w-12 h-1 bg-amber-500"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              viewport={{ amount: 0.3 }}
                              style={{ originX: 0 }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Content Side */}
                      <div className="md:w-3/5 p-4 md:p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-500 rounded-lg flex items-center justify-center">
                            <span className="text-lg md:text-xl font-bold text-white">01</span>
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">INNOVATE</h3>
                            <span className="text-xs md:text-sm text-gray-500 font-medium">BREAKTHROUGH</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                          Break boundaries with cutting-edge technology and creative solutions that redefine what's possible.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Advanced Technology Integration</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Creative Problem Solving</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Future-Ready Solutions</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Disruptive Innovation</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-xs text-black">Transform ideas into reality</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Incubation - Image Right, Content Left */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ amount: 0.3 }}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gray-300 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="flex flex-col md:flex-row-reverse h-auto md:h-80">
                      {/* Image Side */}
                      <div className="md:w-2/5 h-48 md:h-full relative">
                        <img
                          src={incubationImg}
                          alt="Incubation"
                          className="w-full h-full object-cover shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                          <motion.h4 
                            className="text-lg md:text-2xl font-bold text-white mb-1 overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ amount: 0.3 }}
                          >
                            <span className="whitespace-nowrap">Startup Incubation</span>
                          </motion.h4>
                          <div className="flex items-center gap-2">
                            <motion.div 
                              className="w-12 h-1 bg-amber-500"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              viewport={{ amount: 0.3 }}
                              style={{ originX: 0 }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Content Side */}
                      <div className="md:w-3/5 p-4 md:p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-500 rounded-lg flex items-center justify-center">
                            <span className="text-lg md:text-xl font-bold text-white">02</span>
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">INCUBATE</h3>
                            <span className="text-xs md:text-sm text-gray-500 font-medium">NURTURE</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                          Nurture ideas from concept to reality with comprehensive support and expert guidance.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Mentorship Programs</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Resource Allocation</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Growth Acceleration</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Expert Guidance</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-xs text-black">From seed to success</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Inspiration - Image Left, Content Right */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ amount: 0.3 }}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gray-300 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="flex flex-col md:flex-row h-auto md:h-80">
                      {/* Image Side */}
                      <div className="md:w-2/5 h-48 md:h-full relative">
                        <img
                          src={inspirationImg}
                          alt="Inspiration"
                          className="w-full h-full object-cover shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                          <motion.h4 
                            className="text-lg md:text-2xl font-bold text-white mb-1 overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ amount: 0.3 }}
                          >
                            <span className="whitespace-nowrap">Startup Inspiration</span>
                          </motion.h4>
                          <div className="flex items-center gap-2">
                            <motion.div 
                              className="w-12 h-1 bg-amber-500"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              viewport={{ amount: 0.3 }}
                              style={{ originX: 0 }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Content Side */}
                      <div className="md:w-3/5 p-4 md:p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-500 rounded-lg flex items-center justify-center">
                            <span className="text-lg md:text-xl font-bold text-white">03</span>
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">INSPIRE</h3>
                            <span className="text-xs md:text-sm text-gray-500 font-medium">IGNITE</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                          Ignite passion and creativity that fuels breakthrough thinking and transformative action.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Creative Workshops</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Innovation Labs</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Vision Development</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Creative Thinking</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-xs text-black">Spark the extraordinary</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs">Creative</span>
                          <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs">Bold</span>
                          <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs">Visionary</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Collaboration - Image Right, Content Left */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ amount: 0.3 }}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gray-300 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="flex flex-col md:flex-row-reverse h-auto md:h-80">
                      {/* Image Side */}
                      <div className="md:w-2/5 h-48 md:h-full relative">
                        <img
                          src={collaborationImg}
                          alt="Collaboration"
                          className="w-full h-full object-cover shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                          <motion.h4 
                            className="text-lg md:text-2xl font-bold text-white mb-1 overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ amount: 0.3 }}
                          >
                            <span className="whitespace-nowrap">Startup Collaboration</span>
                          </motion.h4>
                          <div className="flex items-center gap-2">
                            <motion.div 
                              className="w-12 h-1 bg-amber-500"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              viewport={{ amount: 0.3 }}
                              style={{ originX: 0 }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Content Side */}
                      <div className="md:w-3/5 p-4 md:p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-500 rounded-lg flex items-center justify-center">
                            <span className="text-lg md:text-xl font-bold text-white">04</span>
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">COLLABORATE</h3>
                            <span className="text-xs md:text-sm text-gray-500 font-medium">CONNECT</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                          Build powerful ecosystems and partnerships that amplify impact and drive collective success.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Network Building</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Partnership Development</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Community Engagement</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-black text-xs md:text-sm">Shared Success</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-xs text-black">Together we achieve more</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs">Connected</span>
                          <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs">Unified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      </>
  );
}

export default HeroSection;
