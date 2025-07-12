import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SoulStory from './components/SoulStory';
import CeremonyDetails from './components/CeremonyDetails';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import ChakraAltar from './components/ChakraAltar';
import AudioPlayer from './components/AudioPlayer';
import Countdown from './components/Countdown';
import Vows from './components/Vows';
import Registry from './components/Registry';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-1000 ${isDarkMode ? 'dark bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-aura-mist via-aura-white to-aura-lavender'}`}>
        <div className="aura-background"></div>
        <Navigation />
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        <AudioPlayer />
        
        <Routes>
          <Route path="/" element={
            <motion.main 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Hero />
              <SoulStory />
              <Countdown />
              <CeremonyDetails />
              <Gallery />
              <RSVP />
              <Vows />
              <Registry />
              <Guestbook />
            </motion.main>
          } />
          <Route path="/chakra-altar" element={<ChakraAltar />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;