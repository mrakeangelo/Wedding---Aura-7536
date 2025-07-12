import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCircle, FiHeart, FiSun, FiMoon, FiStar, FiFeather, FiEye } = FiIcons;

const ChakraAltar = () => {
  const chakras = [
    {
      name: "Root Chakra",
      sanskrit: "Muladhara",
      color: "from-red-600 to-red-400",
      icon: FiCircle,
      meaning: "Our foundation is built on trust, stability, and shared grounding in love.",
      element: "Earth"
    },
    {
      name: "Sacral Chakra",
      sanskrit: "Svadhisthana",
      color: "from-orange-600 to-orange-400",
      icon: FiSun,
      meaning: "Our creativity and passion flow together, creating new possibilities.",
      element: "Water"
    },
    {
      name: "Solar Plexus",
      sanskrit: "Manipura",
      color: "from-yellow-600 to-yellow-400",
      icon: FiStar,
      meaning: "Our individual power combines to create something greater than ourselves.",
      element: "Fire"
    },
    {
      name: "Heart Chakra",
      sanskrit: "Anahata",
      color: "from-green-600 to-green-400",
      icon: FiHeart,
      meaning: "The center of our union, where unconditional love flows freely.",
      element: "Air"
    },
    {
      name: "Throat Chakra",
      sanskrit: "Vishuddha",
      color: "from-blue-600 to-blue-400",
      icon: FiFeather,
      meaning: "We speak our truth with love, communicating from the heart.",
      element: "Space"
    },
    {
      name: "Third Eye",
      sanskrit: "Ajna",
      color: "from-indigo-600 to-indigo-400",
      icon: FiEye,
      meaning: "Our intuition guides us toward our highest good and shared wisdom.",
      element: "Light"
    },
    {
      name: "Crown Chakra",
      sanskrit: "Sahasrara",
      color: "from-purple-600 to-purple-400",
      icon: FiMoon,
      meaning: "Connected to the divine, we are one with the universe and each other.",
      element: "Consciousness"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="font-spiritual text-4xl sm:text-5xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
            Chakra Altar
          </h1>
          <p className="font-geometric text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
            A sacred guide to the energy centers that align our souls in perfect harmony
          </p>
        </motion.div>

        <div className="space-y-12">
          {chakras.map((chakra, index) => (
            <motion.div
              key={chakra.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
            >
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="intention-card p-8 rounded-2xl"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${chakra.color} flex items-center justify-center shadow-lg`}
                    >
                      <SafeIcon 
                        icon={chakra.icon} 
                        className="w-8 h-8 text-white" 
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-spiritual text-2xl font-medium text-gray-800 dark:text-white tracking-wider">
                        {chakra.name}
                      </h3>
                      <p className="font-geometric text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                        {chakra.sanskrit} • {chakra.element}
                      </p>
                    </div>
                  </div>
                  
                  <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
                    {chakra.meaning}
                  </p>
                </motion.div>
              </div>

              <div className="flex-shrink-0">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                  className={`w-32 h-32 rounded-full bg-gradient-to-br ${chakra.color} opacity-30 blur-sm`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="intention-card p-12 rounded-2xl">
            <h3 className="font-spiritual text-3xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
              Sacred Alignment
            </h3>
            <p className="font-geometric text-lg text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide mb-8">
              As we unite in marriage, these energy centers align to create a harmonious flow of love, 
              wisdom, and spiritual connection. Our chakras dance together, creating a new pattern of 
              light that will guide us through our journey as one.
            </p>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 rounded-full mx-auto opacity-60 blur-sm"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChakraAltar;