import React, { useState } from "react"
import { motion } from "framer-motion"

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "What is Digital Voice Technology?",
      answer: "Digital Voice Technology encompasses various technologies that process, analyze, and enhance human speech. This includes voice recognition, speech-to-text conversion, voice analytics, and digital signal processing to improve communication and productivity."
    },
    {
      question: "How accurate is your speech-to-text conversion?",
      answer: "Our speech-to-text conversion achieves 95%+ accuracy in ideal conditions and 85%+ accuracy in real-world environments with background noise. We use advanced AI models trained on diverse speech patterns and accents."
    },
    {
      question: "Do you support multiple languages?",
      answer: "Yes, we support over 50 languages including English, Hindi, Spanish, French, German, Chinese, Japanese, and many more. Our systems are trained on native speakers for optimal accuracy."
    },
    {
      question: "Can I integrate voice technology into my existing applications?",
      answer: "Absolutely! We provide APIs and SDKs that can be easily integrated into your existing web, mobile, or desktop applications. Our solutions are designed to work seamlessly with various platforms and frameworks."
    },
    {
      question: "What kind of voice analytics do you offer?",
      answer: "Our voice analytics include emotion detection, speaker identification, sentiment analysis, call quality metrics, and performance analytics. These insights help improve customer service and communication effectiveness."
    },
    {
      question: "Is my voice data secure and private?",
      answer: "Yes, we prioritize data security and privacy. All voice data is encrypted, processed securely, and we comply with GDPR and other privacy regulations. We never share or sell your voice data to third parties."
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our digital voice solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className={`text-green-600 text-2xl transition-transform duration-300 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </div>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-green-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Contact our team for personalized assistance.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FaqSection 