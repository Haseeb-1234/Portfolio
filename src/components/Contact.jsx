// src/components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaTwitter, FaLinkedinIn, FaDribbble, FaEnvelope, 
  FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle 
} from 'react-icons/fa';
import emailjs from 'emailjs-com';
import AnimatedSection from './AnimatedSection';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      errors.message = 'Message should be at least 10 characters';
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send message. Please try again later.');
      setTimeout(() => setSubmitError(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

return (
    <section id="contact" className="py-20 bg-gray-900">
      <AnimatedSection delay={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl"
            >
              Get In <span className="text-emerald-400">Touch</span>
            </motion.h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out using the form below.
            </motion.p>
          </div>
          
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
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, backgroundColor: 'rgba(110, 231, 183, 0.1)' }}
                      className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, backgroundColor: 'rgba(110, 231, 183, 0.1)' }}
                      className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, backgroundColor: 'rgba(110, 231, 183, 0.1)' }}
                      className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://dribbble.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-emerald-500/10 border border-emerald-500 rounded-lg text-emerald-400 text-center"
                  >
                    <FaCheckCircle className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/10 text-red-400 rounded-lg flex items-start"
                      >
                        <FaExclamationTriangle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{submitError}</span>
                      </motion.div>
                    )}
                    
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
                          className={`w-full bg-gray-700 border ${
                            formErrors.name ? 'border-red-500' : 'border-gray-600'
                          } rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                          placeholder="John Doe"
                        />
                        {formErrors.name && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                        )}
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
                          className={`w-full bg-gray-700 border ${
                            formErrors.email ? 'border-red-500' : 'border-gray-600'
                          } rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                          placeholder="john@example.com"
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                        )}
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
                        className={`w-full bg-gray-700 border ${
                            formErrors.subject ? 'border-red-500' : 'border-gray-600'
                          } rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                        placeholder="Project Inquiry"
                      />
                      {formErrors.subject && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                      )}
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
                        rows="5"
                        className={`w-full bg-gray-700 border ${
                            formErrors.message ? 'border-red-500' : 'border-gray-600'
                          } rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                        placeholder="Hello, I would like to discuss a project..."
                      ></textarea>
                      {formErrors.message && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center ${
                        isSubmitting 
                          ? 'bg-emerald-500/50 cursor-not-allowed' 
                          : 'bg-emerald-500 hover:bg-emerald-400 text-gray-900'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
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
