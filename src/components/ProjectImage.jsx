// src/components/ProjectImage.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectImage = ({ src, alt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.03 }}
        className="cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full"
            >
              <img 
                src={src} 
                alt={alt} 
                className="w-full max-h-[80vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full"
                onClick={() => setIsExpanded(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectImage;