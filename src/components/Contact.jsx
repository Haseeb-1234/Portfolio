// src/components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
   return (
    
    <section id="contact" className="py-20 bg-gray-900">
      <AnimatedSection delay={0.2}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... heading ... */}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           >
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">
                Contact <span className="text-emerald-400">Information</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-500/10 p-3 rounded-lg">
                    <FaEnvelope className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-100">Email</h4>
                    <a href="mailto:hello@example.com" className="text-emerald-400 hover:underline">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-500/10 p-3 rounded-lg">
                    <FaPhone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-100">Phone</h4>
                    <a href="tel:+11234567890" className="text-emerald-400 hover:underline">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-emerald-500/10 p-3 rounded-lg">
                    <FaMapMarkerAlt className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-100">Location</h4>
                    <p className="text-gray-400">San Francisco, California</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium text-gray-100 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, backgroundColor: 'rgba(110, 231, 183, 0.1)' }}
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, backgroundColor: 'rgba(110, 231, 183, 0.1)' }}
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, backgroundColor: 'rgba(110, 231, 183, 0.1)' }}
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -5, backgroundColor: 'rgba(110, 231, 183, 0.1)' }}
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    <FaDribbble className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">
                Send Me a <span className="text-emerald-400">Message</span>
              </h3>
              
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-emerald-500/10 border border-emerald-500 rounded-lg text-emerald-400 text-center"
                >
                  <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Hello, I would like to discuss a project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                      isSubmitting 
                        ? 'bg-emerald-500/50 cursor-not-allowed' 
                        : 'bg-emerald-500 hover:bg-emerald-400 text-gray-900'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      </AnimatedSection>
    </section>
    
  );
};

export default Contact;