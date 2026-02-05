import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
} from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Startup Incubation at Buildspace?",
      answer:
        "It is a structured program that supports early-stage startups by providing mentorship, resources, infrastructure, and networking opportunities.",
    },
    {
      question: "What services are provided in incubation program?",
      answer:
        "Services include workspace, mentorship, seed funding access, business development guidance, legal and financial support, and access to investors.",
    },
    {
      question: "What is Startup Support at Buildspace?",
      answer:
        "Startup Support includes technical, marketing, financial, and legal assistance to help startups grow sustainably.",
    },
    {
      question: "What types of startup support are available?",
      answer:
        "Support includes pitch deck preparation, prototyping, branding, go-to-market strategy, investor connections, and legal compliance.",
    },
    {
      question: "Is funding guaranteed in program?",
      answer:
        "While funding is not guaranteed, we connect startups with investors and provide fundraising guidance.",
    },
    {
      question: "Can I join remotely?",
      answer:
        "Yes, many of our resources, mentorship sessions, and workshops are available virtually.",
    },
    {
      question: "What is the program duration?",
      answer:
        "The incubation program typically runs for 6–9 months, depending on startup stage.",
    },
    {
      question: "Do you provide post-incubation support?",
      answer:
        "Yes, we continue to offer alumni support, networking, and investor connections.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-white via-amber-50 to-white">
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-amber-100 to-white rounded-b-[50%]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              className="w-28 h-1 bg-amber-500 mx-auto mb-6 origin-left"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our startup incubation and support services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md border border-amber-100 hover:shadow-xl transition-all cursor-pointer overflow-hidden"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-base font-semibold text-gray-900 pr-2">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-amber-600" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-gray-600 text-sm"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
