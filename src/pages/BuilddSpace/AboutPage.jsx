import React from "react";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Building, Lightbulb, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const stats = [
    { num: "100+", label: "Startups Accelerated", icon: "🚀" },
    { num: "50+", label: "Expert Mentors", icon: "👥" },
    { num: "10M+", label: "Funds Raised", icon: "💰" },
    { num: "20+", label: "Global Events", icon: "🌍" },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We foster creativity and push boundaries to transform ideas into reality.",
      icon: "💡",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Community Driven",
      description: "Success is collaborative. We build strong networks that support growth.",
      icon: "🤝",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Excellence Always",
      description: "We maintain the highest standards in everything we do.",
      icon: "⭐",
      color: "from-amber-500 to-orange-500"
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
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-28 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 -skew-y-3 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 opacity-40"></div>
        
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
              to build, scale, and succeed 🚀
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

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${value.color} p-1 rounded-2xl`}>
                  <div className="bg-white rounded-2xl p-8 h-full">
                    <motion.div 
                      className="text-5xl mb-6 text-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
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

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-200 to-purple-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2"></div>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    className="relative z-10 w-12 h-12 bg-white border-4 border-indigo-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.3 }}
                  >
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div 
                    className="w-1/2 px-8"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`bg-gradient-to-r ${item.milestone ? 'from-amber-50 to-orange-50 border-amber-200' : 'from-gray-50 to-white border-gray-200'} border rounded-xl p-6 shadow-lg`}>
                      <div className="flex items-center mb-2">
                        <div className="text-indigo-600 mr-3">
                          {item.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-indigo-600">{item.title}</h4>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-6 lg:px-20 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to <span className="text-yellow-300">Build Your Dream</span>?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
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
