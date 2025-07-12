import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiMoon, FiSun, FiHeart } = FiIcons;

const Vows = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('vows');
      if (element) {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollProgress(progress);
        
        if (progress > 0.7) {
          setIsUnlocked(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMoonPhase = () => {
    const phases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
    const phaseIndex = Math.floor(scrollProgress * phases.length);
    return phases[phaseIndex] || phases[0];
  };

  return (
    <section id="vows" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-4xl">{getMoonPhase()}</span>
            <h2 className="font-spiritual text-4xl sm:text-5xl font-medium text-gray-800 dark:text-white tracking-wider">
              Our Sacred Vows
            </h2>
            <span className="text-4xl">{getMoonPhase()}</span>
          </div>
          <p className="font-geometric text-lg text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
            Promises written in stardust, unlocked by your presence
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress indicator */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full bg-gray-200 dark:bg-gray-700 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full origin-top"
              style={{ scaleY: scrollProgress }}
            />
          </div>

          <div className="space-y-16">
            {/* Sarah's Vows */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isUnlocked ? 1 : 0.3, x: 0 }}
              transition={{ duration: 1 }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                {isUnlocked ? (
                  <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
                ) : (
                  <SafeIcon icon={FiLock} className="w-6 h-6 text-white" />
                )}
              </div>
              
              <div className="intention-card p-8 rounded-2xl ml-6">
                <h3 className="font-spiritual text-2xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
                  Sarah's Promise
                </h3>
                {isUnlocked ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="space-y-4"
                  >
                    <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
                      "Michael, you are the frequency that harmonizes with my soul. I promise to walk beside you 
                      through every season of our journey, to hold space for your dreams, and to love you with 
                      the infinite energy of the universe."
                    </p>
                    <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
                      "I vow to be your partner in growth, your companion in stillness, and your greatest supporter 
                      in all that you choose to become."
                    </p>
                  </motion.div>
                ) : (
                  <p className="font-geometric text-gray-400 dark:text-gray-500 italic tracking-wide">
                    Scroll to unlock the sacred words...
                  </p>
                )}
              </div>
            </motion.div>

            {/* Michael's Vows */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isUnlocked ? 1 : 0.3, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative pr-8 text-right"
            >
              <div className="absolute right-0 top-0 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                {isUnlocked ? (
                  <SafeIcon icon={FiSun} className="w-6 h-6 text-white" />
                ) : (
                  <SafeIcon icon={FiLock} className="w-6 h-6 text-white" />
                )}
              </div>
              
              <div className="intention-card p-8 rounded-2xl mr-6">
                <h3 className="font-spiritual text-2xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
                  Michael's Promise
                </h3>
                {isUnlocked ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="space-y-4"
                  >
                    <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
                      "Sarah, in your eyes I found my home, in your heart I found my peace. I promise to cherish 
                      the sacred light within you, to honor your wisdom, and to love you with every breath 
                      that moves through me."
                    </p>
                    <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
                      "I vow to be your anchor in storms, your celebration in joy, and your eternal companion 
                      in this beautiful dance of life."
                    </p>
                  </motion.div>
                ) : (
                  <p className="font-geometric text-gray-400 dark:text-gray-500 italic tracking-wide">
                    Continue scrolling to reveal...
                  </p>
                )}
              </div>
            </motion.div>

            {/* Unity Vow */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isUnlocked ? 1 : 0.3, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                {isUnlocked ? (
                  <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
                ) : (
                  <SafeIcon icon={FiLock} className="w-6 h-6 text-white" />
                )}
              </div>
              
              <div className="intention-card p-8 rounded-2xl mx-6 text-center">
                <h3 className="font-spiritual text-2xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
                  Our Unity Promise
                </h3>
                {isUnlocked ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  >
                    <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide text-lg">
                      "Together, we are more than the sum of our parts. We are a new constellation in the cosmos, 
                      a sacred geometry of love that will illuminate the path for others. May our union be a blessing 
                      to all who witness it, and may our love ripple out into the world, healing and transforming 
                      everything it touches."
                    </p>
                  </motion.div>
                ) : (
                  <p className="font-geometric text-gray-400 dark:text-gray-500 italic tracking-wide">
                    The final promise awaits...
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vows;