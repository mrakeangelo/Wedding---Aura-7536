import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop',
      alt: 'Meditation retreat where we met',
      title: 'Our First Meeting'
    },
    {
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=800&fit=crop',
      alt: 'Mountain hiking together',
      title: 'Adventures Together'
    },
    {
      src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop',
      alt: 'Sunset engagement',
      title: 'The Proposal'
    },
    {
      src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=800&fit=crop',
      alt: 'Red rocks of Sedona',
      title: 'Our Sacred Space'
    },
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop',
      alt: 'Couple meditating',
      title: 'Finding Balance'
    },
    {
      src: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=800&fit=crop',
      alt: 'Crystal healing session',
      title: 'Healing Together'
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-spiritual text-4xl sm:text-5xl font-medium text-gray-800 dark:text-white mb-6 tracking-wider">
            Moments in Light
          </h2>
          <p className="font-geometric text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Captured memories of our journey to this sacred moment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="crystal-frame rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-geometric text-white text-sm font-medium tracking-wide">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </button>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                  <h3 className="font-geometric text-white text-lg font-medium tracking-wide">
                    {images[selectedImage].title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;