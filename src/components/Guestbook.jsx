import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFeather, FiHeart, FiStar } = FiIcons;

const Guestbook = () => {
  const [intention, setIntention] = useState('');
  const [name, setName] = useState('');
  const [intentions, setIntentions] = useState([
    {
      id: 1,
      name: "Emma & David",
      message: "May your love be a beacon of light that guides others toward their own sacred unions. Blessed be.",
      timestamp: "2 days ago"
    },
    {
      id: 2,
      name: "Luna Rodriguez",
      message: "Witnessing your love story unfold has been pure magic. May your journey together be filled with infinite blessings.",
      timestamp: "1 week ago"
    },
    {
      id: 3,
      name: "The Johnson Family",
      message: "Two beautiful souls becoming one radiant light. We are honored to celebrate this sacred moment with you.",
      timestamp: "2 weeks ago"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (intention.trim() && name.trim()) {
      const newIntention = {
        id: intentions.length + 1,
        name: name.trim(),
        message: intention.trim(),
        timestamp: "Just now"
      };
      setIntentions([newIntention, ...intentions]);
      setIntention('');
      setName('');
    }
  };

  const maxLength = 280;
  const remainingChars = maxLength - intention.length;

  return (
    <section id="guestbook" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-spiritual text-4xl sm:text-5xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
            Leave an Intention
          </h2>
          <p className="font-geometric text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Share your blessings, wisdom, and love energy with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Intention Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="intention-card p-8 rounded-2xl space-y-6">
              <div className="space-y-2">
                <label className="font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 glass-morphism rounded-lg font-geometric text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  placeholder="Your sacred name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                  Your Intention
                </label>
                <div className="relative">
                  <textarea
                    value={intention}
                    onChange={(e) => setIntention(e.target.value)}
                    maxLength={maxLength}
                    rows="4"
                    className="w-full px-4 py-3 glass-morphism rounded-lg font-geometric text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none"
                    placeholder="Share your blessing, wisdom, or love energy..."
                    required
                  />
                  <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                    {remainingChars} characters remaining
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-geometric text-sm font-medium tracking-wider transition-all duration-300 glow-on-hover flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiFeather} className="w-5 h-5" />
                <span>Send Sacred Intention</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Intentions Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-spiritual text-2xl font-medium text-gray-800 dark:text-white tracking-wider text-center">
              Sacred Intentions
            </h3>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {intentions.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="intention-card p-6 rounded-xl"
                >
                  <div className="flex items-start space-x-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mt-1"
                    >
                      <SafeIcon icon={FiHeart} className="w-4 h-4 text-white" />
                    </motion.div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-geometric text-sm font-medium text-gray-800 dark:text-white">
                          {item.name}
                        </span>
                        <span className="font-geometric text-xs text-gray-500 dark:text-gray-400">
                          {item.timestamp}
                        </span>
                      </div>
                      
                      <p className="font-geometric text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;