import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const taglines = [
  "Where Every Bite Tells a Fresh Tale",
  "Taaza Tastes, Timeless Traditions",
  "A Royal Taste of India",
  "Flavors Born in Palaces, Served on Plates",
  "Desi, Delicious, Delivered Daily",
  "Old Spices, New Stories",
  "Fresh Food. Desi Soul.",
  "From Our Kitchen to Your Celebration"
];

function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < taglines[currentTagline].length) {
        timeout = setTimeout(() => {
          setDisplayed(taglines[currentTagline].slice(0, displayed.length + 1));
        }, 40);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayed('');
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, currentTagline]);

  return (
    <div
      className="relative bg-white h-screen mt-20 w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-xs bg-white/80 border border-gray-200 rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col items-center max-w-3xl max-h-2xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-pink-700 text-lg md:text-xl font-semibold mb-2 mt-2 tracking-widest drop-shadow-lg"
          >
            Welcome to Taj Taazagi Catters
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-gray-900 text-4xl md:text-7xl font-bold mb-4 drop-shadow-[0_2px_24px_rgba(255,0,128,0.1)]"
            style={{
              textShadow: '0 4px 32px #fbcfe8, 0 1.5px 0 #fff',
            }}
          >
            Taste the Purity, Love the Flavor!
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-pink-600 text-xl md:text-2xl font-mono min-h-[2.5rem] mb-4 h-10 flex items-center justify-center"
            style={{letterSpacing: '0.01em'}}
          >
            {displayed}
            <span className="animate-pulse">{typing ? '|' : ''}</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-gray-700 text-lg md:text-2xl font-medium mb-8 max-w-2xl drop-shadow-lg"
          >
            We are the top vegetarian wedding caterer in Agra. We have completed over 2,000+ weddings, supported by a professional team of 340 members.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            href="#"
            className="inline-flex items-center px-8 py-3 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg border-2 border-white/30 hover:bg-pink-500 transition-colors focus:outline-none focus:ring-4 focus:ring-pink-300/50"
          >
            Explore
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
