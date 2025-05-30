// // src/components/sections/Projects.jsx
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { fetchGitHubRepos } from '../../utils/github';
// import ProjectDevice from '../three/ProjectDevice';
// import GlassCard from '../ui/GlassCard';

// const Projects = () => {
//   const [repos, setRepos] = useState([]);
//   const [filter, setFilter] = useState('all');
//   const [loading, setLoading] = useState(true);
  
//   useEffect(() => {
//     const loadRepos = async () => {
//       const repos = await fetchGitHubRepos('yourgithubusername');
//       setRepos(repos);
//       setLoading(false);
//     };
    
//     loadRepos();
//   }, []);

//   const categories = [
//     'all', 'react', 'javascript', 'node', 'python', 'css'
//   ];

//   const filteredRepos = filter === 'all' 
//     ? repos 
//     : repos.filter(repo => 
//         repo.language?.toLowerCase().includes(filter) || 
//         repo.description?.toLowerCase().includes(filter)
//       );

//   return (
//     <section id="projects" className="section projects">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">My Projects</h2>
//           <div className="divider"></div>
//           <p className="section-subtitle">Real projects from my GitHub</p>
//         </div>
        
//         <div className="project-filters">
//           {categories.map(category => (
//             <button
//               key={category}
//               className={`filter-btn ${filter === category ? 'active' : ''}`}
//               onClick={() => setFilter(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           ))}
//         </div>
        
//         {loading ? (
//           <div className="loading">Loading projects...</div>
//         ) : (
//           <div className="projects-grid">
//             {filteredRepos.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 className="project-card"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <GlassCard>
//                   <div className="project-preview">
//                     <ProjectDevice 
//                       model="laptop" 
//                       projectId={project.id} 
//                     />
//                   </div>
                  
//                   <div className="project-content">
//                     <h3 className="project-title">{project.title}</h3>
//                     <p className="project-description">
//                       {project.description || 'No description available'}
//                     </p>
                    
//                     <div className="project-meta">
//                       <span className="project-language">
//                         {project.language || 'Various'}
//                       </span>
//                       <span className="project-stars">
//                         ⭐ {project.stars}
//                       </span>
//                     </div>
                    
//                     <div className="project-links">
//                       <a 
//                         href={project.url} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="project-link"
//                       >
//                         View Code
//                       </a>
//                       {project.homepage && (
//                         <a 
//                           href={project.homepage} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="project-link"
//                         >
//                           Live Demo
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </GlassCard>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// src/components/sections/Projects.jsx
// src/components/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import project images
import ecommerceImage from '../images/ecommerce.jpeg';
import taskManagerImage from '../images/task-manager.jpg';
import fitnessTrackerImage from '../images/fitness-tracker.jpg';
import weatherDashboardImage from '../images/weather-dashboard.jpg';
import portfolioImage from '../images/portfolio.jpg';
import socialAnalyticsImage from '../images/social-analytics.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-featured online shopping platform with payment integration and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: ecommerceImage
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Collaborative task management tool with real-time updates and team features.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      image: taskManagerImage
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      category: 'mobile',
      description: 'Mobile application for tracking workouts, nutrition, and fitness goals.',
      tags: ['React Native', 'GraphQL', 'Node.js', 'MongoDB'],
      image: fitnessTrackerImage
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'web',
      description: 'Interactive weather visualization tool with location-based forecasts.',
      tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
      image: weatherDashboardImage
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'design',
      description: 'Modern portfolio design with smooth animations and responsive layout.',
      tags: ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframing'],
      image: portfolioImage
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      category: 'web',
      description: 'Dashboard for tracking and analyzing social media performance metrics.',
      tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      image: socialAnalyticsImage
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 group-hover:border-emerald-500/30 transition-all">
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-gray-900"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/70">
                    <div className="flex gap-4">
                      <button className="px-4 py-2 bg-emerald-500 text-gray-900 rounded-lg font-medium hover:bg-emerald-400 transition-colors">
                        View Demo
                      </button>
                      <button className="px-4 py-2 border border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500/10 transition-colors">
                        Source Code
                      </button>
                    </div>
                  </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;