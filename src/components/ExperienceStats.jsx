import React, { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaBookOpen, FaUsers, FaSmile } from 'react-icons/fa';

const stats = [
  {
    icon: <FaCalendarAlt className="text-pink-700 text-3xl mb-2" />,
    label: 'Years Of Excellence',
    value: 25,
    suffix: '+',
  },
  {
    icon: <FaBookOpen className="text-pink-700 text-3xl mb-2" />,
    label: 'Menu Options',
    value: 250,
    suffix: '+',
  },
  {
    icon: <FaUsers className="text-pink-700 text-3xl mb-2" />,
    label: 'Staff',
    value: 340,
    suffix: '',
  },
  {
    icon: <FaSmile className="text-pink-700 text-3xl mb-2" />,
    label: 'Happy Foodies',
    value: 125000,
    suffix: '',
    displayValue: '125',
  },
];

function useCountUp(target, duration = 1200, format) {
  const [count, setCount] = useState(0);
  const start = useRef(null);

  useEffect(() => {
    let raf;
    function step(timestamp) {
      if (!start.current) start.current = timestamp;
      const progress = Math.min((timestamp - start.current) / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  if (format) return format(count);
  return count;
}

function ExperienceStats() {
  return (
    <section className="w-full py-12 px-4 bg-white font-opensans">
      <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-8 uppercase tracking-wider">Experience....</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          let display;
          if (stat.label === 'Happy Foodies') {
            // Show K for thousands
            display = useCountUp(125, 1200, (v) => `${v}K`);
          } else {
            display = useCountUp(stat.value, 1200);
          }
          return (
            <div
              key={stat.label}
              className={`relative bg-white rounded-xl border border-gray-200 shadow-md p-8 flex flex-col items-start transition-all duration-300 group hover:shadow-xl font-opensans`}
            >
              {stat.icon}
              <div className="text-gray-800 text-lg font-semibold mb-1 font-opensans">{stat.label}</div>
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-end font-opensans">
                {display}
                <span className="ml-1 text-2xl text-gray-700 font-opensans">{stat.suffix}</span>
              </div>
              {/* Underline for Menu Options */}
              {stat.label === 'Menu Options' && (
                <div className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-pink-600 to-pink-400 rounded-b-xl" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ExperienceStats;
 