import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiHeart, FiSun } = FiIcons;

const SoulStory = () => {
  const stories = [
    {
      title: "Meeting",
      icon: FiStar,
      description: "Our paths crossed at a meditation retreat in the mountains. In the silence between breaths, we recognized each other's light.",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Awakening",
      icon: FiHeart,
      description: "Through shared intentions and mindful presence, we discovered our frequencies harmonizing into something greater than ourselves.",
      color: "from-green-400 to-blue-400"
    },
    {
      title: "Union",
      icon: FiSun,
      description: "Now we invite you to witness as two souls become one sacred vessel, aligned in purpose and infinite in love.",
      color: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-spiritual text-4xl sm:text-5xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
            Our Soul Story
          </h2>
          <p className="font-geometric text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Every love story is written in the stars, but ours was written in the space between heartbeats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="intention-card p-8 rounded-2xl h-full"
              >
                <div className="text-center space-y-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${story.color} shadow-lg`}
                  >
                    <SafeIcon 
                      icon={story.icon} 
                      className="w-8 h-8 text-white" 
                    />
                  </motion.div>

                  <h3 className="font-spiritual text-2xl font-medium text-gray-800 dark:text-white tracking-wider">
                    {story.title}
                  </h3>

                  <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
                    {story.description}
                  </p>
                </div>

                {/* Floating orb */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 0.8 
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-white/30 to-purple-300/30 blur-sm"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoulStory;