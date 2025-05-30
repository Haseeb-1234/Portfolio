// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    {
      year: '2022 - Present',
      title: 'Senior Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading frontend development for enterprise SaaS products using React and TypeScript.'
    },
    {
      year: '2019 - 2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      description: 'Developed full-stack applications using Node.js, Express, and MongoDB.'
    },
    {
      year: '2017 - 2019',
      title: 'Junior Developer',
      company: 'WebCraft Studios',
      description: 'Built responsive websites and web applications for diverse clients.'
    },
    {
      year: '2015 - 2017',
      title: 'Computer Science Student',
      company: 'University of Technology',
      description: 'Focused on software engineering, algorithms, and web technologies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800 rounded-2xl p-1 shadow-xl">
              <div className="bg-gray-900 rounded-xl p-8">
                <p className="text-gray-400 text-lg mb-6">
                  I'm a passionate software engineer with over 5 years of experience in building 
                  scalable web applications. My journey in tech started when I was 15, tinkering 
                  with HTML and CSS to customize my blog.
                </p>
                <p className="text-gray-400 text-lg mb-6">
                  I believe in writing clean, maintainable code and creating intuitive user 
                  experiences. When I'm not coding, you can find me contributing to open-source 
                  projects, attending tech meetups, or exploring new frameworks.
                </p>
                <p className="text-gray-400 text-lg">
                  My approach combines technical expertise with creative problem-solving to 
                  deliver solutions that not only meet but exceed expectations.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-8">
              My <span className="text-emerald-400">Journey</span>
            </h3>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-emerald-500/30"></div>
              
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-emerald-500/10 transition-shadow">
                    <span className="text-emerald-400 text-sm font-medium">{item.year}</span>
                    <h4 className="text-xl font-bold text-gray-100 mt-2">{item.title}</h4>
                    <p className="text-emerald-300 font-medium">{item.company}</p>
                    <p className="text-gray-400 mt-3">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;