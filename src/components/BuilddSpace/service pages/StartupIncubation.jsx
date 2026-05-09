import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rocket, Users, Building, Lightbulb, Globe, Zap, Shield, Target, TrendingUp, Award, Cpu, Heart, Briefcase, Clock, Star, ArrowRight, CheckCircle, Brain, Code, DollarSign, Eye, Handshake, BarChart, PieChart, Calendar, MapPin, Mail, Phone, FileText, Search } from "lucide-react";

// Import images
import StartupIncubation from "@/assets/IMAGES/startupincubation.jpg";
import StartupSupport from "@/assets/IMAGES/pexels-yankrukov-7792886.jpg";
import workSpaceImage from "@/assets/IMAGES/kyle-gregory-devaras-6RTM8EsD1T8-unsplash.jpg";

const StartupIncubationPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const incubationFeatures = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Prototyping",
      description: "Transform your ideas into functional MVPs in record time with our expert development team",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Learn from industry veterans and successful entrepreneurs who've been there",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Funding Access",
      description: "Connect with our network of 50+ investors and venture capitalists",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Premium Infrastructure",
      description: "State-of-the-art facilities and cutting-edge technology at your fingertips",
      color: "from-gray-500 to-gray-600"
    }
  ];

  const programStructure = [
    {
      phase: "Phase 1",
      title: "Ideation & Validation",
      duration: "4 Weeks",
      description: "Market research, customer discovery, and idea validation",
      deliverables: ["Market Analysis Report", "Customer Persona", "Value Proposition Canvas"]
    },
    {
      phase: "Phase 2",
      title: "MVP Development",
      duration: "8 Weeks",
      description: "Build your minimum viable product with technical support",
      deliverables: ["Functional MVP", "Technical Architecture", "User Testing Results"]
    },
    {
      phase: "Phase 3",
      title: "Growth & Scaling",
      duration: "4 Weeks",
      description: "Prepare for launch and scale your operations",
      deliverables: ["Growth Strategy", "Pitch Deck", "Investor Relations Plan"]
    }
  ];

  const successMetrics = [
    { metric: "95%", label: "Success Rate", description: "Of startups complete the program successfully" },
    { metric: "$2.5M+", label: "Average Funding", description: "Raised by our incubated startups" },
    { metric: "150+", label: "Startups", description: "Successfully incubated since 2020" },
    { metric: "50+", label: "Mentors", description: "Industry experts and entrepreneurs" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      company: "Series A Startup",
      content: "BuilddSpace's incubation program transformed our idea into a funded startup. The mentorship and resources were invaluable.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, DataSync",
      company: "Seed Stage Startup",
      content: "The structured approach and expert guidance helped us avoid common pitfalls and accelerate our growth.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Watson",
      role: "CTO, GreenTech",
      company: "Pre-Seed Startup",
      content: "Access to the network and technical resources made all the difference. We wouldn't be here without BuilddSpace.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Overlay */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={StartupIncubation}
            alt="Startup Incubation"
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
              Startup
              <span className="text-white font-black">
                {" "}Incubation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 leading-relaxed text-white bg-black/20 backdrop-blur-sm p-6 rounded-2xl"
            >
              Transform your innovative ideas into successful ventures <br/>with our comprehensive 12-week incubation program. <br/>
              Get mentorship, funding, and technical support <br/>to accelerate your startup journey.
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

      
      
      
      
      
      {/* Why Choose Startup Incubation Section */}
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
              Why Choose <span className="text-gray-600">Startup Incubation</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages that set our incubation program apart and accelerate your startup success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Rapid Growth",
                description: "Accelerate your startup journey with proven methodologies and expert guidance",
                features: [
                  "3x faster market entry",
                  "Weekly growth sprints",
                  "Performance metrics tracking",
                  "Agile development support"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Network",
                description: "Connect with industry leaders, mentors, and successful entrepreneurs",
                features: [
                  "50+ industry mentors",
                  "Weekly mentor sessions",
                  "Alumni network access",
                  "Industry-specific guidance"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Funding Access",
                description: "Get direct access to investors and pitch opportunities with our network",
                features: [
                  "50+ VC connections",
                  "Monthly demo days",
                  "Pitch deck refinement",
                  "Term sheet negotiation support"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Structured Program",
                description: "Follow a proven roadmap from idea to launch with clear milestones",
                features: [
                  "12-week intensive program",
                  "Clear KPIs and milestones",
                  "Weekly progress reviews",
                  "Customized growth plans"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Premium Resources",
                description: "Access state-of-the-art facilities, tools, and technology infrastructure",
                features: [
                  "Free office space for 6 months",
                  "Cutting-edge development tools",
                  "Cloud credits ($10,000 value)",
                  "Legal and accounting support"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Success Track Record",
                description: "Join 150+ successful startups that have graduated from our program",
                features: [
                  "95% program completion rate",
                  "$2.5M+ average funding raised",
                  "30+ acquisitions and IPOs",
                  "Global expansion support"
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
              Everything You Need to <span className="text-gray-600">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources and support systems to ensure your startup thrives in every aspect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Technical Support",
                description: "Expert development team and cutting-edge tools",
                items: [
                  "Full-stack development team",
                  "DevOps and cloud infrastructure",
                  "UI/UX design experts",
                  "QA and testing support"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Business Strategy",
                description: "Strategic guidance for sustainable growth",
                items: [
                  "Market entry strategies",
                  "Competitive analysis",
                  "Business model optimization",
                  "Go-to-market planning"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Financial Services",
                description: "Complete financial management and planning",
                items: [
                  "CFO advisory services",
                  "Financial modeling",
                  "Investment readiness",
                  "Cash flow optimization"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Building",
                description: "Build and scale your dream team",
                items: [
                  "Talent acquisition support",
                  "HR and legal compliance",
                  "Team culture development",
                  "Leadership training"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Marketing & Sales",
                description: "Growth hacking and customer acquisition",
                items: [
                  "Digital marketing strategies",
                  "Brand development",
                  "Sales funnel optimization",
                  "Customer analytics"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Legal & Compliance",
                description: "Navigate legal complexities with confidence",
                items: [
                  "Company registration",
                  "IP protection",
                  "Contract drafting",
                  "Regulatory compliance"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Expansion",
                description: "Scale your startup internationally",
                items: [
                  "Market entry strategies",
                  "International partnerships",
                  "Cross-cultural training",
                  "Global logistics support"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Wellness & Support",
                description: "Founder mental health and work-life balance",
                items: [
                  "Mental health resources",
                  "Peer support groups",
                  "Work-life balance coaching",
                  "Stress management programs"
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
              <h3 className="text-2xl font-bold mb-4">All-Inclusive Support Package</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Unlike other programs that charge extra for services, our incubation includes everything you need to succeed - no hidden fees, no surprises.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "No Equity Required",
                  "All Resources Included", 
                  "24/7 Support",
                  "Lifetime Network Access"
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
              Service <span className="text-gray-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive advantages that make our incubation program the perfect launchpad for your startup
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
                    title: "Accelerated Time to Market",
                    description: "Reduce your launch timeline by 60% with our proven methodologies and expert guidance",
                    icon: <Rocket className="w-8 h-8 text-white" />,
                    color: "from-gray-600 to-gray-700",
                    stat: "60% Faster"
                  },
                  {
                    title: "Increased Funding Success",
                    description: "85% of our graduates secure funding within 6 months of program completion",
                    icon: <DollarSign className="w-8 h-8 text-white" />,
                    color: "from-gray-500 to-gray-600",
                    stat: "85% Success"
                  },
                  {
                    title: "Expert Mentor Network",
                    description: "Access 50+ industry experts who provide personalized guidance and insights",
                    icon: <Users className="w-8 h-8 text-white" />,
                    color: "from-gray-600 to-gray-700",
                    stat: "50+ Mentors"
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
                    title: "Premium Infrastructure",
                    description: "State-of-the-art facilities",
                    icon: <Building className="w-6 h-6" />
                  },
                  {
                    title: "Strategic Partnerships",
                    description: "Connect with investors",
                    icon: <Handshake className="w-6 h-6" />
                  },
                  {
                    title: "Long-term Support",
                    description: "Lifetime alumni access",
                    icon: <Award className="w-6 h-6" />
                  },
                  {
                    title: "Global Network",
                    description: "Worldwide connections",
                    icon: <Globe className="w-6 h-6" />
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
                    alt="Startup Incubation Benefits"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Success Metrics */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-1">150+</div>
                  <div className="text-sm text-gray-600 font-medium">Startups</div>
                  <div className="text-xs text-gray-500">Successfully Incubated</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-6 shadow-xl text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">$2.5M+</div>
                  <div className="text-sm font-medium">Average Funding</div>
                  <div className="text-xs opacity-90">Per Startup</div>
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
                  onClick={() => navigate('/builddspace/contact')}
                  className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Your Journey
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Application Process Section */}
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
              Application <span className="text-gray-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our program in 4 simple steps and start your startup journey today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Fill out our online application form with your startup details and team information",
                icon: <FileText className="w-8 h-8" />,
                color: "from-gray-600 to-gray-700",
                time: "5 minutes"
              },
              {
                step: "02", 
                title: "Initial Screening",
                description: "Our team reviews your application and assesses fit for the program",
                icon: <Search className="w-8 h-8" />,
                color: "from-gray-500 to-gray-600",
                time: "3-5 days"
              },
              {
                step: "03",
                title: "Interview Round",
                description: "Meet with our program directors to discuss your vision and goals",
                icon: <Users className="w-8 h-8" />,
                color: "from-gray-600 to-gray-700", 
                time: "30 minutes"
              },
              {
                step: "04",
                title: "Final Selection",
                description: "Receive acceptance and join our next cohort of innovative startups",
                icon: <Award className="w-8 h-8" />,
                color: "from-gray-500 to-gray-600",
                time: "2-3 days"
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
              Ready to Transform Your Idea?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Join our next cohort and take the first step towards building a successful startup
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://register.medinitechnologies.in/', '_blank')}
                className="px-8 py-4 bg-white text-gray-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30 flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StartupIncubationPage;
