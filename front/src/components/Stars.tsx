'use client'

import React, { useEffect, useState, useRef } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  trail: { x: number; y: number }[];
}

const Stars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  useEffect(() => {
    const generateStars = () => {
      const numStars = 100; // Reduced number of stars for better performance
      const starsArray: Star[] = [];
      for (let i = 0; i < numStars; i++) {
        const star: Star = {
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 0.2 + 1,
          speed: Math.random() * 0.5 + 0.2,
          trail: [],
        };
        starsArray.push(star);
      }
      setStars(starsArray);
    };

    generateStars();
    window.addEventListener("resize", generateStars);

    return () => window.removeEventListener("resize", generateStars);
  }, []);

  const animateStars = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      const scrollY = window.scrollY;

      setStars((prevStars) =>
        prevStars.map((star) => {
          let newY = star.y + star.speed * deltaTime * 0.05;
          let newX = star.x - scrollY * star.speed * 0.01; // Move stars horizontally based on scroll

          if (newY > window.innerHeight) {
            newY = 0;
            newX = Math.random() * window.innerWidth;
          }

          if (newX < 0) {
            newX = window.innerWidth;
          }

          // Update trail
          const newTrail = [...star.trail, { x: newX, y: newY }];
          if (newTrail.length > 5) {
            newTrail.shift();
          }

          return { ...star, x: newX, y: newY, trail: newTrail };
        })
      );
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateStars);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateStars);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map(star => (
        <React.Fragment key={star.id}>
          <div
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 2}px #fff`,
            }}
          />
          {star.trail.map((point, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${point.x}px`,
                top: `${point.y}px`,
                width: `${star.size * 0.8}px`,
                height: `${star.size * 0.8}px`,
                opacity: (index + 1) / star.trail.length * 0.5,
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stars;

