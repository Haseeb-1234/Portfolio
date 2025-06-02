// src/components/Hero.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.text-gradient');
    textElements.forEach(el => {
      el.classList.add('fade-in');
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
              <span className="block text-gray-300">Hi, I'm</span>
              <span className="block text-primary mt-2">Haseeb Ahsan</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-400 mb-6">
              Full Stack <span className="text-primary">Software Engineer</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl slide-up">
              I build exceptional digital experiences that are fast, accessible, 
              visually appealing, and responsive. Even if you don't know what those words mean.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 bg-primary text-dark font-medium rounded-lg shadow-lg hover:bg-primary-dark transition-colors slide-up"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors slide-up"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto hero-illustration">
              <div className="absolute inset-0 bg-primary rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-dark-light border border-gray-700 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                <div className="bg-dark h-8 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block bg-primary/20 p-4 rounded-full mb-4">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                      </div>
                      <div className="text-primary font-mono text-lg">developer-portfolio.jsx</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;