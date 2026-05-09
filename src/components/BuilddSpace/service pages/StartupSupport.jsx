import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rocket, Users, Building, Lightbulb, Globe, Zap, Shield, Target, TrendingUp, Award, Cpu, Heart, Briefcase, Clock, Star, ArrowRight, CheckCircle, Brain, Code, DollarSign, Eye, Handshake, BarChart, PieChart, Calendar, MapPin, Mail, Phone, FileText, Search, TrendingUpIcon, UserCheck, MessageSquare } from "lucide-react";

// Import images
import StartupSupport from "@/assets/IMAGES/pexels-yankrukov-7792886.jpg";
import StartupIncubation from "@/assets/IMAGES/campaign-creators-gMsnXqILjp4-unsplash (3).jpg";
import workSpaceImage from "@/assets/IMAGES/kyle-gregory-devaras-6RTM8EsD1T8-unsplash.jpg";

const StartupSupportPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const supportFeatures = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Market Research",
      description: "In-depth analysis of target market, competition, and industry trends to validate your business idea",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Business Planning",
      description: "Comprehensive business model development and strategic planning for sustainable growth",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: <TrendingUpIcon className="w-8 h-8" />,
      title: "Growth Strategy",
      description: "Data-driven insights and actionable strategies to scale your startup effectively",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Team Building",
      description: "Guidance on recruitment, organizational structure, and team development",
      color: "from-gray-500 to-gray-600"
    }
  ];

  const supportServices = [
    {
      service: "Market Validation",
      description: "Test your business idea with real customers before investing resources",
      deliverables: ["Customer Interviews", "Market Size Analysis", "Competitive Landscape", "Validation Report"],
      duration: "2-4 Weeks"
    },
    {
      service: "Business Model Design",
      description: "Create a sustainable and scalable business model tailored to your industry",
      deliverables: ["Revenue Streams", "Cost Structure", "Value Proposition", "Business Canvas"],
      duration: "3-6 Weeks"
    },
    {
      service: "Financial Planning",
      description: "Develop comprehensive financial models and funding strategies",
      deliverables: ["Revenue Projections", "Cost Analysis", "Funding Requirements", "Investor Pitch"],
      duration: "4-8 Weeks"
    },
    {
      service: "Go-to-Market Strategy",
      description: "Plan and execute successful market entry and customer acquisition",
      deliverables: ["Marketing Plan", "Sales Strategy", "Launch Timeline", "KPI Dashboard"],
      duration: "6-12 Weeks"
    }
  ];

  const successMetrics = [
    { metric: "85%", label: "Idea Validation Rate", description: "Of ideas successfully validated" },
    { metric: "60%", label: "Funding Success", description: "Secure funding within 6 months" },
    { metric: "200+", label: "Startups Supported", description: "Across various industries" },
    { metric: "30+", label: "Expert Advisors", description: "Industry specialists and mentors" }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "Founder, FinTech Solutions",
      company: "Pre-Seed Startup",
      content: "The market validation service helped us pivot our idea and find product-market fit. We wouldn't have succeeded without their guidance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "CEO, HealthTech Innovations",
      company: "Seed Stage Startup",
      content: "Their business planning expertise was invaluable. We now have a clear roadmap and secured our first round of funding.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "CTO, EduTech Platform",
      company: "Early Stage Startup",
      content: "The go-to-market strategy they developed helped us acquire our first 1000 customers in just 3 months.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Overlay */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={StartupSupport}
            alt="Startup Support"
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
                {" "}Support
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 leading-relaxed text-white bg-black/20 backdrop-blur-sm p-6 rounded-2xl"
            >
              Expert guidance and resources to validate your idea,<br/> build a strong foundation, and accelerate your startup journey. <br/>
              From concept to launch, we're here to support you every step of the way.
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-center"
          >
            <div className="text-sm mb-2">Scroll to explore</div>
            <ArrowRight className="w-6 h-6 mx-auto transform rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      




      {/* Why Choose Startup Support Section */}
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
              Why Choose <span className="text-gray-600">Startup Support</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages that set our support services apart and accelerate your startup success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Focused Guidance",
                description: "Get personalized attention and tailored strategies for your specific startup needs",
                features: [
                  "1-on-1 mentoring sessions",
                  "Customized growth plans",
                  "Personalized roadmaps",
                  "Dedicated success manager"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Network",
                description: "Connect with industry leaders, mentors, and successful entrepreneurs",
                features: [
                  "30+ industry mentors",
                  "Weekly expert sessions",
                  "Peer learning groups",
                  "Industry-specific guidance"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Growth Acceleration",
                description: "Fast-track your startup growth with proven methodologies and expert insights",
                features: [
                  "Growth hacking strategies",
                  "Market expansion support",
                  "Scaling frameworks",
                  "Performance optimization"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation Support",
                description: "Transform your ideas into viable business models with our innovation framework",
                features: [
                  "Idea validation workshops",
                  "Business model design",
                  "Innovation consulting",
                  "Product-market fit analysis"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Risk Management",
                description: "Navigate challenges confidently with our comprehensive risk mitigation strategies",
                features: [
                  "Business risk assessment",
                  "Legal compliance support",
                  "Financial planning",
                  "Crisis management"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Proven Success",
                description: "Join 200+ startups that have achieved their goals with our support",
                features: [
                  "85% success rate",
                  "$1.8M+ avg funding raised",
                  "50+ success stories",
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
              Everything You Need to <span className="text-gray-600">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources and support systems to ensure your startup thrives in every aspect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Strategy Support",
                description: "Expert guidance for business planning and execution",
                items: [
                  "Business model design",
                  "Growth strategy planning",
                  "Competitive analysis",
                  "Market positioning"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Financial Guidance",
                description: "Complete financial planning and funding support",
                items: [
                  "Financial modeling",
                  "Funding strategies",
                  "Investor readiness",
                  "Cash flow management"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Development",
                description: "Build and scale your effective startup team",
                items: [
                  "Team building strategies",
                  "Leadership development",
                  "Hiring guidance",
                  "Culture development"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Marketing Support",
                description: "Growth strategies for customer acquisition",
                items: [
                  "Digital marketing",
                  "Brand development",
                  "Customer acquisition",
                  "Growth hacking"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Legal & Compliance",
                description: "Navigate legal requirements with confidence",
                items: [
                  "Business registration",
                  "Compliance guidance",
                  "Contract support",
                  "IP protection"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: "Analytics & Insights",
                description: "Data-driven decision making and optimization",
                items: [
                  "Performance tracking",
                  "Market analytics",
                  "Customer insights",
                  "ROI optimization"
                ],
                color: "from-gray-500 to-gray-600"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Network Access",
                description: "Connect with the right people and opportunities",
                items: [
                  "Investor connections",
                  "Partner network",
                  "Industry events",
                  "Alumni community"
                ],
                color: "from-gray-600 to-gray-700"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Wellness Support",
                description: "Founder mental health and work-life balance",
                items: [
                  "Mental health resources",
                  "Stress management",
                  "Peer support groups",
                  "Work-life balance"
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
              <h3 className="text-2xl font-bold mb-4">Flexible Support Options</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Choose the support level that matches your startup's current needs and growth stage
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Pay-as-you-go",
                  "Monthly Retainers", 
                  "Project-based",
                  "Custom Packages"
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
              Discover the comprehensive advantages that make our support services the perfect partner for your startup journey
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
                    title: "Expert Guidance",
                    description: "Get personalized advice from industry experts who understand your challenges",
                    icon: <Users className="w-8 h-8 text-white" />,
                    color: "from-gray-600 to-gray-700",
                    stat: "30+ Experts"
                  },
                  {
                    title: "Flexible Engagement",
                    description: "Choose support options that fit your schedule, budget, and specific needs",
                    icon: <Target className="w-8 h-8 text-white" />,
                    color: "from-gray-500 to-gray-600",
                    stat: "Custom Plans"
                  },
                  {
                    title: "Proven Results",
                    description: "85% of our supported startups achieve their growth and funding goals",
                    icon: <TrendingUp className="w-8 h-8 text-white" />,
                    color: "from-gray-600 to-gray-700",
                    stat: "85% Success"
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
                    title: "Quick Start",
                    description: "Begin immediately with no long-term commitments",
                    icon: <Rocket className="w-6 h-6" />
                  },
                  {
                    title: "Cost Effective",
                    description: "Affordable pricing with clear ROI",
                    icon: <DollarSign className="w-6 h-6" />
                  },
                  {
                    title: "Scalable Support",
                    description: "Grow your support as your startup grows",
                    icon: <BarChart className="w-6 h-6" />
                  },
                  {
                    title: "Network Access",
                    description: "Connect with investors and partners",
                    icon: <Handshake className="w-6 h-6" />
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
                    src={StartupSupport}
                    alt="Startup Support Benefits"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Success Metrics */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-1">200+</div>
                  <div className="text-sm text-gray-600 font-medium">Startups</div>
                  <div className="text-xs text-gray-500">Successfully Supported</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-6 shadow-xl text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">$1.8M+</div>
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
                  onClick={() => window.open('https://register.medinitechnologies.in/', '_blank')}
                  className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get Support Today
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
              Join our support program in 4 simple steps and start your startup journey today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Fill out our online application form with your startup details and support needs",
                icon: <FileText className="w-8 h-8" />,
                color: "from-gray-600 to-gray-700",
                time: "5 minutes"
              },
              {
                step: "02", 
                title: "Initial Review",
                description: "Our team reviews your application and assesses how we can best support your startup",
                icon: <Search className="w-8 h-8" />,
                color: "from-gray-500 to-gray-600",
                time: "1-2 days"
              },
              {
                step: "03",
                title: "Consultation Call",
                description: "Meet with our support specialists to discuss your goals and create a custom plan",
                icon: <Users className="w-8 h-8" />,
                color: "from-gray-600 to-gray-700", 
                time: "30 minutes"
              },
              {
                step: "04",
                title: "Begin Support",
                description: "Start your personalized support sessions and accelerate your startup growth",
                icon: <Rocket className="w-8 h-8" />,
                color: "from-gray-500 to-gray-600",
                time: "Immediate"
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Schedule your free consultation and take the first step towards building a successful startup
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://register.medinitechnologies.in/', '_blank')}
                className="px-8 py-4 bg-white text-gray-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30 flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StartupSupportPage;
