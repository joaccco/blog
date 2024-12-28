'use client'

import React, { useRef, useCallback } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Card } from '../components/ui/card'

interface Step {
    id: number
    title: string
    description: string
    duration: string
}

const steps: Step[] = [
    {
        id: 1,
        title: "Initial Consultation",
        description: "We meet to understand your business needs, challenges, and vision for the project. This helps us align our solutions with your goals.",
        duration: "1 hour"
    },
    {
        id: 2,
        title: "Strategy & Design Planning",
        description: "Our team develops a comprehensive strategy and creates initial design concepts for your digital solution.",
        duration: "1 week"
    },
    {
        id: 3,
        title: "Development Roadmap",
        description: "We create a detailed development plan, including timeline, milestones, and technical specifications.",
        duration: "3 days"
    },
    {
        id: 4,
        title: "Implementation",
        description: "Our developers bring the design to life, with regular updates and opportunities for feedback.",
        duration: "2-4 weeks"
    },
    {
        id: 5,
        title: "Testing & Refinement",
        description: "Rigorous testing ensures everything works perfectly, with final adjustments based on your feedback.",
        duration: "1 week"
    },
    {
        id: 6,
        title: "Launch & Support",
        description: "We launch your project and provide ongoing support to ensure continued success.",
        duration: "Ongoing"
    }
]

const ProcessCard: React.FC<{
    step: Step
    y: number
    index: number
    height: number
}> = ({ step, y, index }) => {
    return (
        <motion.div
            style={{
                y: y,
                zIndex: steps.length - index
            }}
            className="sticky top-0 pt-20 transition-all h-[200px]"
        >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-none shadow-lg mx-4 md:mx-auto max-w-2xl">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                        {step.id}
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                            <span className="text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full">
                                {step.duration}
                            </span>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}


export default function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef ?? undefined,
        offset: ["start start", "end end"]
    })

    const createY = (index: number, height: number) => {
        const y = scrollYProgress.get() * height * -1;
        return y + (index * height)
    }


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                    We follow a structured approach to turn your vision into reality. Here is how we work together to create exceptional digital solutions.
                </p>
            </div>

            <div ref={containerRef} className="relative min-h-[200vh]">
                {steps.map((step, index) => {
                    const y = createY(index, 200)

                    return (
                        <ProcessCard
                            key={step.id} step={step} y={y} index={index} height={200}
                        />
                    )
                })}
            </div>
        </div>
    )
}


