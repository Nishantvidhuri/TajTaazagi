import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Services', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Contact Us', href: '#' }
  ],
  services: [
    { name: 'Wedding Catering', href: '#' },
    { name: 'Corporate Events', href: '#' },
    { name: 'Birthday Parties', href: '#' },
    { name: 'Special Events', href: '#' }
  ],
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Careers', href: '#' }
  ]
};

const socialLinks = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' }
];

const contactInfo = [
  { icon: <FaPhone />, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: <FaEnvelope />, text: 'info@tajtaazagicatters.com', href: 'mailto:info@tajtaazagicatters.com' },
  { icon: <FaMapMarkerAlt />, text: '123 Catering Street, Foodville, FL 12345', href: '#' }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <img src="https://tajtaazagicatters.com/assets/logoCircle-fP27se6m.png" alt="Taj Taazagi Catters" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-gray-900">Taj Taazagi</span>
            </div>
            <p className="text-gray-600">
              Creating unforgettable culinary experiences with passion and excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-colors duration-300 shadow-sm border border-gray-100"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 capitalize">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-pink-600 mt-1">{contact.icon}</span>
                  <a
                    href={contact.href}
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600">Stay updated with our latest events and special offers.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-300 shadow-sm w-full"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition-colors duration-300 shadow-sm w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Taj Taazagi Catters. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-pink-600 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
