'use client';

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
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const generateStars = () => {
      const numStars = 100;
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

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > (handleScroll as any).lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < (handleScroll as any).lastScrollY) {
        setScrollDirection('up');
      }
      (handleScroll as any).lastScrollY = currentScrollY;

      setIsScrolling(true);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        setScrollDirection(null);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", generateStars);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateStars = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      const scrollMultiplier = isScrolling ? 5 : 1;
      const trailLength = isScrolling ? 10 : 5;

      setStars((prevStars) =>
        prevStars.map((star) => {
          let newY = star.y;
          if (scrollDirection === 'down' || (!isScrolling && scrollDirection === null)) {
            newY += star.speed * deltaTime * 0.05 * scrollMultiplier;
          } else if (scrollDirection === 'up') {
            newY -= star.speed * deltaTime * 0.05 * scrollMultiplier;
          }

          if (newY > window.innerHeight) {
            newY = 0;
          } else if (newY < 0) {
            newY = window.innerHeight;
          }

          const newTrail = [...star.trail, { x: star.x, y: newY }];
          if (newTrail.length > trailLength) {
            newTrail.shift();
          }

          return { ...star, y: newY, trail: newTrail };
        })
      );
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateStars);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateStars);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isScrolling, scrollDirection]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
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
                opacity: ((index + 1) / star.trail.length) * 0.5,
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stars;

