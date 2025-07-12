import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiPause, FiVolume2, FiVolumeX } = FiIcons;

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef(null);

  // Using a gentle ambient sound URL (you would replace this with your actual audio file)
  const audioSrc = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <div className="glass-morphism rounded-full p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            <SafeIcon 
              icon={isPlaying ? FiPause : FiPlay} 
              className="w-5 h-5" 
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
          >
            <SafeIcon 
              icon={isMuted ? FiVolumeX : FiVolume2} 
              className="w-4 h-4" 
            />
          </motion.button>

          <div className="hidden sm:block">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 h-1 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="mt-2 text-center">
        <p className="font-geometric text-xs text-gray-500 dark:text-gray-400 tracking-wide">
          528Hz Healing Frequency
        </p>
      </div>
    </motion.div>
  );
};

export default AudioPlayer;