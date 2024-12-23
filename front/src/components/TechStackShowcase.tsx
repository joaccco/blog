'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

interface Technology {
  name: string
  description: string
  icon: string
}

const ecommerceTech: Technology[] = [
  { name: 'Next.js', description: 'React framework for server-side rendering and static site generation', icon: '⚛️' },
  { name: 'Node.js', description: 'JavaScript runtime for server-side logic', icon: '🟩' },
  { name: 'MongoDB', description: 'NoSQL database for flexible data storage', icon: '🍃' },
  { name: 'Stripe', description: 'Payment processing integration', icon: '💳' },
  { name: 'Redux', description: 'State management for complex applications', icon: '🔄' },
  { name: 'GraphQL', description: 'Query language for APIs', icon: '📊' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development', icon: '🎨' },
  { name: 'Jest', description: 'JavaScript testing framework', icon: '🃏' },
  { name: 'Docker', description: 'Containerization for consistent deployments', icon: '🐳' },
  { name: 'AWS', description: 'Cloud infrastructure for scalability', icon: '☁️' },
  { name: 'Elasticsearch', description: 'Search engine for product discovery', icon: '🔍' },
  { name: 'Redis', description: 'In-memory data structure store for caching', icon: '🚀' },
]

const landingPageTech: Technology[] = [
  { name: 'React', description: 'JavaScript library for building user interfaces', icon: '⚛️' },
  { name: 'Gatsby', description: 'Static site generator for fast landing pages', icon: '🚀' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development', icon: '🎨' },
  { name: 'Framer Motion', description: 'Animation library for React', icon: '🎭' },
  { name: 'Netlify', description: 'Hosting and serverless backend services', icon: '🌐' },
  { name: 'Formik', description: 'Form management for React', icon: '📝' },
  { name: 'Google Analytics', description: 'Web analytics service', icon: '📊' },
  { name: 'Optimizely', description: 'A/B testing and experimentation platform', icon: '🔬' },
  { name: 'Contentful', description: 'Headless CMS for content management', icon: '📰' },
  { name: 'Mailchimp', description: 'Email marketing and automation', icon: '📧' },
  { name: 'Hotjar', description: 'User behavior analytics and feedback', icon: '🔥' },
  { name: 'Lighthouse', description: 'Automated tool for improving web page quality', icon: '💡' },
]

const TechCard: React.FC<{ tech: Technology }> = ({ tech }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{tech.icon}</div>
        <h3 className="text-lg font-semibold mb-2 text-white">{tech.name}</h3>
        <p className="text-sm text-gray-400">{tech.description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default function TechStackShowcase() {
  const [isEcommerce, setIsEcommerce] = useState(true)

  return (
    <div className="container mx-auto px-4 py-16 text-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-400">
        Technology Stack for {isEcommerce ? 'E-commerce' : 'Landing Page'}
      </h2>
      <div className="flex items-center justify-center mb-8">
        <Label htmlFor="tech-toggle" className="mr-2 text-gray-300">Landing Page</Label>
        <Switch
          id="tech-toggle"
          checked={isEcommerce}
          onCheckedChange={setIsEcommerce}
        />
        <Label htmlFor="tech-toggle" className="ml-2 text-gray-300">E-commerce</Label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {(isEcommerce ? ecommerceTech : landingPageTech).map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  )
}

