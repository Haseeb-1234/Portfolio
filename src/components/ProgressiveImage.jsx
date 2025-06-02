// src/components/ProgressiveImage.js
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgressiveImage = ({ src, placeholder, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <div ref={imgRef} className="relative">
      {/* Placeholder image */}
      {!loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`absolute inset-0 ${className}`}
        >
          <div className="w-full h-full bg-gray-700 animate-pulse rounded-lg" />
          {placeholder && (
            <img 
              src={placeholder} 
              alt={`${alt} placeholder`} 
              className="w-full h-full object-cover blur-sm opacity-50"
            />
          )}
        </motion.div>
      )}
      
      {/* Main image */}
      {inView && (
        <motion.img
          src={src}
          alt={alt}
          className={`${className} ${!loaded ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default ProgressiveImage;