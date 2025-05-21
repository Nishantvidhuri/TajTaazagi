import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://tajtaazagicatters.com/assets/logoCircle-fP27se6m.png" 
              alt="Taj Taazagi Catters Logo"
              className="w-16 h-16 rounded-full shadow-lg border-2 border-white/20 bg-white/10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors">Home</a>
            <a href="#" className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors">About</a>
            <a href="#" className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors">Services</a>
            <div className="relative group">
              <button className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors flex items-center focus:outline-none">
                Menu
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                <a href="#" className="block px-4 py-3 text-gray-900 text-sm hover:bg-pink-50 transition-colors rounded-t-xl">Wedding Menu</a>
                <a href="#" className="block px-4 py-3 text-gray-900 text-sm hover:bg-pink-50 transition-colors">Anniversary Menu</a>
                <a href="#" className="block px-4 py-3 text-gray-900 text-sm hover:bg-pink-50 transition-colors">Birthday Menu</a>
                <a href="#" className="block px-4 py-3 text-gray-900 text-sm hover:bg-pink-50 transition-colors">Corporate Events</a>
                <a href="#" className="block px-4 py-3 text-gray-900 text-sm hover:bg-pink-50 transition-colors">Special Occasions</a>
                <a href="#" className="block px-4 py-3 text-gray-900 text-sm hover:bg-pink-50 transition-colors rounded-b-xl">Seasonal Specials</a>
              </div>
            </div>
            <a href="#" className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors">Gallery</a>
            <a href="#" className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors">Blog</a>
            <a href="#" className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors">Contact</a>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#" 
              className="bg-pink-600 text-white px-7 py-2.5 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-500 transition-all duration-300 hover:shadow-pink-200/50 hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-pink-600 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="bg-white/90 backdrop-blur-xl border-t border-gray-200/50 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#" className="block px-4 py-3 text-gray-900 hover:bg-pink-50 rounded-lg transition-colors">Home</a>
            <a href="#" className="block px-4 py-3 text-gray-900 hover:bg-pink-50 rounded-lg transition-colors">About</a>
            <a href="#" className="block px-4 py-3 text-gray-900 hover:bg-pink-50 rounded-lg transition-colors">Services</a>
            <a href="#" className="block px-4 py-3 text-gray-900 hover:bg-pink-50 rounded-lg transition-colors">Menu</a>
            <a href="#" className="block px-4 py-3 text-gray-900 hover:bg-pink-50 rounded-lg transition-colors">Gallery</a>
            <a href="#" className="block px-4 py-3 text-gray-900 hover:bg-pink-50 rounded-lg transition-colors">Blog</a>
            <a href="#" className="block px-4 py-3 text-gray-900 hover:bg-pink-50 rounded-lg transition-colors">Contact</a>
            <a 
              href="#" 
              className="block px-4 py-3 bg-pink-600 text-white rounded-lg text-center font-semibold hover:bg-pink-500 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
