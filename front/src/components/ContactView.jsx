"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactView = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex items-center justify-center px-4 py-12">
      <motion.div
        className="max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          variants={childVariants}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-lg text-center mb-12 text-gray-300"
          variants={childVariants}
        >
          Have a question or want to work together? We'd love to hear from you!
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6 mb-12"
          variants={childVariants}
        >
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400 transition-colors"
          >
            🐦
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-600 transition-colors"
          >
            💼
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-400 transition-colors"
          >
            🐙
          </a>
        </motion.div>
        {isSubmitted ? (
          <motion.div
            className="bg-green-500 text-white p-6 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2">
              Thank you for your message!
            </h2>
            <p>Well get back to you as soon as possible.</p>
          </motion.div>
        ) : (
          <ContactForm setIsSubmitted={setIsSubmitted} />
        )}
      </motion.div>
    </div>
  );
};

export default ContactView;
