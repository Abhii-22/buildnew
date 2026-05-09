import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rocket, Users, Building, Lightbulb, Globe, Zap, Shield, Target, TrendingUp, Award, Cpu, Heart, Briefcase, Clock, Star, ArrowRight, CheckCircle, Brain, Code, DollarSign, Eye, Handshake, BarChart, PieChart, Calendar, MapPin, Mail, Phone, Wifi, Coffee, Car, Printer, Monitor, Sofa, Lock, Map, Video, Headphones, Settings, FileText, Search } from "lucide-react";

// Import images
import workSpaceImage from "@/assets/IMAGES/workspace.jpg";
import StartupIncubation from "@/assets/IMAGES/campaign-creators-gMsnXqILjp4-unsplash (3).jpg";
import StartupSupport from "@/assets/IMAGES/pexels-yankrukov-7792886.jpg";

const WorkSpacePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('dedicated');

  const workspaceFeatures = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed Internet",
      description: "Lightning-fast fiber optic internet with backup connections to keep you productive",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Premium Amenities",
      description: "Unlimited coffee, tea, snacks, and fully equipped kitchen facilities",
      color: "from-gray-500 to-gray-600"
    },
    { 
      icon: <Monitor className="w-8 h-8" />,
      title: "Modern Equipment",
      description: "State-of-the-art meeting rooms, presentation equipment, and printing facilities",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "24/7 Access",
      description: "Secure access round the clock with advanced security systems",
      color: "from-gray-500 to-gray-600"
    }
  ];

  const workspacePlans = [
    {
      id: 'hot-desk',
      name: 'Hot Desk',
      price: '199',
      period: 'month',
      description: 'Flexible workspace with access to any available desk',
      features: [
        'Access to any available desk',
        'High-speed WiFi',
        'Coffee & tea',
        'Meeting room access (5 hours/month)',
        'Printing credits (50 pages/month)',
        'Community events access'
      ],
      popular: false
    },
    {
      id: 'dedicated',
      name: 'Dedicated Desk',
      price: '399',
      period: 'month',
      description: 'Your own reserved desk with personal storage',
      features: [
        'Personal dedicated desk',
        'Lockable storage',
        'High-speed WiFi',
        'Unlimited coffee & tea',
        'Meeting room access (20 hours/month)',
        'Printing credits (200 pages/month)',
        'Mail handling service',
        'Community events access'
      ],
      popular: true
    },
    {
      id: 'private-office',
      name: 'Private Office',
      price: '899',
      period: 'month',
      description: 'Fully private office space for your team',
      features: [
        'Private locked office',
        'Custom furniture setup',
        'Dedicated internet line',
        'Unlimited meeting room access',
        'Unlimited printing',
        'Premium mail handling',
        '24/7 access',
        'Climate control',
        'Team events access'
      ],
      popular: false
    }
  ];

  const amenities = [
    { icon: <Coffee className="w-6 h-6" />, name: "Coffee & Tea Bar" },
    { icon: <Monitor className="w-6 h-6" />, name: "Meeting Rooms" },
    { icon: <Printer className="w-6 h-6" />, name: "Printing & Scanning" },
    { icon: <Video className="w-6 h-6" />, name: "Video Conference" },
    { icon: <Headphones className="w-6 h-6" />, name: "Phone Booths" },
    { icon: <Car className="w-6 h-6" />, name: "Parking Available" },
    { icon: <Sofa className="w-6 h-6" />, name: "Lounge Areas" },
    { icon: <Settings className="w-6 h-6" />, name: "IT Support" }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Freelance Developer",
      company: "Independent",
      content: "The dedicated desk option gives me the perfect balance of structure and flexibility. The community is amazing and the amenities are top-notch.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      role: "CEO, TechStart",
      company: "Startup Team of 5",
      content: "Our private office has become the perfect headquarters for our growing team. The professional environment and excellent facilities help us stay productive.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "James Chen",
      role: "Digital Nomad",
      company: "Remote Consultant",
      content: "As a digital nomad, having access to professional workspace while traveling is crucial. This space exceeds all my expectations with reliable internet and great community.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const successMetrics = [
    { metric: "500+", label: "Members", description: "Active professionals" },
    { metric: "50+", label: "Companies", description: "Housed in our space" },
    { metric: "24/7", label: "Access", description: "Round the clock availability" },
    { metric: "99%", label: "Satisfaction", description: "Member satisfaction rate" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Overlay */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={workSpaceImage}
            alt="Work Space"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-left text-white px-4 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            >
              Work
              <span className="text-white font-black">
                {" "}Space
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 leading-relaxed text-white bg-black/20 backdrop-blur-sm p-6 rounded-2xl"
            >
              Premium flexible workspaces designed for productivity,<br/> collaboration, and growth. 
              From hot desks to private offices,<br/> we have the perfect solution for your business needs.<br/>
              Experience state-of-the-art facilities, high-speed internet,<br/> and a vibrant community of professionals.<br/>
              Scale your business in an environment built for success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://register.medinitechnologies.in/', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Workspace Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gray-600">Workspace</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages that set our workspace apart and elevate your productivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wifi className="w-8 h-8" />,
                title: "Premium Infrastructure",
                description: "State-of-the-art facilities designed for maximum productivity and comfort",
                features: [
                  "High-speed fiber internet",
                  "Modern ergonomic furniture",
                  "24/7 secure access",
                  "Climate controlled environment"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Vibrant Community",
                description: "Connect with like-minded professionals and grow your network",
                features: [
                  "200+ active members",
                  "Weekly networking events",
                  "Industry-specific groups",
                  "Collaborative projects"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Prime Location",
                description: "Strategically located in the heart of the business district",
                features: [
                  "Central business district",
                  "Easy transport access",
                  "Surrounded by amenities",
                  "Parking available"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Coffee className="w-8 h-8" />,
                title: "All-Inclusive Amenities",
                description: "Everything you need to work comfortably and efficiently",
                features: [
                  "Unlimited coffee & tea",
                  "Fully equipped kitchen",
                  "Meeting rooms included",
                  "Printing & scanning"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Flexible Plans",
                description: "Choose the perfect workspace solution for your needs",
                features: [
                  "Hot desk options",
                  "Dedicated desks",
                  "Private offices",
                  "Custom configurations"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Proven Excellence",
                description: "Join hundreds of satisfied professionals who thrive here",
                features: [
                  "95% member satisfaction",
                  "500+ companies served",
                  "10+ years of excellence",
                  "Industry recognition"
                ],
                color: "from-gray-500 to-gray-600"
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mb-6 mx-auto text-white`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed mb-6">{benefit.description}</p>
                <div className="space-y-3">
                  {benefit.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Need to Succeed Section */}
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
              Everything You Need to <span className="text-gray-600">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive facilities and services to ensure your workspace experience is exceptional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Technology Hub",
                description: "Cutting-edge tech infrastructure for modern work",
                items: [
                  "High-speed internet",
                  "Video conferencing",
                  "Smart meeting rooms",
                  "IT support"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Coffee className="w-8 h-8" />,
                title: "Refreshment Zone",
                description: "Stay energized with premium beverages and snacks",
                items: [
                  "Gourmet coffee bar",
                  "Healthy snacks",
                  "Filtered water",
                  "Mini fridge access"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration Spaces",
                description: "Areas designed for teamwork and creativity",
                items: [
                  "Open lounge areas",
                  "Brainstorming rooms",
                  "Phone booths",
                  "Event spaces"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Printer className="w-8 h-8" />,
                title: "Business Services",
                description: "Professional services to support your work",
                items: [
                  "Printing & scanning",
                  "Mail handling",
                  "Reception services",
                  "Document storage"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Car className="w-8 h-8" />,
                title: "Transportation",
                description: "Convenient access and parking solutions",
                items: [
                  "Secure parking",
                  "Bike storage",
                  "EV charging stations",
                  "Shuttle service"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Security & Safety",
                description: "24/7 security for peace of mind",
                items: [
                  "24/7 surveillance",
                  "Key card access",
                  "Secure storage",
                  "Emergency protocols"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Wellness Features",
                description: "Promoting health and work-life balance",
                items: [
                  "Standing desks",
                  "Quiet zones",
                  "Natural lighting",
                  "Plants & greenery"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Support Services",
                description: "Dedicated staff to assist your needs",
                items: [
                  "Community manager",
                  "IT assistance",
                  "Cleaning services",
                  "Maintenance support"
                ],
                color: "from-gray-500 to-gray-600"
              }
            ].map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${resource.color} rounded-full flex items-center justify-center mb-4 mx-auto text-white`}>
                  {resource.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{resource.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed mb-4 text-sm">{resource.description}</p>
                <div className="space-y-2">
                  {resource.items.map((item, iidx) => (
                    <div key={iidx} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-gray-600 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">All-Inclusive Membership</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                One simple price gives you access to all facilities, amenities, and services
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "No Hidden Fees",
                  "All Utilities Included", 
                  "Flexible Terms",
                  "Instant Access"
                ].map((benefit, bidx) => (
                  <div key={bidx} className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Workspace <span className="text-gray-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive advantages that make our workspace the perfect choice for professionals
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Main Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Top 3 Featured Benefits */}
              <div className="space-y-6">
                {[
                  {
                    title: "Productivity Boost",
                    description: "Work in an environment designed for focus and efficiency",
                    icon: <Target className="w-8 h-8 text-white" />,
                    color: "from-gray-600 to-gray-700",
                    stat: "40% Boost"
                  },
                  {
                    title: "Cost Effective",
                    description: "Get premium facilities at a fraction of traditional office costs",
                    icon: <DollarSign className="w-8 h-8 text-white" />,
                    color: "from-gray-500 to-gray-600",
                    stat: "60% Savings"
                  },
                  {
                    title: "Network Growth",
                    description: "Connect with professionals who can help grow your business",
                    icon: <Users className="w-8 h-8 text-white" />,
                    color: "from-gray-600 to-gray-700",
                    stat: "200+ Members"
                  }
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                          <span className={`px-3 py-1 bg-gradient-to-r ${benefit.color} text-white text-sm font-semibold rounded-full`}>
                            {benefit.stat}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Flexible Hours",
                    description: "24/7 access to work on your schedule",
                    icon: <Clock className="w-6 h-6" />
                  },
                  {
                    title: "No Commitment",
                    description: "Month-to-month plans with no long-term contracts",
                    icon: <Calendar className="w-6 h-6" />
                  },
                  {
                    title: "Premium Location",
                    description: "Work in the heart of the business district",
                    icon: <MapPin className="w-6 h-6" />
                  },
                  {
                    title: "All Inclusive",
                    description: "Utilities, internet, and amenities included",
                    icon: <CheckCircle className="w-6 h-6" />
                  }
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
                        {benefit.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                    </div>
                    <p className="text-xs text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Enhanced Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <img
                    src={workSpaceImage}
                    alt="Workspace Benefits"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Success Metrics */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Companies</div>
                  <div className="text-xs text-gray-500">Working Here</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-6 shadow-xl text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">95%</div>
                  <div className="text-sm font-medium">Member</div>
                  <div className="text-xs opacity-90">Satisfaction</div>
                </div>
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://register.medinitechnologies.in/', '_blank')}
                  className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Book a Tour
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
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
              Application <span className="text-gray-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apply for our workspace membership in 4 simple steps and start working better today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Fill out our online application form with your workspace requirements",
                icon: <FileText className="w-8 h-8" />,
                color: "from-gray-600 to-gray-700",
                time: "5 minutes"
              },
              {
                step: "02", 
                title: "Initial Review",
                description: "Our team reviews your application and assesses the best workspace solution",
                icon: <Search className="w-8 h-8" />,
                color: "from-gray-500 to-gray-600",
                time: "1-2 days"
              },
              {
                step: "03",
                title: "Facility Tour",
                description: "Visit our workspace, experience the environment, and meet our community",
                icon: <MapPin className="w-8 h-8" />,
                color: "from-gray-600 to-gray-700", 
                time: "30 minutes"
              },
              {
                step: "04",
                title: "Begin Membership",
                description: "Complete registration and get immediate access to your new workspace",
                icon: <Rocket className="w-8 h-8" />,
                color: "from-gray-500 to-gray-600",
                time: "Same day"
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.step}
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto text-white`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">{step.description}</p>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <Clock className="w-3 h-3" />
                      {step.time}
                    </span>
                  </div>
                </div>

                {/* Connection Arrow */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-400">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

                  </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your Perfect Workspace?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Schedule a tour and experience our premium facilities firsthand
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://register.medinitechnologies.in/', '_blank')}
                className="px-8 py-4 bg-white text-gray-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book a Tour
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30 flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Get Free Day Pass
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorkSpacePage;
