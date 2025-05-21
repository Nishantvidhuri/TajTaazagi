import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const services = [
  {
    title: 'Wedding Catering',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description: 'Create unforgettable moments with our exquisite wedding catering services, featuring a perfect blend of traditional and contemporary cuisine.',
    features: ['Custom Menu Planning', 'Professional Service', 'Premium Quality']
  },
  {
    title: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
    description: 'Elevate your corporate gatherings with our professional catering services, designed to impress your clients and team members.',
    features: ['Business Lunch Packages', 'Conference Catering', 'Team Building Events']
  },
  {
    title: 'Birthday Celebrations',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    description: 'Make birthdays special with our customized catering packages, featuring delicious food and impeccable service.',
    features: ['Theme-based Menus', 'Special Decorations', 'Entertainment Options']
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

function ServicesCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setPage(([p]) => [p + 1, 1]);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleFocus = () => setIsPaused(true);
  const handleBlur = () => setIsPaused(false);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const serviceIndex = ((page % services.length) + services.length) % services.length;

  return (
    <section className="relative w-full py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
              Featured Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="text-pink-600">Signature</span> Services
          </motion.h2>
        </div>

        {/* Carousel */}
        <div
          className="relative h-[600px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={serviceIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                {/* Image Side */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-48 sm:h-64 md:h-80 lg:h-full mb-4 lg:mb-0">
                  <img
                    src={services[serviceIndex].image}
                    alt={services[serviceIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center p-8">
                  <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{services[serviceIndex].title}</h3>
                    <p className="text-gray-600 text-lg mb-6">{services[serviceIndex].description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {services[serviceIndex].features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center px-6 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-500 transition-all duration-300 hover:shadow-pink-200/50 hover:-translate-y-0.5"
                    >
                      Learn More
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-lg rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-white transition-colors z-10"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-lg rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-white transition-colors z-10"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage([idx, idx > serviceIndex ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === serviceIndex ? 'bg-pink-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesCarousel; 