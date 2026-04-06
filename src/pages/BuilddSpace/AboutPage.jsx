import React from "react";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Building, Lightbulb, Globe, LightbulbIcon, UsersIcon, StarIcon, TargetIcon, ZapIcon, ShieldIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const stats = [
    { num: "100+", label: "Startups Accelerated", icon: <Rocket className="w-6 h-6" /> },
    { num: "50+", label: "Expert Mentors", icon: <UsersIcon className="w-6 h-6" /> },
    { num: "10M+", label: "Funds Raised", icon: <TrendingUp className="w-6 h-6" /> },
    { num: "20+", label: "Global Events", icon: <Globe className="w-6 h-6" /> },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We foster creativity and push boundaries to transform ideas into reality.",
      icon: <LightbulbIcon className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Community Driven",
      description: "Success is collaborative. We build strong networks that support growth.",
      icon: <UsersIcon className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Excellence Always",
      description: "We maintain the highest standards in everything we do.",
      icon: <StarIcon className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Target Oriented",
      description: "We focus on clear goals and measurable outcomes for sustainable success.",
      icon: <TargetIcon className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Fast Execution",
      description: "Speed matters. We move quickly and adapt rapidly to changing markets.",
      icon: <ZapIcon className="w-8 h-8" />,
      color: "from-yellow-500 to-red-500"
    },
    {
      title: "Trust & Security",
      description: "We build lasting relationships through transparency and reliability.",
      icon: <ShieldIcon className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const timeline = [
    {
      title: "The Beginning",
      description: "Started with a vision to empower local entrepreneurs and build a thriving startup ecosystem",
      icon: <Rocket className="w-6 h-6" />,
      milestone: true
    },
    {
      title: "First Cohort",
      description: "Successfully graduated 15 startups with $2M total funding and expanded our mentor network",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Infrastructure Expansion",
      description: "Opened state-of-the-art facilities and partnered with global investors and VCs",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Innovation Hub",
      description: "Launched specialized programs in AI, blockchain, and deep tech with industry experts",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Global Impact",
      description: "Connected with 50+ international mentors and established partnerships worldwide",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 py-28 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 -skew-y-3 bg-gradient-to-r from-cyan-100 via-teal-100 to-emerald-100 opacity-40"></div>
        
        <div className="relative container mx-auto px-6 lg:px-20 w-full grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">empower startups</span> 
              to build, scale, and succeed <Rocket className="inline-block w-6 h-6 ml-2 text-indigo-600" />
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Builddspace, we bring founders, mentors, and investors together to 
              accelerate innovation. With resources, guidance, and community, 
              your ideas turn into impactful ventures.
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-center border border-white/50"
                >
                  <motion.div 
                    className="text-3xl mb-2"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{stat.num}</h3>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
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
              whileHover={{ scale: 1.05, rotate: 2 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            {/* Floating card 2 (behind) */}
            <motion.img
              src="/IMAGES/thisisengineering-r-65knhjRV8-unsplash.jpg"
              alt="Mentorship"
              className="rounded-2xl shadow-xl w-60 lg:w-80 absolute -top-10 -left-16 opacity-80"
              whileHover={{ scale: 1.05, rotate: -2 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
        <div className="container mx-auto px-6 lg:px-20 w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Our Purpose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving innovation and empowering entrepreneurs to build the future
            </p>
          </motion.div>

          <div className="space-y-32">
            {/* Mission Section */}
            <div className="grid lg:grid-cols-2 gap-20 items-center relative">
              {/* Background decoration */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
              
              {/* Left: Mission Image */}
              <motion.div
                initial={{ opacity: 0, x: -80, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative group">
                  <img
                    src="/IMAGES/getty-images-82LbsqatQNA-unsplash.jpg"
                    alt="Mission"
                    className="rounded-3xl shadow-2xl w-full transform transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Animated overlay */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/30 to-gray-600/30"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <TargetIcon className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Mission Content */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="order-1 lg:order-2 space-y-6"
              >
                <div className="space-y-4">
                  <motion.div 
                    className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <TargetIcon className="w-4 h-4 mr-2" />
                    OUR MISSION
                  </motion.div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Empowering
                    <span className="bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent"> Startups</span>
                  </h3>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We provide world-class resources, mentorship, and community support to transform innovative ideas into successful ventures. Our mission is to be the catalyst that turns entrepreneurial dreams into reality.
                </p>
                <motion.div 
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Innovation First</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Community Driven</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Excellence Always</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Vision Section */}
            <div className="grid lg:grid-cols-2 gap-20 items-center relative">
              {/* Background decoration */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20"></div>
              
              {/* Left: Vision Content */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <motion.div 
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <LightbulbIcon className="w-4 h-4 mr-2" />
                    OUR VISION
                  </motion.div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Global
                    <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent"> Ecosystem</span>
                  </h3>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Creating a world where every entrepreneur has access to the tools, knowledge, and network needed to build impactful businesses. We envision innovation without boundaries.
                </p>
                <motion.div 
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Global Reach</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Innovation Hub</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Future Forward</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Vision Image */}
              <motion.div
                initial={{ opacity: 0, x: 80, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative group">
                  <img
                    src="/IMAGES/thisisengineering-r-65knhjRV8-unsplash.jpg"
                    alt="Vision"
                    className="rounded-3xl shadow-2xl w-full transform transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Animated overlay */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-600/30 to-gray-800/30"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute -top-4 -left-4 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, -10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <LightbulbIcon className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
        <div className="container mx-auto px-6 lg:px-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03
                }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200">
                  {/* Floating accent dots */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-60"
                    style={{ background: `linear-gradient(to right, #8b5cf6, #ec4899)` }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  
                  {/* Icon container */}
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-gray-600">
                      {value.icon}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed text-sm">{value.description}</p>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 rounded-full"
                    style={{ background: `linear-gradient(to right, #8b5cf6, #ec4899)` }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3, type: "spring" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
        <div className="container mx-auto px-6 lg:px-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a small idea to a thriving startup ecosystem
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line - Desktop Only */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-full"></div>
            
            {/* Mobile Timeline Line - Vertical */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-full"></div>
            
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2, type: "spring" }}
                  className={`flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row relative`}
                >
                  {/* Desktop Spacer */}
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Mobile Content - Top */}
                  <div className="md:hidden w-full pl-20 pr-4 mb-4">
                    <motion.div 
                      className={`relative ${item.milestone ? 'bg-gradient-to-br from-amber-50 to-orange-100 border-amber-300' : 'bg-white border-gray-200'} border-2 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Accent bar */}
                      <div className={`absolute top-0 left-0 w-1 h-full ${item.milestone ? 'bg-gradient-to-b from-amber-400 to-orange-500' : 'bg-gradient-to-b from-gray-400 to-gray-600'} rounded-l-2xl`}></div>
                      
                      <div className="flex items-start mb-3">
                        <motion.div 
                          className={`w-10 h-10 rounded-xl ${item.milestone ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-gray-500 to-gray-700'} flex items-center justify-center text-white shadow-lg mr-3`}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: -10
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="scale-75">
                            {item.icon}
                          </div>
                        </motion.div>
                        <div className="flex-1">
                          <h4 className={`text-base font-bold ${item.milestone ? 'text-amber-700' : 'text-gray-700'} mb-1`}>{item.title}</h4>
                          {item.milestone && (
                            <motion.span 
                              className="inline-block px-2 py-1 bg-amber-200 text-amber-800 text-xs font-semibold rounded-full"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.5 }}
                            >
                              MILESTONE
                            </motion.span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-gray-500 rounded-full flex items-center justify-center shadow-lg mx-auto md:mx-0"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 10px 30px rgba(107, 114, 128, 0.3)"
                    }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full"></div>
                    {item.milestone && (
                      <motion.div 
                        className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-amber-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Desktop Content */}
                  <motion.div 
                    className="hidden md:block w-1/2 px-8"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`relative ${item.milestone ? 'bg-gradient-to-br from-amber-50 to-orange-100 border-amber-300' : 'bg-white border-gray-200'} border-2 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                      {/* Accent bar */}
                      <div className={`absolute top-0 left-0 w-1 h-full ${item.milestone ? 'bg-gradient-to-b from-amber-400 to-orange-500' : 'bg-gradient-to-b from-gray-400 to-gray-600'} rounded-l-2xl`}></div>
                      
                      <div className="flex items-start mb-3">
                        <motion.div 
                          className={`w-12 h-12 rounded-xl ${item.milestone ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-gray-500 to-gray-700'} flex items-center justify-center text-white shadow-lg mr-4`}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: -10
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className={`text-lg font-bold ${item.milestone ? 'text-amber-700' : 'text-gray-700'} mb-1`}>{item.title}</h4>
                          {item.milestone && (
                            <motion.span 
                              className="inline-block px-2 py-1 bg-amber-200 text-amber-800 text-xs font-semibold rounded-full"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.5 }}
                            >
                              MILESTONE
                            </motion.span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
        <div className="container mx-auto px-6 lg:px-20 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Ready to <span className="text-yellow-600">Build Your Dream</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of entrepreneurs who've transformed their ideas into successful ventures
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button 
                onClick={() => navigate('/builddspace/contact')}
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Get Started Today →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
