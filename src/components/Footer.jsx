import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiMoon } = FiIcons;

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center space-x-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <SafeIcon icon={FiStar} className="w-6 h-6 text-purple-400" />
            </motion.div>
            <SafeIcon icon={FiHeart} className="w-8 h-8 text-pink-400" />
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <SafeIcon icon={FiMoon} className="w-6 h-6 text-purple-400" />
            </motion.div>
          </div>

          <div className="space-y-2">
            <p className="font-geometric text-gray-600 dark:text-gray-300 text-sm tracking-wide">
              With infinite love and gratitude
            </p>
            <p className="font-spiritual text-lg text-gray-800 dark:text-white tracking-wider">
              Sarah & Michael
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="font-geometric text-xs text-gray-500 dark:text-gray-400 tracking-wide">
              Aura – A Spiritual Wedding Template by{' '}
              <span className="text-purple-500 dark:text-purple-400 font-medium">
                Mrake Agency
              </span>
            </p>
          </div>

          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity 
            }}
            className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full mx-auto blur-sm"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;