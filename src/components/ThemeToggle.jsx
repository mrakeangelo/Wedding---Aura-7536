import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-6 right-6 z-40"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        className="glass-morphism rounded-full p-3 shadow-lg"
      >
        <div className="relative w-6 h-6">
          <motion.div
            animate={{ 
              rotate: isDarkMode ? 180 : 0,
              scale: isDarkMode ? 0 : 1
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <SafeIcon 
              icon={FiSun} 
              className="w-6 h-6 text-yellow-500" 
            />
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: isDarkMode ? 0 : -180,
              scale: isDarkMode ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <SafeIcon 
              icon={FiMoon} 
              className="w-6 h-6 text-purple-400" 
            />
          </motion.div>
        </div>
      </motion.button>
      
      <div className="mt-2 text-center">
        <p className="font-geometric text-xs text-gray-500 dark:text-gray-400 tracking-wide">
          {isDarkMode ? 'Moonlight' : 'Sunrise'}
        </p>
      </div>
    </motion.div>
  );
};

export default ThemeToggle;