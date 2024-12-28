"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LaunchAnimation() {
    const [countdown, setCountdown] = useState(10)
    const [showLogo, setShowLogo] = useState(false)
    const [isLaunching, setIsLaunching] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    setIsLaunching(true)
                    setTimeout(() => setShowLogo(true), 3000)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <AnimatePresence>
            {!showLogo ? (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center relative"
                    >
                        <div className="font-mono text-6xl text-white mb-4">T-{countdown}</div>
                        <div className="text-white text-xl mb-16">Iniciando Lanzamiento</div>
                        
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 388.59 416.26"
                            width="300"
                            height="300"
                            className={`${isLaunching ? 'scale-50' : 'scale-100'}`}
                            animate={isLaunching ? { y: -1000 } : {}}
                            transition={{ duration: 2, ease: "easeOut" }}
                        >
                            <rect fill="#121420" width="388.59" height="216.84"/>
                            <motion.text
                                fill="#fff"
                                fontFamily="Poppins-Black, Poppins"
                                fontSize="49"
                                fontWeight="800"
                                stroke="#fff"
                                strokeMiterlimit="10"
                                x="76.22"
                                y="117.59"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                ETHERE     L
                            </motion.text>
                            <motion.path
                                fill="url(#Naranja_amarillo)"
                                d="M197.98,100.4c-.03.24-.15.25-.26.27-.91.18-1.98.07-2.9.13-7.56.45-15.12.66-22.66,1.61-1.66.21-3.37.31-5.02.84-.28.09-1.7.8-1.66,1.38l.58.52,1.4,1.24c-.44-.09-2.45-1.62-2.77-1.06-.81,1.41-1.54,5.16-1.71,7.12-.06.67-.2,5.86-.36,5.95-.15.08-.17-.73-.18-.89-.29-5.73-.65-11.29-3.99-13.94-1.27-1.01-2.47-1.22-3.86-1.81-.88-.37-7.05-.9-6.97-1.16,2.1.02,2.39.07,3.31.07,1.32,0,5.03-.26,6.27-.95.18-.1.36-.21.5-.46l-1.71-2.1c.48.11,1.93,1.99,2.49,1.73.27-.12,1.15-1.33,1.39-1.71,2.27-3.61,2.02-9.33,2.36-14.25.16,0,.1,1.58.12,1.81.27,4.41.59,9.37,2.63,12.44,1.42,2.14,2.63,1.76,4.35,2.01,8.62,1.25,17.3.88,25.94,1.21.9.03,1.81-.04,2.71,0Z"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            />
                            <motion.path
                                fill="#fff"
                                d="M285.49,85.35c1.25,2.83,2.6,5.77,3.79,8.68.24.59.69,1.48.83,2.04.03.12.1.22,0,.33l-7.46,1.36-3.19-7.47-3.8,9.77c-.23.36-2.37,1.24-2.95,1.55-2.43,1.32-4.85,2.77-6.81,4.71l-1.4.98,10.75-25.78.39-.16,8.02.05c.26.08.31.25.43.46.51.92.94,2.45,1.4,3.49Z"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                            />
                            <motion.path
                                fill="#fff"
                                d="M291.33,118.85c-.41-.29-.42-.83-.63-1.22-1.67-3.27-2.86-7.02-4.27-10.47-.39-.95-.85-1.83-1.21-2.75,0-.16.08-.19.2-.25.64-.38,2.16-.92,2.92-1.19,1.34-.49,2.71-.88,4.1-1.2.15.03.2.17.27.28,1.1,1.8,1.66,4.59,2.72,6.48,1.55,3.13,2.72,6.56,4.22,9.76l.03.57h-8.35Z"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 2 }}
                            />
                            <motion.path
                                fill="url(#Degradado_sin_nombre_3)"
                                d="M259.8,118.85c-.1-.1.66-1.83.79-2.09,6.67-13.33,21.8-18.21,36.23-18.73,1.88-.07,4.07-.07,5.94,0,.14,0,.42-.08.39.11h-1.29c-3.85.36-7.64.78-11.37,1.8-9.76,2.66-18.68,9.24-22.13,18.69-.04.06-4.51.23-4.55.23l10.73-12.12c-3.05.35-11.49,12.23-11.44,12.12,2.87-6.71,8.78-12.24,15.57-15.37.88-.4-1.91,2.19-2.41,2.83-.07.09,5.88-5.27,5.98-5.35.02-.08-6.39,3.87-6.39,3.81-.01-.54,9.41-5.32-1.29-.07-3.41,1.68-8.61,7.16-10.44,10.45-.67,1.2-1.15,2.49-1.79,3.71h-2.52Z"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 2.5 }}
                            />
                            
                            {/* Flame effect */}
                            {isLaunching && (
                                <motion.path
                                    d="M194 220 C184 250, 204 280, 194 310 C184 280, 204 250, 194 220 Z"
                                    fill="#f55"
                                    initial={{ scaleY: 0.2, opacity: 0 }}
                                    animate={{ 
                                        scaleY: [0.5, 1.5, 1],
                                        opacity: [0.3, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                            )}
                        </motion.svg>
                    </motion.div>
                </motion.div>
            ) : (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 3 }}
                    onAnimationComplete={() => {
                        const element = document.getElementById('launch-animation')
                        if (element) element.style.display = 'none'
                    }}
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 388.59 416.26"
                        width="300"
                        height="300"
                        initial="hidden"
                        animate="visible"
                    >
                        <rect fill="#121420" width="388.59" height="216.84"/>
                        <motion.text
                            fill="#fff"
                            fontFamily="Poppins-Black, Poppins"
                            fontSize="49"
                            fontWeight="800"
                            stroke="#fff"
                            strokeMiterlimit="10"
                            x="76.22"
                            y="117.59"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            ETHEREAL
                        </motion.text>
                        <motion.path
                            fill="url(#Naranja_amarillo)"
                            d="M197.98,100.4c-.03.24-.15.25-.26.27-.91.18-1.98.07-2.9.13-7.56.45-15.12.66-22.66,1.61-1.66.21-3.37.31-5.02.84-.28.09-1.7.8-1.66,1.38l.58.52,1.4,1.24c-.44-.09-2.45-1.62-2.77-1.06-.81,1.41-1.54,5.16-1.71,7.12-.06.67-.2,5.86-.36,5.95-.15.08-.17-.73-.18-.89-.29-5.73-.65-11.29-3.99-13.94-1.27-1.01-2.47-1.22-3.86-1.81-.88-.37-7.05-.9-6.97-1.16,2.1.02,2.39.07,3.31.07,1.32,0,5.03-.26,6.27-.95.18-.1.36-.21.5-.46l-1.71-2.1c.48.11,1.93,1.99,2.49,1.73.27-.12,1.15-1.33,1.39-1.71,2.27-3.61,2.02-9.33,2.36-14.25.16,0,.1,1.58.12,1.81.27,4.41.59,9.37,2.63,12.44,1.42,2.14,2.63,1.76,4.35,2.01,8.62,1.25,17.3.88,25.94,1.21.9.03,1.81-.04,2.71,0Z"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        />
                    </motion.svg>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

