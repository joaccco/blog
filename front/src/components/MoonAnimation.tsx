'use client'

import React, { useEffect, useRef } from 'react'
import moon from '../img/moon.jpg'

const MoonAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      container.style.setProperty('--mouse-x', `${x}px`)
      container.style.setProperty('--mouse-y', `${y}px`)
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 overflow-hidden">
      <svg
        className="absolute top-0 right-1/4 transform translate-x-3/4 h-full w-auto min-w-[1200px]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="atmosphere-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="80%" stopColor="#000B3B" stopOpacity="0" />
          </radialGradient>

          <mask id="earth-mask">
            <circle cx="600" cy="400" r="250" fill="white" />
          </mask>

          <pattern id="earth-pattern" patternUnits="userSpaceOnUse" width="500" height="500" x="350" y="150">
            <image
              href={moon.src}
              width="500"
              height="500"
              className="earth-rotation"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>

          {/* Sombra para el lado oscuro */}
          <linearGradient id="shadow-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <g className="stars">
          {Array.from({ length: 200 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1200}
              cy={Math.random() * 800}
              r={Math.random() * 1 + 0.2}
              fill="#ffffff"
              opacity={Math.random() * 0.8 + 0.2}
            >
              <animate
                attributeName="opacity"
                values={`${Math.random() * 0.5 + 0.2};${Math.random() * 0.8 + 0.2};${Math.random() * 0.5 + 0.2}`}
                dur={`${Math.random() * 3 + 2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        <g className="earth-rotation">
          <circle cx="600" cy="400" r="250" fill="url(#earth-pattern)" mask="url(#earth-mask)" />
          <circle cx="600" cy="400" r="250" fill="url(#shadow-gradient)" />
          <circle cx="600" cy="400" r="260" fill="url(#atmosphere-glow)" />

          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 600 400"
            to="360 600 400"
            dur="120s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  )
}

export default MoonAnimation