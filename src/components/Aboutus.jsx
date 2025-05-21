import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaUtensils, FaHeart } from 'react-icons/fa';

const stats = [
  {
    icon: <FaAward className="text-4xl text-pink-600" />,
    value: '25+',
    label: 'Years of Excellence',
    description: 'Crafting unforgettable culinary experiences'
  },
  {
    icon: <FaUsers className="text-4xl text-pink-600" />,
    value: '2000+',
    label: 'Events Catered',
    description: 'Creating memories through food'
  },
  {
    icon: <FaUtensils className="text-4xl text-pink-600" />,
    value: '250+',
    label: 'Menu Options',
    description: 'Diverse culinary offerings'
  },
  {
    icon: <FaHeart className="text-4xl text-pink-600" />,
    value: '98%',
    label: 'Happy Clients',
    description: 'Satisfaction guaranteed'
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

function Aboutus() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Video Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20  z-10"></div>
              <video
                src="/video/video3.mp4"
                className="w-full h-[600px] object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8 z-30">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  {stats.slice(0, 2).map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      variants={fadeInUp}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20"
                    >
                      <div className="flex items-center gap-3">
                        {stat.icon}
                        <div>
                          <div className="text-white text-2xl font-bold">{stat.value}</div>
                          <div className="text-white/80 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
                  Our Story
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                Crafting <span className="text-pink-600">Memorable</span> Moments Through Food
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                For over 25 years, Taj Taazagi Catters has been at the forefront of culinary excellence, 
                blending traditional flavors with modern innovation. Our journey is marked by countless 
                celebrations, each one unique and special.
              </motion.p>
            </div>

            {/* Additional Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.slice(2).map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    {stat.icon}
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-gray-600 mt-1">{stat.label}</div>
                      <div className="text-sm text-gray-500 mt-2">{stat.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-500 transition-all duration-300 hover:shadow-pink-200/50 hover:-translate-y-0.5"
              >
                Discover Our Story
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;

