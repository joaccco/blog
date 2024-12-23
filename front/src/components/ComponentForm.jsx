'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

interface ContactFormProps {
  setIsSubmitted: (value: boolean) => void
}

const ContactForm: React.FC<ContactFormProps> = ({ setIsSubmitted }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    // Here you would typically send the form data to your backend
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const inputClasses = "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className={inputClasses}
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message as string}</p>}
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          className={inputClasses}
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message as string}</p>}
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <textarea
          placeholder="Message"
          rows={4}
          {...register("message", { required: "Message is required" })}
          className={inputClasses}
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message as string}</p>}
      </motion.div>

      <motion.button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  )
}

export default ContactForm


