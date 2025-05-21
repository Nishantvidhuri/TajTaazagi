import React from 'react';
import { motion } from 'framer-motion';
import ServicesCarousel from './ServicesCarousel';

const services = [
  {
    title: 'Wedding Event',
    image: 'https://images.unsplash.com/photo-1610173826608-bd1f53a52db1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Make your wedding unforgettable with our premium catering. We create a memorable experience for your guests by pampering their taste buds with exquisite dishes and beautiful presentation.',
  },
  {
    title: 'Corporate Event',
    image: 'https://images.unsplash.com/photo-1587019840487-3de32118bff4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'From business meetings to milestone celebrations, our team delivers customized delicacies and seamless service to make your corporate event unique and successful.',
  },
  {
    title: 'Birthday Party',
    image: 'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      "Celebrate birthdays with joy, excitement, and delicious food. We capture the happiness of your guests and make every birthday a memorable one with our catering expertise.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.7,
      type: 'spring',
    },
  }),
};

function Services() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-pink-700 text-lg font-bold tracking-widest mb-2 text-center uppercase"
        >
          What We Do
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center"
        >
          Premium Catering Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-700 text-lg mb-12 text-center max-w-3xl mx-auto"
        >
          We provide premium catering services for all events, big and small. Our team of professionals will work with you to create a custom menu that fits your needs and budget. Whether you're planning a wedding, corporate event, or private party, we have the experience and expertise to make your event a success.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-pink-700 text-lg font-bold mb-2 uppercase tracking-wide">{service.title}</h4>
                <p className="text-gray-700 text-base flex-1">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-10">
        <a href="#" className="inline-flex items-center px-8 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-500 transition-colors focus:outline-none focus:ring-4 focus:ring-pink-300/50">
          View All Services
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </section>
  );
}

export default ServicesCarousel; 