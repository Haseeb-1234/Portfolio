// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-emerald-400">&lt;</span>
              <span className="text-gray-100">DevPortfolio</span>
              <span className="text-emerald-400">/&gt;</span>
            </div>
            <p className="mt-2 text-gray-400 max-w-md">
              Building exceptional digital experiences with clean code and creative solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-6 mb-6">
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaDribbble className="w-6 h-6" />
              </motion.a>
            </div>
            
            <div className="text-gray-500 text-sm">
              &copy; {currentYear} DevPortfolio. All rights reserved.
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>
            Designed and built with <span className="text-emerald-400">React</span>,{' '}
            <span className="text-emerald-400">Tailwind CSS</span>, and{' '}
            <span className="text-emerald-400">Framer Motion</span>
          </p>
          <p className="mt-2">
            Inspired by modern design trends and crafted with attention to detail.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;