import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiMail, FiUsers, FiHeart, FiCheck } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: '',
    dietary: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center intention-card p-12 rounded-2xl"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <SafeIcon icon={FiCheck} className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="font-spiritual text-3xl font-medium text-gray-800 dark:text-white mb-4 tracking-wider">
              Your Energy Has Been Received
            </h2>
            <p className="font-geometric text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
              Thank you for sharing your intentions with us. We're grateful to have you as part of our sacred celebration.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-spiritual text-4xl sm:text-5xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
            Share Your Intention
          </h2>
          <p className="font-geometric text-lg text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide">
            Let us know if you'll be joining us for this sacred celebration
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="intention-card p-8 rounded-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                Full Name
              </label>
              <div className="relative">
                <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 glass-morphism rounded-lg font-geometric text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  placeholder="Your sacred name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                Email
              </label>
              <div className="relative">
                <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 glass-morphism rounded-lg font-geometric text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
              Will you be joining us?
            </label>
            <div className="grid grid-cols-2 gap-4">
              {['Yes, with joy', 'Cannot attend'].map((option) => (
                <motion.label
                  key={option}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center justify-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    formData.attending === option
                      ? 'bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-400'
                      : 'glass-morphism border-2 border-transparent hover:border-purple-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value={option}
                    checked={formData.attending === option}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <SafeIcon icon={FiHeart} className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                    {option}
                  </span>
                </motion.label>
              ))}
            </div>
          </div>

          {formData.attending === 'Yes, with joy' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                  Number of Guests
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUsers} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 glass-morphism rounded-lg font-geometric text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  >
                    <option value="1">Just me</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                  Dietary Preferences
                </label>
                <input
                  type="text"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-morphism rounded-lg font-geometric text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  placeholder="Vegetarian, vegan, allergies, etc."
                />
              </div>
            </motion.div>
          )}

          <div className="space-y-2">
            <label className="font-geometric text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
              Message of Love (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 glass-morphism rounded-lg font-geometric text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none"
              placeholder="Share your blessings and intentions for our union..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-lg font-geometric text-sm font-medium tracking-wider transition-all duration-500 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white glow-on-hover'
            }`}
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mx-auto"
              />
            ) : (
              'Send Sacred Intention'
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVP;