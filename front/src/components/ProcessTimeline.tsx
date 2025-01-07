'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Clock, Users, Code, Zap, Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Step {
    id: number
    title: string
    description: string
    duration: string
    icon: React.ReactNode
    benefits: string[]
    keyPoints: string[]
}

const steps: Step[] = [
    {
        id: 1,
        title: "Consulta Inicial",
        description: "Iniciamos nuestro viaje juntos con una consulta detallada para comprender a fondo tu visión y objetivos. Esta fase es crucial para establecer las bases de una colaboración exitosa.",
        duration: "1-2 horas",
        icon: <Users className="w-8 h-8" />,
        benefits: [
            "Alineación clara de objetivos",
            "Identificación de desafíos clave",
            "Establecimiento de expectativas mutuas"
        ],
        keyPoints: [
            "Análisis profundo de tus necesidades",
            "Evaluación de la viabilidad del proyecto",
            "Exploración de soluciones potenciales"
        ]
    },
    {
        id: 2,
        title: "Planificación de Estrategia y Diseño",
        description: "Basándonos en la información recopilada, nuestro equipo desarrolla una estrategia integral y conceptos de diseño iniciales que se alinean perfectamente con tu visión y objetivos comerciales.",
        duration: "1-2 semanas",
        icon: <Zap className="w-8 h-8" />,
        benefits: [
            "Estrategia personalizada para tu negocio",
            "Conceptos de diseño innovadores",
            "Plan de acción claro y detallado"
        ],
        keyPoints: [
            "Investigación de mercado y competencia",
            "Creación de wireframes y prototipos",
            "Definición de la arquitectura de la información"
        ]
    },
    {
        id: 3,
        title: "Hoja de Ruta de Desarrollo",
        description: "Creamos un plan de desarrollo meticuloso que sirve como nuestra guía durante todo el proceso. Este plan detalla cada fase del proyecto, asegurando una ejecución eficiente y transparente.",
        duration: "3-5 días",
        icon: <Clock className="w-8 h-8" />,
        benefits: [
            "Visibilidad completa del proceso",
            "Gestión eficiente de recursos",
            "Minimización de riesgos potenciales"
        ],
        keyPoints: [
            "Desglose detallado de tareas y responsabilidades",
            "Establecimiento de hitos y plazos realistas",
            "Planificación de revisiones y puntos de control"
        ]
    },
    {
        id: 4,
        title: "Implementación",
        description: "Nuestro equipo de desarrolladores expertos da vida a tu visión, transformando los conceptos en una solución digital robusta y funcional. Mantenemos una comunicación constante durante esta fase crucial.",
        duration: "4-8 semanas",
        icon: <Code className="w-8 h-8" />,
        benefits: [
            "Desarrollo ágil y adaptable",
            "Código limpio y bien documentado",
            "Integración de tecnologías de vanguardia"
        ],
        keyPoints: [
            "Desarrollo frontend y backend",
            "Implementación de funcionalidades clave",
            "Optimización para rendimiento y escalabilidad"
        ]
    },
    {
        id: 5,
        title: "Pruebas y Refinamiento",
        description: "Llevamos a cabo pruebas exhaustivas para garantizar que cada aspecto de tu solución funcione a la perfección. Tu feedback en esta etapa es invaluable para realizar los ajustes finales.",
        duration: "1-2 semanas",
        icon: <CheckCircle className="w-8 h-8" />,
        benefits: [
            "Garantía de calidad rigurosa",
            "Optimización basada en datos reales",
            "Refinamiento de la experiencia del usuario"
        ],
        keyPoints: [
            "Pruebas de funcionalidad y usabilidad",
            "Optimización de rendimiento y seguridad",
            "Ajustes finales basados en feedback del cliente"
        ]
    },
    {
        id: 6,
        title: "Lanzamiento y Soporte Continuo",
        description: "El lanzamiento de tu proyecto es solo el comienzo. Proporcionamos soporte continuo y mantenimiento para asegurar el éxito a largo plazo de tu solución digital.",
        duration: "Continuo",
        icon: <Rocket className="w-8 h-8" />,
        benefits: [
            "Transición suave al entorno de producción",
            "Soporte técnico dedicado",
            "Actualizaciones y mejoras continuas"
        ],
        keyPoints: [
            "Estrategia de lanzamiento personalizada",
            "Monitoreo de rendimiento post-lanzamiento",
            "Plan de mantenimiento y actualización"
        ]
    }
]

const ProcessCard: React.FC<{
    step: Step
    index: number
    progress: number
}> = ({ step, index, progress }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const isActive = progress > index / steps.length && progress <= (index + 1) / steps.length
    const isCompleted = progress > (index + 1) / steps.length

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-16 relative"
        >
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-indigo-600" />
            <Card className="p-8 bg-gray-900 shadow-lg border-l-4 border-indigo-500 hover:shadow-indigo-500/20 transition-shadow duration-300 ml-16">
                <div className="flex items-start gap-6">
                    <motion.div 
                        className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold -ml-24 relative z-10 ${
                            isCompleted ? "bg-green-500 text-white" : isActive ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-300"
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2, type: "spring", stiffness: 260, damping: 20 }}
                    >
                        {isCompleted ? <CheckCircle className="w-8 h-8" /> : step.icon}
                    </motion.div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-semibold text-indigo-300">{step.title}</h3>
                            <span className="text-sm text-gray-400 px-3 py-1 bg-gray-700/50 rounded-full">
                                {step.duration}
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-semibold text-indigo-300 mb-2">Beneficios Clave</h4>
                                <ul className="list-disc list-inside text-gray-300">
                                    {step.benefits.map((benefit, i) => (
                                        <li key={i}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-indigo-300 mb-2">Puntos Destacados</h4>
                                <ul className="list-disc list-inside text-gray-300">
                                    {step.keyPoints.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 max-w-3xl bg-gray-800/50 backdrop-blur-sm rounded-full h-16 overflow-hidden shadow-lg z-50">
            <motion.div
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                style={{ scaleX: progress, transformOrigin: "0%" }}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            progress > index / (steps.length - 1) ? 'bg-white text-indigo-600' : 'bg-gray-700 text-gray-400'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                    >
                        {React.cloneElement(step.icon as React.ReactElement, { className: "w-6 h-6" })}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default function ProcessTimeline() {
    const { scrollYProgress } = useScroll()

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="min-h-screen bg-transparent py-20">
            <ProgressBar progress={smoothProgress} />
            <div className="text-center mb-20">
                <motion.h2 
                    className="text-5xl font-bold text-indigo-300 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Nuestro Proceso de Desarrollo
                </motion.h2>
                <motion.p 
                    className="text-xl text-gray-300 max-w-3xl mx-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Descubre cómo transformamos tu visión en una solución digital excepcional a través de nuestro proceso estructurado y colaborativo. Cada paso está diseñado para maximizar el valor y asegurar resultados sobresalientes.
                </motion.p>
            </div>

            <div className="max-w-5xl mx-auto px-4">
                {steps.map((step, index) => (
                    <ProcessCard 
                        key={step.id} 
                        step={step} 
                        index={index}
                        progress={smoothProgress}
                    />
                ))}
            </div>

            <div className="text-center mt-0">
                <motion.h3 
                    className="text-3xl font-semibold text-indigo-300 mb-0"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    ¿Listo para Iniciar tu Proyecto Transformador?
                </motion.h3>
                <motion.p 
                    className="text-xl text-gray-300 max-w-3xl mx-auto px-4 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Nuestro equipo de expertos está preparado para llevar tu visión al siguiente nivel. Contáctanos hoy y comencemos a construir algo extraordinario juntos. Tu éxito es nuestra prioridad.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-4">
                        <Link href="/form" className="flex items-center">
                            Iniciar tu Proyecto <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}

