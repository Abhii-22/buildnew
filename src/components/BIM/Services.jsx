import React from "react"
import { motion } from "framer-motion"

const Services = () => {
  const services = [
    {
      title: "3D Modeling",
      description: "Create detailed 3D models for architectural, structural, and MEP systems",
      icon: "🏗️",
      features: ["Architectural Modeling", "Structural Analysis", "MEP Coordination"]
    },
    {
      title: "Clash Detection",
      description: "Identify and resolve conflicts between different building systems",
      icon: "🔍",
      features: ["System Coordination", "Conflict Resolution", "Quality Assurance"]
    },
    {
      title: "Construction Documentation",
      description: "Generate comprehensive construction documents and drawings",
      icon: "📋",
      features: ["Shop Drawings", "Construction Plans", "As-Built Documentation"]
    },
    {
      title: "Project Management",
      description: "Streamline project workflows and improve collaboration",
      icon: "📊",
      features: ["Workflow Optimization", "Team Collaboration", "Progress Tracking"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            BIM Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Building Information Modeling solutions to enhance your construction projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 