'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Paintbrush, Code2, Brain, Layout, ShoppingCart, ArrowRight, CheckCircle, Zap, Trophy } from 'lucide-react'

const services = [
  {
    name: "Diseño UX/UI",
    tagline: "Interfaces que Cautivan y Convierten",
    description: "Transformamos ideas en experiencias digitales excepcionales que no solo lucen increíbles, sino que también impulsan resultados comerciales tangibles.",
    features: [
      "Investigación y análisis de usuarios",
      "Wireframes y prototipos interactivos",
      "Pruebas de usabilidad y optimización",
      "Diseño responsivo multiplataforma"
    ],
    benefits: [
      "Aumento en la tasa de conversión",
      "Reducción en la tasa de rebote",
      "Mayor satisfacción del usuario",
      "Interfaz intuitiva y moderna"
    ],
    process: [
      "Investigación y Discovery",
      "Arquitectura de Información",
      "Diseño Visual",
      "Pruebas y Refinamiento"
    ],
    icon: Paintbrush,
    image: "/placeholder.svg?height=400&width=600&text=UX/UI+Design",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Desarrollo a Medida",
    tagline: "Soluciones Tecnológicas que Transforman Negocios",
    description: "Creamos aplicaciones y sistemas personalizados que automatizan procesos, mejoran la eficiencia y dan vida a tu visión empresarial.",
    features: [
      "Desarrollo full-stack moderno",
      "Arquitectura escalable y robusta",
      "Integración de APIs y servicios",
      "Seguridad y rendimiento optimizado"
    ],
    benefits: [
      "Solución 100% adaptada a tu negocio",
      "Escalabilidad garantizada",
      "Mantenimiento simplificado",
      "Integración con sistemas existentes"
    ],
    process: [
      "Análisis de Requerimientos",
      "Diseño de Arquitectura",
      "Desarrollo Iterativo",
      "Despliegue y Monitoreo"
    ],
    icon: Code2,
    image: "/placeholder.svg?height=400&width=600&text=Custom+Development",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Lógica de Negocio",
    tagline: "Automatización Inteligente de Procesos",
    description: "Implementamos sistemas que traducen tus procesos comerciales en flujos de trabajo eficientes y automatizados, maximizando la productividad.",
    features: [
      "Modelado de procesos de negocio",
      "Automatización de flujos de trabajo",
      "Integración de sistemas legacy",
      "Análisis y reportes en tiempo real"
    ],
    benefits: [
      "Reducción de costos operativos",
      "Eliminación de tareas repetitivas",
      "Mejora en la toma de decisiones",
      "Mayor eficiencia operativa"
    ],
    process: [
      "Mapeo de Procesos",
      "Diseño de Solución",
      "Implementación",
      "Capacitación y Soporte"
    ],
    icon: Brain,
    image: "/placeholder.svg?height=400&width=600&text=Business+Logic",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "Landing Pages",
    tagline: "Páginas que Convierten Visitantes en Clientes",
    description: "Diseñamos y desarrollamos landing pages optimizadas para conversión que capturan leads y generan ventas de manera efectiva.",
    features: [
      "Diseño persuasivo y atractivo",
      "Optimización para conversiones",
      "A/B testing continuo",
      "Integración con CRM y analytics"
    ],
    benefits: [
      "Mayor tasa de conversión",
      "Generación efectiva de leads",
      "ROI medible y optimizable",
      "Tiempo de carga ultrarrápido"
    ],
    process: [
      "Análisis de Audiencia",
      "Diseño Conversion-Focused",
      "Desarrollo y Testing",
      "Optimización Continua"
    ],
    icon: Layout,
    image: "/placeholder.svg?height=400&width=600&text=Landing+Page",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    name: "E-commerce",
    tagline: "Tiendas Online que Impulsan Ventas",
    description: "Desarrollamos plataformas e-commerce completas y seguras que ofrecen una experiencia de compra excepcional y maximizan tus ventas.",
    features: [
      "Catálogo dinámico de productos",
      "Proceso de checkout optimizado",
      "Gestión integral de inventario",
      "Múltiples métodos de pago"
    ],
    benefits: [
      "Aumento en ventas online",
      "Gestión simplificada",
      "Experiencia de compra superior",
      "Escalabilidad comercial"
    ],
    process: [
      "Planificación Estratégica",
      "Diseño de UX Commerce",
      "Desarrollo e Integración",
      "Lanzamiento y Crecimiento"
    ],
    icon: ShoppingCart,
    image: "/placeholder.svg?height=400&width=600&text=Ecommerce",
    gradient: "from-red-500 to-rose-500"
  }
]

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-16 relative z-10"
    >
      <div className={`bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-gray-700 hover:border-${service.gradient.split(' ')[1]} transition-all duration-300`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.gradient}`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">{service.name}</h3>
            </div>
            
            <p className="text-xl font-semibold text-gray-300">{service.tagline}</p>
            <p className="text-gray-400 leading-relaxed">{service.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Características
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" /> Beneficios
                </h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" /> Proceso
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.process.map((step, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {i + 1}. {step}
                  </span>
                ))}
              </div>
            </div>

            <Button 
              className={`bg-gradient-to-r ${service.gradient} text-white mt-4`}
            >
              Explorar {service.name} <ArrowRight className="ml-2 w-4 w-4" />
            </Button>
          </div>

          <div className="hidden lg:block">
            <Image
              src={service.image}
              alt={service.name}
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section className="relative bg-transparent min-h-screen overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Nuestros <span className="text-gray-400">Servicios</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Soluciones digitales completas y personalizadas para impulsar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <motion.div ref={containerRef} style={{ y }} className="relative">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

