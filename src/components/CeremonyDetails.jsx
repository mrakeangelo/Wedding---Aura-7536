import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiMapPin, FiHeart, FiGift } = FiIcons;

const CeremonyDetails = () => {
  const details = [
    {
      title: "Sacred Time",
      icon: FiClock,
      info: "4:00 PM - 10:00 PM",
      description: "Ceremony begins at golden hour, reception under the stars"
    },
    {
      title: "Sacred Space",
      icon: FiMapPin,
      info: "Red Rock Crossing, Sedona",
      description: "Where earth meets sky in perfect harmony"
    },
    {
      title: "Sacred Attire",
      icon: FiHeart,
      info: "Earth Tones & Flowing Fabrics",
      description: "Dress in colors that honor the natural world"
    },
    {
      title: "Sacred Offerings",
      icon: FiGift,
      info: "Crystals, Sage, Open Hearts",
      description: "Bring intentions of love and positive energy"
    }
  ];

  return (
    <section id="details" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-spiritual text-4xl sm:text-5xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
            Ceremony Details
          </h2>
          <p className="font-geometric text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Sacred intentions for our blessed union
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="intention-card p-8 rounded-2xl glow-on-hover"
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                >
                  <SafeIcon 
                    icon={detail.icon} 
                    className="w-6 h-6 text-white" 
                  />
                </motion.div>

                <div className="space-y-3">
                  <h3 className="font-spiritual text-xl font-medium text-gray-800 dark:text-white tracking-wider">
                    {detail.title}
                  </h3>
                  
                  <p className="font-geometric text-lg font-medium text-purple-600 dark:text-purple-400">
                    {detail.info}
                  </p>
                  
                  <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
                    {detail.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="intention-card p-8 rounded-2xl">
            <h3 className="font-spiritual text-2xl font-medium text-gray-800 dark:text-white mb-4 tracking-wider">
              Journey to Sacred Space
            </h3>
            <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide mb-6">
              Red Rock Crossing is located in Sedona's mystical landscape. Parking is available at the trailhead.
              A short 10-minute walk through nature leads to our ceremony space.
            </p>
            <motion.a
              href="https://maps.google.com/directions"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-3 glass-morphism rounded-full font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 tracking-wider"
            >
              Get Directions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeremonyDetails;