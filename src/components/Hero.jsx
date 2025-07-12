import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiSun, FiMoon } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full orb-glow opacity-30"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full orb-glow opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 left-1/2 w-20 h-20 rounded-full orb-glow opacity-25"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="space-y-8"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <SafeIcon 
              icon={FiHeart} 
              className="w-16 h-16 text-purple-400 dark:text-purple-300 mx-auto mb-8" 
            />
          </motion.div>

          <h1 className="font-spiritual text-5xl sm:text-6xl lg:text-7xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
            We <span className="text-purple-600 dark:text-purple-400">Aligned</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="font-geometric text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed tracking-wide"
          >
            Two souls, one frequency. Join us as we celebrate the sacred union of
            <span className="font-medium text-purple-600 dark:text-purple-400"> Sarah & Michael</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12"
          >
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <SafeIcon icon={FiSun} className="w-5 h-5" />
              <span className="font-geometric text-sm tracking-wider">June 21, 2024</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <SafeIcon icon={FiMoon} className="w-5 h-5" />
              <span className="font-geometric text-sm tracking-wider">Sedona, Arizona</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 2.2 }}
            className="mt-12"
          >
            <a
              href="#story"
              className="inline-block px-8 py-4 glass-morphism rounded-full font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-500 tracking-wider glow-on-hover"
            >
              Begin Our Journey
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-400 dark:border-purple-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-400 dark:bg-purple-300 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;