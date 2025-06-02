
// // src/components/Projects.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// // Import project images
// import ecommerceImage from '../images/ecommerce.jpeg';
// import taskManagerImage from '../images/task-manager.jpg';
// import fitnessTrackerImage from '../images/fitness-tracker.jpg';
// import weatherDashboardImage from '../images/weather-dashboard.jpg';
// import portfolioImage from '../images/portfolio.jpg';
// import socialAnalyticsImage from '../images/social-analytics.jpg';

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
  
//   const filters = [
//     { id: 'all', label: 'All Projects' },
//     { id: 'web', label: 'Web Apps' },
//     { id: 'mobile', label: 'Mobile' },
//     { id: 'design', label: 'Design' }
//   ];
  
//   const projects = [
//     {
//       id: 1,
//       title: 'E-Commerce Platform',
//       category: 'web',
//       description: 'Full-featured online shopping platform with payment integration and admin dashboard.',
//       tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//       image: ecommerceImage
//     },
//     {
//       id: 2,
//       title: 'Task Management App',
//       category: 'web',
//       description: 'Collaborative task management tool with real-time updates and team features.',
//       tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
//       image: taskManagerImage
//     },
//     {
//       id: 3,
//       title: 'Fitness Tracker',
//       category: 'mobile',
//       description: 'Mobile application for tracking workouts, nutrition, and fitness goals.',
//       tags: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
//       image: fitnessTrackerImage
//     },
//     {
//       id: 4,
//       title: 'Weather Dashboard',
//       category: 'web',
//       description: 'Interactive weather visualization tool with location-based forecasts.',
//       tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
//       image: weatherDashboardImage
//     },
//     {
//       id: 5,
//       title: 'Portfolio Website',
//       category: 'design',
//       description: 'Modern portfolio design with smooth animations and responsive layout.',
//       tags: ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframing'],
//       image: portfolioImage
//     },
//     {
//       id: 6,
//       title: 'Social Media Analytics',
//       category: 'web',
//       description: 'Dashboard for tracking and analyzing social media performance metrics.',
//       tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
//       image: socialAnalyticsImage
//     }
//   ];
  
//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);
  
//   return (
//     <section id="projects" className="py-20 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
//             My <span className="text-emerald-400">Projects</span>
//           </h2>
//           <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
//         </motion.div>
        
//         {/* Filter Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-4 mb-12"
//         >
//           {filters.map((filter) => (
//             <button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
//                 activeFilter === filter.id
//                   ? 'bg-emerald-500 text-gray-900'
//                   : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//               }`}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </motion.div>
        
//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="group"
//             >
//               <div className="h-full bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 group-hover:border-emerald-500/30 transition-all">
//                 <div className="h-48 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-gray-900"></div>
//                   <img 
//                     src={project.image} 
//                     alt={project.title} 
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/70">
//                     <div className="flex gap-4">
//                       <button className="px-4 py-2 bg-emerald-500 text-gray-900 rounded-lg font-medium hover:bg-emerald-400 transition-colors">
//                         View Demo
//                       </button>
//                       <button className="px-4 py-2 border border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500/10 transition-colors">
//                         Source Code
//                       </button>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors">
//                       {project.title}
//                     </h3>
//                     <span className="px-3 py-1 bg-gray-700 text-xs text-emerald-400 rounded-full capitalize">
//                       {project.category}
//                     </span>
//                   </div>
                  
//                   <p className="text-gray-400 mb-4">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, tagIndex) => (
//                       <span 
//                         key={tagIndex}
//                         className="px-3 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




// src/components/Projects.js
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

import ecommerceImage from '../images/ecommerce.jpeg.webp';
import ecommercePlaceholder from '../images/ecommerce.jpeg.webp_placeholder.jpg';
 import taskManagerImage from '../images/task-manager.webp';
 import taskManagerPlaceholder from '../images/task-manager.webp_placeholder.jpg';
 import fitnessTrackerImage from '../images/fitness-tracker.webp';
 import fitnessTrackerPlaceholder from '../images/fitness-tracker.webp_placeholder.jpg';
 import weatherDashboardImage from '../images/weather-dashboard.webp';
 import weatherDashboardPlaceholder from '../images/weather-dashboard.webp_placeholder.jpg';  


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' }
  ];
  
  // Import optimized WebP images
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-featured online shopping platform with payment integration and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: ecommerceImage,
      placeholder: ecommercePlaceholder
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',      
      description: 'Collaborative task management tool with real-time updates and team features.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      image: taskManagerImage,
      placeholder: taskManagerPlaceholder
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      category: 'mobile',
      description: 'Mobile application for tracking workouts, nutrition, and fitness goals.',
      tags: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
      image: fitnessTrackerImage,
      placeholder: fitnessTrackerPlaceholder
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'web',
      description: 'Interactive weather visualization tool with location-based forecasts.',
      tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
      image: weatherDashboardImage,
      placeholder: weatherDashboardPlaceholder
    },
    // ... other projects
  ], []);
  
  const filteredProjects = useMemo(() => 
    activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter),
  [activeFilter, projects]);
  
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-emerald-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;