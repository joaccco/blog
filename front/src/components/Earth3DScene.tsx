'use client'

import React from 'react'
import SketchfabEmbed from './SketchfabEmbed'

interface Earth3DSceneProps {
  scrollY: number
}

const Earth3DScene: React.FC<Earth3DSceneProps> = ({ scrollY }) => {
  return (
    <div className="pointer-events-none">
      <SketchfabEmbed scrollY={scrollY} />
    </div>
  )
}

export default Earth3DScene

