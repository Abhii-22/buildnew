import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare } from "lucide-react";

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does BuilddSpace offer?",
      answer:
        "BuilddSpace offers a comprehensive range of architectural and construction services including architectural design, interior design, construction management, renovation services, sustainable design, project planning, collaborative design, and building inspection & analysis. Our integrated approach ensures seamless execution from concept to completion."
    },
    {
      question: "How long does a typical construction project take?",
      answer:
        "The timeline for construction projects varies significantly based on scope, complexity, and scale. Small renovation projects might take 2-3 months, while larger commercial or residential projects can take 6-18 months or more. During our initial consultation, we'll provide a detailed timeline specific to your project requirements."
    },
    {
      question: "How do you ensure projects stay within budget?",
      answer:
        "Budget management is a core aspect of our process. We implement several strategies including detailed initial cost estimation, regular budget reviews, value engineering when necessary, transparent communication about potential cost impacts, and a proactive approach to identifying and addressing potential issues before they affect the budget."
    },
    {
      question: "Do you handle all necessary permits and approvals?",
      answer:
        "Yes, we manage the entire permitting process as part of our services. This includes preparing and submitting all required documentation, coordinating with local authorities, addressing any feedback or requirements from review boards, and ensuring all regulatory compliance is met before and during construction."
    },
  ];

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! Your message has been sent successfully. We'll contact you shortly to discuss your project.",
    });

    // Reset form after successful submission
    if (formStatus.success) {
      setFormState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our architectural and construction services and how we bring your vision to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex justify-between items-center p-6 rounded-lg text-left transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              {activeIndex === index && (
                <div className="bg-gray-100 border border-gray-300 p-6 rounded-b-lg mt-1">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Get in Touch Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact information */}
                <div>
                  <div className="mb-12">
                    <div className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full mb-4">
                      Get In Touch
                    </div>
                    {/* <h2 className="text-5xl font-extrabold text-gray-900 mb-4 bg-amber-100 p-4 rounded-lg shadow-md">
                      Let's Discuss Your Design Project
                    </h2> */}

                    <p className="text-gray-600 text-lg mb-6">
                      Contact information
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        icon: <Mail className="w-5 h-5" />,
                        title: "Email Us",
                        content: "connect@medini.in",
                        link: "mailto:connect@medini.in",
                      },
                      {
                        icon: <Phone className="w-5 h-5" />,
                        title: "Call Us",
                        content: "+91 9900081006 ",
                        link: "tel:9900081006 ",
                      },
                      {
                        icon: <MapPin className="w-5 h-5" />,
                        title: "Visit Our Company",
                        content: "No. 2943/E,3rd Floor, 40, Service Rd, opposite Shri Maruthi Mandira, Hosahalli Extension, Vijayanagar, Bengaluru, Karnataka 560040",
                        link: "https://maps.google.com",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="p-3 rounded-full bg-amber-50 text-amber-600 mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                          <a
                            href={item.link}
                            className="text-gray-600 hover:text-amber-600 transition-colors"
                          >
                            {item.content}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Studio hours */}
                  <div className="mt-12 bg-amber-50 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-amber-600" />
                      Studio Hours
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex justify-between">
                        <span>Monday - Saturday</span>
                        <span>9:00 AM - 8:30 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-xl p-8 border border-gray-100"
                >
                  {formStatus.submitted && (
                    <div
                      className={`mb-6 p-4 rounded-lg ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                    >
                      <div className="flex items-center">
                        {formStatus.success ? (
                          <CheckCircle className="w-5 h-5 mr-2" />
                        ) : (
                          <AlertCircle className="w-5 h-5 mr-2" />
                        )}
                        <p>{formStatus.message}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="+1 (555) 987-6543"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formState.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="">Select Project Type</option>
                          <option value="residential-interior">Residential Interior</option>
                          <option value="commercial-interior">Commercial Interior</option>
                          <option value="exterior-design">Exterior Design</option>
                          <option value="bim-modeling">BIM Modeling</option>
                          <option value="3d-visualization">3D Visualization</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Tell us about your project, goals, timeline, and budget..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Prefer a quick chat? Call us at +1 (555) 987-6543
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FaqSection;
