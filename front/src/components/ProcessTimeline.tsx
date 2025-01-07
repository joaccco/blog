'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Clock, Users, Code, Zap, Rocket } from 'lucide-react'
import Link from 'next/link'

interface Step {
    id: number
    title: string
    description: string
    duration: string
    icon: React.ReactNode
}

const steps: Step[] = [
    {
        id: 1,
        title: "Consulta Inicial",
        description: "Nos reunimos para entender las necesidades de tu negocio, desafíos y visión del proyecto. Esto nos ayuda a alinear nuestras soluciones con tus objetivos.",
        duration: "1 hora",
        icon: <Users className="w-6 h-6" />
    },
    {
        id: 2,
        title: "Planificación de Estrategia y Diseño",
        description: "Nuestro equipo desarrolla una estrategia integral y crea conceptos de diseño iniciales para tu solución digital.",
        duration: "1 semana",
        icon: <Zap className="w-6 h-6" />
    },
    {
        id: 3,
        title: "Hoja de Ruta de Desarrollo",
        description: "Creamos un plan de desarrollo detallado, incluyendo cronograma, hitos y especificaciones técnicas.",
        duration: "3 días",
        icon: <Clock className="w-6 h-6" />
    },
    {
        id: 4,
        title: "Implementación",
        description: "Nuestros desarrolladores dan vida al diseño, con actualizaciones regulares y oportunidades para feedback.",
        duration: "2-4 semanas",
        icon: <Code className="w-6 h-6" />
    },
    {
        id: 5,
        title: "Pruebas y Refinamiento",
        description: "Realizamos pruebas rigurosas para asegurar que todo funcione perfectamente, con ajustes finales basados en tu feedback.",
        duration: "1 semana",
        icon: <CheckCircle className="w-6 h-6" />
    },
    {
        id: 6,
        title: "Lanzamiento y Soporte",
        description: "Lanzamos tu proyecto y proporcionamos soporte continuo para asegurar un éxito sostenido.",
        duration: "Continuo",
        icon: <Rocket className="w-6 h-6" />
    }
]

const ProcessCard: React.FC<{
    step: Step
    index: number
    progress: number
}> = ({ step, index, progress }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
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
            className="mb-8 relative"
        >
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-600" />
            <Card className="p-6 bg-transparent shadow-lg border-l-4 border-indigo-500 hover:shadow-indigo-500/20 transition-shadow duration-300 ml-8">
                <div className="flex items-start gap-4">
                    <motion.div 
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold -ml-14 relative z-10 ${
                            isCompleted ? "bg-green-500 text-white" : isActive ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-300"
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2, type: "spring", stiffness: 260, damping: 20 }}
                    >
                        {isCompleted ? <CheckCircle className="w-6 h-6" /> : step.icon}
                    </motion.div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-indigo-300">{step.title}</h3>
                            <span className="text-sm text-gray-400 px-3 py-1 bg-gray-700/50 rounded-full">
                                {step.duration}
                            </span>
                        </div>
                        <p className="text-gray-300">{step.description}</p>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 max-w-3xl bg-gray-800/50 backdrop-blur-sm rounded-full h-12 overflow-hidden shadow-lg z-50">
            <motion.div
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                style={{ scaleX: progress, transformOrigin: "0%" }}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            progress > index / (steps.length - 1) ? 'bg-white text-indigo-600' : 'bg-gray-700 text-gray-400'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                    >
                        {React.cloneElement(step.icon as React.ReactElement, { className: "w-4 h-4" })}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="min-h-screen bg-transparent py-20" ref={containerRef}>
            <ProgressBar progress={smoothProgress} />
            <div className="text-center mb-20">
                <motion.h2 
                    className="text-4xl font-bold text-indigo-300 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Nuestro Proceso
                </motion.h2>
                <motion.p 
                    className="text-lg text-gray-300 max-w-2xl mx-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Seguimos un enfoque estructurado para convertir tu visión en realidad. Así es como trabajamos juntos para crear soluciones digitales excepcionales.
                </motion.p>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                {steps.map((step, index) => (
                    <ProcessCard 
                        key={step.id} 
                        step={step} 
                        index={index}
                        progress={smoothProgress}
                    />
                ))}
            </div>

            <div className="text-center mt-20">
                <motion.h3 
                    className="text-2xl font-semibold text-indigo-300 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    ¿Listo para comenzar tu proyecto?
                </motion.h3>
                <motion.p 
                    className="text-lg text-gray-300 max-w-2xl mx-auto px-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Nuestro equipo está preparado para llevar tu visión al siguiente nivel. Contáctanos hoy y comencemos a construir algo extraordinario juntos.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        <Link href="/form" className="px-8 py-3 text-lg">
                            Iniciar Proyecto
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}

