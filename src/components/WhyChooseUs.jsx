import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaUsers, FaAward, FaHeart, FaLeaf, FaClock } from 'react-icons/fa';

const features = [
  {
    icon: <FaUtensils className="text-4xl text-pink-600" />,
    title: 'Authentic Taste',
    description: 'Experience the rich flavors of traditional cuisine, crafted with authentic recipes passed down through generations.',
    stats: '100+ Traditional Recipes'
  },
  {
    icon: <FaUsers className="text-4xl text-pink-600" />,
    title: 'Expert Team',
    description: 'Our professional team of chefs and staff ensures impeccable service and attention to detail at every event.',
    stats: '50+ Expert Chefs'
  },
  {
    icon: <FaAward className="text-4xl text-pink-600" />,
    title: 'Premium Quality',
    description: 'We use only the finest ingredients and maintain the highest standards of quality in every dish we serve.',
    stats: '25+ Years Excellence'
  },
  {
    icon: <FaHeart className="text-4xl text-pink-600" />,
    title: 'Customer Satisfaction',
    description: 'Your happiness is our priority. We go above and beyond to ensure your complete satisfaction.',
    stats: '98% Happy Clients'
  },
  {
    icon: <FaLeaf className="text-4xl text-pink-600" />,
    title: 'Fresh Ingredients',
    description: 'We source the freshest, highest-quality ingredients to create memorable culinary experiences.',
    stats: '100% Fresh Food'
  },
  {
    icon: <FaClock className="text-4xl text-pink-600" />,
    title: 'Timely Service',
    description: 'Punctuality is our promise. We ensure your event runs smoothly with perfect timing.',
    stats: '24/7 Support'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Experience <span className="text-pink-600">Excellence</span> in Every Bite
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            We take pride in delivering exceptional catering services that make your special moments truly memorable.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-pink-600 text-white text-sm font-bold flex items-center justify-center">
                  +
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              {/* Stats */}
              <div className="flex items-center gap-2 text-pink-600 font-semibold">
                <span className="w-8 h-0.5 bg-pink-600"></span>
                {feature.stats}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-500 transition-all duration-300 hover:shadow-pink-200/50 hover:-translate-y-0.5"
          >
            Book Your Event
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs; 