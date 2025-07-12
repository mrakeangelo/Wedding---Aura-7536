import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGift, FiHeart, FiSun, FiMoon, FiFeather, FiStar } = FiIcons;

const Registry = () => {
  const offerings = [
    {
      title: "Crystal Healing Set",
      description: "Sacred stones for our shared meditation practice",
      icon: FiStar,
      price: "$88",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Meditation Cushions",
      description: "Comfortable seating for our morning rituals",
      icon: FiSun,
      price: "$120",
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Essential Oil Diffuser",
      description: "To fill our home with healing aromas",
      icon: FiFeather,
      price: "$65",
      color: "from-green-400 to-blue-400"
    },
    {
      title: "Yoga Retreat Fund",
      description: "Supporting our spiritual journey together",
      icon: FiHeart,
      price: "$200",
      color: "from-pink-400 to-red-400"
    },
    {
      title: "Singing Bowl Set",
      description: "To create sacred sound in our space",
      icon: FiMoon,
      price: "$150",
      color: "from-indigo-400 to-purple-400"
    },
    {
      title: "Organic Garden Fund",
      description: "To grow our own healing herbs and vegetables",
      icon: FiGift,
      price: "$75",
      color: "from-green-400 to-teal-400"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-spiritual text-4xl sm:text-5xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
            Sacred Offerings
          </h2>
          <p className="font-geometric text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
            If you feel called to contribute to our sacred space, these offerings will help us create a home filled with love and light
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="intention-card p-6 rounded-2xl glow-on-hover group"
            >
              <div className="text-center space-y-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${offering.color} shadow-lg`}
                >
                  <SafeIcon 
                    icon={offering.icon} 
                    className="w-8 h-8 text-white" 
                  />
                </motion.div>

                <h3 className="font-spiritual text-xl font-medium text-gray-800 dark:text-white tracking-wider">
                  {offering.title}
                </h3>

                <p className="font-geometric text-gray-600 dark:text-gray-300 text-sm leading-relaxed tracking-wide">
                  {offering.description}
                </p>

                <div className="font-geometric text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {offering.price}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 glass-morphism rounded-lg font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 tracking-wider"
                >
                  Contribute Energy
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="intention-card p-8 rounded-2xl">
            <h3 className="font-spiritual text-2xl font-medium text-gray-800 dark:text-white mb-4 tracking-wider">
              Your Presence is the Greatest Gift
            </h3>
            <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide mb-6">
              We are blessed by your love and support. If you choose to contribute, know that your energy 
              will help us create a sacred space where love can flourish and grow.
            </p>
            <motion.a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-geometric text-sm font-medium tracking-wider transition-all duration-300 glow-on-hover"
            >
              Send Love Energy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;