import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rocket, Users, Building, Lightbulb, Globe, Zap, Shield, Target, TrendingUp, Award, Cpu, Heart, Briefcase, Clock, Star } from "lucide-react";


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
      {/* Hero Section */}
      <section className="relative overflow-hidden h-96 flex items-center justify-center text-center bg-gradient-to-br from-blue-50 to-amber-50">
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
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}}
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight"
            >
              Our <span className="text-amber-600">Services</span>
            </motion.h1>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }}}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
            >
              We provide comprehensive solutions to help startups thrive and succeed in their journey.
            </motion.p>
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

        {/* Why Choose BuilddSpace Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-amber-600">BuilddSpace</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The ultimate ecosystem for startups to innovate, grow, and succeed
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Accelerated Growth",
                  description: "10x faster startup development with proven methodologies and expert guidance",
                  color: "from-purple-500 to-indigo-600"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Expert Network",
                  description: "Connect with 100+ mentors, investors, and successful entrepreneurs",
                  color: "from-blue-500 to-cyan-600"
                },
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Proven Success",
                  description: "95% success rate with $50M+ total funding raised by our startups",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: <Lightbulb className="w-12 h-12" />,
                  title: "Innovation First",
                  description: "Cutting-edge resources and AI-powered tools for modern startups",
                  color: "from-amber-500 to-orange-600"
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mb-6 mx-auto text-white`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{benefit.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 mb-12"
            >
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { icon: <Briefcase className="w-8 h-8" />, title: "Professional Workspace", description: "Modern office facilities" },
                  { icon: <Users className="w-8 h-8" />, title: "Expert Mentors", description: "Industry guidance" },
                  { icon: <Clock className="w-8 h-8" />, title: "24/7 Access", description: "Round-the-clock availability" },
                  { icon: <Star className="w-8 h-8" />, title: "Premium Support", description: "Dedicated assistance" }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto text-white">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/builddspace/contact')}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Journey →
              </motion.button>
              
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-20 bg-white">
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
                className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      🚀 Startup Incubation
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
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    <h4 className="text-xl font-bold text-purple-600 mb-4">Program Outcomes</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">95%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">$2M+</div>
                        <div className="text-sm text-gray-600">Avg Funding</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">6</div>
                        <div className="text-sm text-gray-600">Months Duration</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">50+</div>
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
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-blue-600 mb-4">Support Services</h4>
                      <div className="space-y-3">
                        {[
                          { service: "Market Research", description: "In-depth analysis of target market and competition" },
                          { service: "Business Planning", description: "Comprehensive business model and strategy development" },
                          { service: "Financial Modeling", description: "Revenue projections and financial planning" },
                          { service: "Pitch Deck Creation", description: "Investor-ready presentation materials" },
                          { service: "Team Building", description: "Recruitment and organizational structure guidance" },
                          { service: "Legal Compliance", description: "Company registration and regulatory requirements" }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-blue-50 rounded-xl p-4">
                            <h5 className="font-semibold text-blue-700 mb-1">{item.service}</h5>
                            <p className="text-sm text-gray-600">{item.description}</p>
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
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200"
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
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                    <h4 className="text-xl font-bold text-green-600 mb-4">Workspace Options</h4>
                    <div className="space-y-4">
                      {[
                        { type: "Hot Desk", features: ["Flexible seating", "Common areas", "WiFi included"] },
                        { type: "Dedicated Desk", features: ["Reserved desk", "Storage space", "Meeting room access"] },
                        { type: "Private Office", features: ["Fully enclosed space", "Customizable layout", "Enhanced privacy", "Personal climate control"] }
                      ].map((option, idx) => (
                        <div key={idx} className="bg-green-50 rounded-xl p-4">
                          <div className="mb-2">
                            <h5 className="font-semibold text-green-700">{option.type}</h5>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {option.features.map((feature, fidx) => (
                              <li key={fidx} className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
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
                  onClick={() => window.open('https://register.medinitechnologies.in/', '_blank')}
                >
                  Register Now
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default ServicesComponent;
