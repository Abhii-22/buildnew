import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rocket, Users, Building, Lightbulb, Globe, Zap, Shield, Target, TrendingUp, Award, Cpu, Heart, Briefcase, Clock, Star, ArrowRight } from "lucide-react";


// Import images
import StartupIncubation from "@/assets/IMAGES/campaign-creators-gMsnXqILjp4-unsplash (3).jpg";
import StartupSupport from "@/assets/IMAGES/pexels-yankrukov-7792886.jpg";
import workSpaceImage from "@/assets/IMAGES/kyle-gregory-devaras-6RTM8EsD1T8-unsplash.jpg";

const ServicesComponent = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

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
    <div className="flex flex-col w-full">
      {/* Services Section */}
      <section id="services" className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Services Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Explore Our <span className="text-gray-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover comprehensive solutions designed to accelerate your startup growth and success
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.3 },
                },
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 80, scale: 0.8, rotateY: -15 },
                    show: { opacity: 1, y: 0, scale: 1, rotateY: 0, transition: { duration: 1, delay: index * 0.2 } },
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.4 }
                  }}
                  className="group relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-gray-100 preserve-3d"
                  onClick={() => setSelectedService(service)}
                  style={{ perspective: '1000px' }}
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-transparent to-gray-200"></div>
                    <motion.div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b7280' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                      animate={{ 
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                  </div>
                  
                  {/* Image Container with Advanced Animations */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.3, filter: 'blur(4px)' }}
                      animate={{ 
                        scale: 1, 
                        filter: 'blur(0px)',
                        transition: { duration: 1.5, delay: index * 0.3 }
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        filter: 'brightness(1.1) contrast(1.1)',
                        transition: { duration: 0.6 }
                      }}
                    />
                    
                    {/* Multiple Animated Overlays */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Animated Particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gray-400 rounded-full"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${10 + i * 15}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 2, 0],
                          transition: { 
                            duration: 2, 
                            delay: i * 0.1, 
                            repeat: Infinity 
                          }
                        }}
                      />
                    ))}

                    {/* Floating Badge with Glow */}
                    <motion.div 
                      className="absolute top-4 right-4"
                      initial={{ x: 100, opacity: 0, scale: 0 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.4 + 0.6, 
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gray-400 blur-md opacity-50 animate-pulse"></div>
                    <span className="relative px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs font-bold rounded-full shadow-2xl backdrop-blur-sm border border-gray-300">
                      ✨ Premium
                    </span>
                  </div>
                </motion.div>

                {/* Animated Icon with Orbit Effect */}
                <motion.div 
                  className="absolute bottom-4 left-4"
                  initial={{ scale: 0, rotate: -360 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 0,
                    transition: { duration: 0.6, type: "spring" }
                  }}
                >
                  <div className="relative w-14 h-14">
                    <motion.div 
                      className="absolute inset-0 bg-gray-400 rounded-full opacity-30 blur-sm"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-2 border-gray-400">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        <Rocket className="w-7 h-7 text-gray-600" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Fixed Title Overlay on Image */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-white font-bold text-lg mb-1">{service.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1 bg-amber-400 rounded-full"></div>
                    <span className="text-amber-200 text-xs">Click to explore</span>
                  </div>
                </motion.div>
              </div>

              {/* Content with Advanced Text Animations */}
              <div className="relative p-6 z-10">
                {/* Category Tag */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.5, duration: 0.6 }}
                  className="inline-block mb-3"
                >
                  <span className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-semibold rounded-full border border-gray-300">
                    {service.category === 'incubation' ? '🚀 Incubation' : service.category === 'support' ? '💼 Support' : '🏢 Workspace'}
                  </span>
                </motion.div>

                {/* Title with Typewriter Effect */}
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors duration-300"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.6, duration: 0.8 }}
                  whileHover={{ 
                    x: 8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {service.name}
                </motion.h3>
                
                {/* Description with Fade and Slide */}
                <motion.p 
                  className="text-gray-600 text-sm mb-4 leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.7, duration: 0.7 }}
                >
                  {service.description}
                </motion.p>

                {/* Animated Features List */}
                <motion.div 
                  className="space-y-3 mb-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.8, duration: 0.7 }}
                >
                  {service.details.slice(0, 2).map((detail, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center gap-3"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.9 + idx * 0.15, duration: 0.6 }}
                      whileHover={{ 
                        x: 8,
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div 
                        className="relative"
                        whileHover={{ 
                          scale: 1.3,
                          rotate: 180,
                          transition: { duration: 0.4 }
                        }}
                      >
                        <div className="absolute inset-0 bg-gray-400 rounded-full blur-sm opacity-50"></div>
                        <div className="relative w-3 h-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full"></div>
                      </motion.div>
                      <span className="text-sm text-gray-700 font-medium">{detail.split(':')[0]}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Animated Action Button with Pulse */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3 + 1, duration: 0.7 }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className="relative"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                  />
                  <div className="relative flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg cursor-pointer border border-gray-300 group overflow-hidden">
                    <motion.span 
                      className="text-sm font-bold text-gray-700"
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      Explore Service
                    </motion.span>
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(107, 114, 128, 0.7)",
                          "0 0 0 10px rgba(107, 114, 128, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Advanced Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: '-200%' }}
                whileHover={{ 
                  x: '200%',
                  transition: { duration: 0.8 }
                }}
                style={{ zIndex: 5 }}
              />

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-400 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-400 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-400 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-400 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose BuilddSpace Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-gray-600">BuilddSpace</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Where innovative ideas transform into successful businesses through comprehensive support and proven strategies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Rapid Growth",
                  description: "Accelerate your startup journey with our proven 90-day growth framework and personalized roadmaps",
                  color: "from-gray-600 to-gray-700",
                  stats: "10x Faster"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Expert Network",
                  description: "Connect with 200+ industry leaders, successful founders, and domain-specific mentors",
                  color: "from-gray-500 to-gray-600",
                  stats: "200+ Experts"
                },
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Proven Success",
                  description: "Join 150+ successful startups that have raised over $100M in funding through our program",
                  color: "from-gray-600 to-gray-700",
                  stats: "$100M+ Raised"
                },
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "Strategic Focus",
                  description: "Data-driven insights and AI-powered tools to optimize your product-market fit and scaling strategy",
                  color: "from-gray-500 to-gray-600",
                  stats: "95% Success"
                }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden group">
                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs font-bold rounded-full shadow-lg">
                        {benefit.stats}
                      </span>
                    </div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mb-6 mx-auto text-white relative z-10`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{benefit.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h3>
                <p className="text-xl text-gray-600">Comprehensive resources and support at every stage</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
                {[
                  { icon: <Building className="w-8 h-8" />, title: "Premium Infrastructure", description: "State-of-the-art facilities and cutting-edge technology" },
                  { icon: <Shield className="w-8 h-8" />, title: "Legal & Compliance", description: "Expert guidance on regulatory requirements" },
                  { icon: <TrendingUp className="w-8 h-8" />, title: "Growth Analytics", description: "Real-time insights and performance tracking" },
                  { icon: <Globe className="w-8 h-8" />, title: "Global Network", description: "Connect with partners worldwide" }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/builddspace/contact')}
                className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Transform Your Startup →
              </motion.button>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Service <span className="text-amber-600">Benefits</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed advantages of each service we offer to help your startup succeed
              </p>
            </motion.div>

            <div className="space-y-16">
              {/* Startup Incubation Details */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-300 shadow-xl"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                      <Rocket className="w-8 h-8 mr-3 text-gray-600" />
                      Startup Incubation
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Our comprehensive incubation program provides everything you need to transform your idea into a successful venture.
                    </p>
                    <div className="space-y-4">
                      {[
                        "3-month intensive program with milestone-based progression",
                        "Weekly mentorship sessions with industry experts",
                        "Access to our network of 50+ investors and VCs",
                        "Technical support for MVP development and testing",
                        "Legal and compliance guidance for startup formation",
                        "Marketing and growth strategy consultation"
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-gray-700">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-600 mb-4">Program Outcomes</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-100 rounded-xl">
                        <div className="text-2xl font-bold text-gray-600">95%</div>
                        <div className="text-sm text-gray-500">Success Rate</div>
                      </div>
                      <div className="text-center p-4 bg-gray-100 rounded-xl">
                        <div className="text-2xl font-bold text-gray-600">$2M+</div>
                        <div className="text-sm text-gray-500">Avg Funding</div>
                      </div>
                      <div className="text-center p-4 bg-gray-100 rounded-xl">
                        <div className="text-2xl font-bold text-gray-600">6</div>
                        <div className="text-sm text-gray-500">Months Duration</div>
                      </div>
                      <div className="text-center p-4 bg-gray-100 rounded-xl">
                        <div className="text-2xl font-bold text-gray-600">50+</div>
                        <div className="text-sm text-gray-600">Mentors</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Startup Support Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-300 shadow-xl"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-gray-600 mb-4">Support Services</h4>
                      <div className="space-y-3">
                        {[
                          { service: "Market Research", description: "In-depth analysis of target market and competition" },
                          { service: "Business Planning", description: "Comprehensive business model and strategy development" },
                          { service: "Financial Modeling", description: "Revenue projections and financial planning" },
                          { service: "Pitch Deck Creation", description: "Investor-ready presentation materials" },
                          { service: "Team Building", description: "Recruitment and organizational structure guidance" },
                          { service: "Legal Compliance", description: "Company registration and regulatory requirements" }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-gray-100 rounded-xl p-4">
                            <h5 className="font-semibold text-gray-700 mb-1">{item.service}</h5>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      👥 Startup Support
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Get expert guidance and resources to validate your idea and build a strong foundation for growth.
                    </p>
                    <div className="space-y-4">
                      {[
                        "Personalized advisory sessions with startup experts",
                        "Access to proven frameworks and methodologies",
                        "Network of successful entrepreneurs and mentors",
                        "Resources for market validation and customer discovery",
                        "Support in developing go-to-market strategies",
                        "Guidance on product-market fit and scaling"
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-gray-700">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Work Space Details */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-300 shadow-xl"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      🏢 Work Space
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Modern, flexible workspaces designed to foster collaboration, creativity, and productivity for your startup.
                    </p>
                    <div className="space-y-4">
                      {[
                        "24/7 access to fully equipped office spaces",
                        "High-speed internet and advanced IT infrastructure",
                        "Modern meeting rooms with video conferencing",
                        "Collaborative areas and brainstorming zones",
                        "Coffee lounge and kitchen facilities",
                        "Event spaces for workshops and networking"
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-gray-700">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-600 mb-4">Workspace Options</h4>
                    <div className="space-y-4">
                      {[
                        { type: "Hot Desk", features: ["Flexible seating", "Common areas", "WiFi included"] },
                        { type: "Dedicated Desk", features: ["Reserved desk", "Storage space", "Meeting room access"] },
                        { type: "Private Office", features: ["Fully enclosed space", "Customizable layout", "Enhanced privacy", "Personal climate control"] }
                      ].map((option, idx) => (
                        <div key={idx} className="bg-gray-100 rounded-xl p-4">
                          <div className="mb-2">
                            <h5 className="font-semibold text-gray-700">{option.type}</h5>
                          </div>
                          <ul className="text-sm text-gray-500 space-y-1">
                            {option.features.map((feature, fidx) => (
                              <li key={fidx} className="flex items-center">
                                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        
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
                className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto relative text-white"
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

                {/* Modal Header with Image and Details */}
                <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-t-2xl shadow-inner">
                  <img
                    src={selectedService.image}
                    alt={selectedService.name}
                    className="w-full h-full object-cover brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded-full">SERVICE</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.817 1.48-8.279-6.064-5.828 8.332-1.151z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.h3 
                      className="text-4xl sm:text-5xl font-extrabold text-white mb-2 leading-tight overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      viewport={{ amount: 0.3 }}
                    >
                      <span className="whitespace-nowrap">{selectedService.name}</span>
                    </motion.h3>
                    <motion.p 
                      className="text-white text-lg sm:text-xl overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      viewport={{ amount: 0.3 }}
                    >
                      <span className="whitespace-nowrap">Discover our {selectedService.name.toLowerCase()} services tailored to your needs.</span>
                    </motion.p>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="relative z-10 p-6 sm:p-8 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
                  {/* Overview Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <h4 className="text-xl font-bold text-gray-900">Overview</h4>
                      <div className="w-12 h-0.5 bg-gray-400 ml-4"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedService.description} Our approach combines creativity, technical expertise, and innovative solutions to deliver functional, aesthetic, and sustainable designs that exceed expectations.
                    </p>
                  </div>

                  {/* Three Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Features Card */}
                    <div className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 rounded-xl p-6 border border-gray-300">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="text-lg font-bold text-gray-900">Features</h5>
                      </div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {selectedService.details.slice(0, 2).map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-400 mr-2">•</span>
                            <span className="text-gray-800">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits Card */}
                    <div className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 rounded-xl p-6 border border-gray-300">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="text-lg font-bold text-gray-900">Benefits</h5>
                      </div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span className="text-gray-800">Innovative solutions tailored to your vision</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span className="text-gray-800">Expert team with proven track record</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span className="text-gray-800">Cost-effective and timely delivery</span>
                        </li>
                      </ul>
                    </div>

                    {/* Process Card */}
                    <div className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 rounded-xl p-6 border border-gray-300">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="text-lg font-bold text-gray-900">Process</h5>
                      </div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">1.</span>
                          <span className="text-gray-800">Initial consultation and requirement gathering</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">2.</span>
                          <span className="text-gray-800">Design development and planning</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2">3.</span>
                          <span className="text-gray-800">Implementation and delivery</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gray-200 text-gray-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 hover:bg-gray-300"
                      onClick={() => setSelectedService(null)}
                    >
                      Close
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gray-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 hover:bg-gray-700"
                      onClick={() => window.open('https://register.medinitechnologies.in/', '_blank')}
                    >
                      Register Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default ServicesComponent;
