import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUtensils, FaUsers, FaAward, FaCalendarAlt } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUtensils className="text-4xl text-pink-600" />,
    value: 1000,
    suffix: '+',
    label: 'Events Catered',
    description: 'Successfully delivered exceptional catering services for various events'
  },
  {
    icon: <FaUsers className="text-4xl text-pink-600" />,
    value: 50,
    suffix: '+',
    label: 'Expert Chefs',
    description: 'Professional culinary team with extensive experience'
  },
  {
    icon: <FaAward className="text-4xl text-pink-600" />,
    value: 25,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'Decades of delivering premium catering services'
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-pink-600" />,
    value: 365,
    suffix: '',
    label: 'Days Available',
    description: 'Ready to serve you any day of the year'
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

function CountUp({ end, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="text-4xl font-bold text-gray-900">
      {count}{suffix}
    </span>
  );
}

function Experience() {
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
            <span className="relative px-4 py-2 bg-pink-100/80 backdrop-blur-sm text-pink-600 rounded-full text-sm font-semibold border border-pink-200 hover:bg-pink-200/80 transition-colors duration-300">
              Our Experience
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Years of <span className="text-pink-600">Excellence</span> in Catering
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            With decades of experience in the catering industry, we've perfected the art of creating memorable culinary experiences.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glassy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl group-hover:from-pink-50/30 group-hover:to-white/10 transition-all duration-300"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-50/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-pink-100 group-hover:border-pink-200 group-hover:bg-pink-50">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <motion.div 
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-pink-600 text-white text-sm font-bold flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative space-y-2">
                <div className="flex items-baseline gap-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xl font-semibold text-pink-600 group-hover:text-pink-700 transition-colors duration-300">{stat.label}</p>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="mt-16 bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Experience?</h3>
              <ul className="space-y-4">
                {[
                  'Extensive experience in handling events of all sizes',
                  'Professional team of experienced chefs and staff',
                  'Commitment to quality and customer satisfaction',
                  'Flexible and customized catering solutions'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 group/item"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-pink-600 mt-2 group-hover/item:scale-150 transition-transform duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <motion.div 
                className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
                  alt="Catering Experience"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <CountUp end={25} suffix="+" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center px-8 py-4 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-500 transition-all duration-300 hover:shadow-pink-200/50 hover:-translate-y-0.5 overflow-hidden group"
          >
            <span className="relative z-10">Book Your Event</span>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
            <motion.svg 
              className="ml-2 w-5 h-5 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience; 