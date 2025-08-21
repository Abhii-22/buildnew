import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Startup Incubation at Buildspace?",
      answer:
        "It is a structured program that supports early-stage startups by providing mentorship, resources, infrastructure, and networking opportunities.",
    },
    {
      question: "What services are provided in the incubation program?",
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
      question: "Is funding guaranteed in the program?",
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
        "The incubation program typically runs for 6–9 months, depending on the startup stage.",
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
      {/* FAQ Section */}
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

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              className="w-28 h-1 bg-amber-500 mx-auto mb-6 origin-left"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message or drop by for a coffee.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Us",
                  content: "connect@medini.in",
                  link: "mailto:connect@medini.in",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call Us",
                  content: "+91 9900081006",
                  link: "tel:9900081006",
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Visit Us",
                  content:
                    "#89, 18th main, 15th Cross, MRCR Layout, Vijayanagar, Bangalore",
                  link: "https://maps.google.com",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-start p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition group border border-amber-100"
                >
                  <div className="p-3 rounded-full bg-amber-100 text-amber-600 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.a>
              ))}
              <div className="p-6 bg-gradient-to-r from-amber-50 to-white rounded-xl border border-amber-100">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center mb-3">
                  <Clock className="w-5 h-5 mr-2 text-amber-600" />
                  Studio Hours
                </h3>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:30 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-8"
            >

              <div className="rounded-xl overflow-hidden shadow-md border border-amber-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.020175255245!2d77.52923427845927!3d12.970560754713853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df2b6f61611%3A0xc7ac8e95d96813ea!2s18th%20Main%20Rd%2C%20MRCR%20Layout%2C%20Stage%202%2C%20Vijayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1755167406001!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-[350px] border-0"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
