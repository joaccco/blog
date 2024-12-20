'use client'

import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

interface Earth3DProps {
  scrollY: number
}

const Earth3D: React.FC<Earth3DProps> = ({ scrollY }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'SKETCHFAB_PLAYER_LOADED') {
        console.log('Sketchfab model loaded')
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useFrame(() => {
    if (iframeRef.current) {
      const yOffset = Math.sin(scrollY * 0.001) * 50
      iframeRef.current.style.transform = `translateY(${yOffset}px)`
    }
  })

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <iframe
        ref={iframeRef}
        title="Cartoon Lowpoly Earth Planet 2 UVW textured"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        src="https://sketchfab.com/models/73dd3283bf6d45a3a62d4806f3044633/embed?autostart=1&preload=1&transparent=1"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />
    </div>
  )
}

export default Earth3D

