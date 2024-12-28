'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Rocket, Users, Target, Zap, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const About = () => {
  const timelineEvents = [
    {
      year: '2021',
      title: 'Los Inicios',
      description: 'Fundación de la empresa con la visión de transformar el panorama digital',
      metric: '5 Proyectos Iniciales'
    },
    {
      year: '2022',
      title: 'Crecimiento Exponencial',
      description: 'Expansión del equipo y primeros proyectos internacionales',
      metric: '25+ Clientes Satisfechos'
    },
    {
      year: '2023',
      title: 'Innovación Continua',
      description: 'Desarrollo de soluciones propietarias y metodologías ágiles',
      metric: '50+ Proyectos Exitosos'
    },
    {
      year: '2024',
      title: 'Liderando el Cambio',
      description: 'Estableciendo nuevos estándares en desarrollo de software',
      metric: 'Expansión Global'
    }
  ]

  const values = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Innovación Constante",
      description: "Siempre a la vanguardia de las nuevas tecnologías"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Colaboración",
      description: "Trabajamos como una extensión de tu equipo"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Excelencia",
      description: "Comprometidos con la calidad en cada línea de código"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Agilidad",
      description: "Adaptación rápida a cambios y necesidades"
    }
  ]

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Potenciando el Futuro Digital
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Somos una empresa joven y visionaria dedicada a transformar ideas en soluciones digitales innovadoras que impulsan el crecimiento de tu negocio.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="rounded-full">
                Conoce Nuestra Historia <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestra Trayectoria hacia la Excelencia
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700" />

            {/* Timeline events */}
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}
                >
                  <div className="w-1/2 px-6">
                    <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'
                      }`}>
                      <div className="text-2xl font-bold text-purple-400 mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-400 mb-2">{event.description}</p>
                      <div className="text-blue-400 font-semibold">
                        {event.metric}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 border-4 border-black flex items-center justify-center">
                    <Star className="w-6 h-6" />
                  </div>
                  <div className="w-1/2 px-6" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gray-900/50 border-gray-800rounded-3xl hover:border-purple-500/10 hover:shadow-purple-500/60 transition duration-300 shadow-md">
                  <div className="mb-4 text-purple-400">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Proyectos Completados', value: '100+' },
              { label: 'Clientes Satisfechos', value: '50+' },
              { label: 'Países Alcanzados', value: '10+' },
              { label: 'Equipo Profesional', value: '25+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestra Visión del Futuro
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Aspiramos a ser reconocidos globalmente como la empresa más innovadora en soluciones digitales,
              transformando la manera en que las empresas interactúan con la tecnología y potenciando su
              crecimiento en la era digital.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <Button size="lg" variant="outline" className="rounded-full">
              Únete a Nuestra Misión <Globe className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

