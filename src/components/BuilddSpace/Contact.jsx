import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-white via-amber-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
              Get in <span className="text-amber-600">Touch</span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              className="w-28 h-1 bg-amber-500 mx-auto mb-6 origin-left"
            />
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Have questions or ready to start your next project? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                    "MRCR Layout, MC Layout, Vijayanagar, Bengaluru, Karnataka 560040",
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.389242819478!2d77.5365649822572!3d12.970908380531256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddc28f1fc77%3A0x55fded85a4ed8fdf!2sXGCP%2B9J3%2C%20MRCR%20Layout%2C%20Stage%202%2C%20Vijayanagar%2C%20Bengaluru%2C%20Karnataka%20560040!5e1!3m2!1sen!2sin!4v1769143272678!5m2!1sen!2sin" 
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-[450px] border-0"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
