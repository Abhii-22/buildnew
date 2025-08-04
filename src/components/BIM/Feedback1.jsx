import React from "react"
import { motion } from "framer-motion"

const Feedback1 = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered BIM projects across various sectors"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently high satisfaction rates from our clients"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Expert BIM professionals with years of experience"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and assistance"
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our BIM Success Metrics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for themselves - our track record of excellence in BIM services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-blue-100 mb-6">
              Let us help you achieve the same level of success with your BIM projects.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Feedback1 