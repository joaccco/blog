'use client'

import React, { useEffect, useRef } from 'react'
import nightEarth from '../img/nightearth.jpg'

const EarthAnimation: React.FC = () => {
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
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-auto min-w-[1200px]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="atmosphere-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="80%" stopColor="#000B3B" stopOpacity="0" />
            <stop offset="95%" stopColor="#0047AB" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4169E1" stopOpacity="0.6" />
          </radialGradient>

          {/* Mask for the Earth image */}
          <mask id="earth-mask">
            <circle cx="600" cy="400" r="250" fill="white" />
          </mask>

          {/* Pattern for the Earth image */}
          <pattern id="earth-pattern" patternUnits="userSpaceOnUse" width="500" height="500" x="350" y="150">
            <image
              href={nightEarth.src}
              width="500"
              height="500"
              className="earth-rotation"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>

        {/* Background stars */}
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
          {/* Earth image */}
          <circle cx="600" cy="400" r="250" fill="url(#earth-pattern)" mask="url(#earth-mask)" />
          
          {/* Atmospheric glow */}
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

export default EarthAnimation

