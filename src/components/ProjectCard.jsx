import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProgressiveImage from './ProgressiveImage';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.05,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="project-card group" 
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ willChange: 'transform' }}
    >
      <div className="h-full bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 group-hover:border-emerald-500/30 transition-all">
        <div className="h-48 relative overflow-hidden">
          <ProgressiveImage
            src={project.image}
            placeholder={project.placeholder}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/70 transition-opacity"
          >
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-emerald-500 text-gray-900 rounded-lg font-medium hover:bg-emerald-400 transition-colors"
              >
                View Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500/10 transition-colors"
              >
                Source Code
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <span className="px-3 py-1 bg-gray-700 text-xs text-emerald-400 rounded-full capitalize">
              {project.category}
            </span>
          </div>

          <p className="text-gray-400 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(ProjectCard);
