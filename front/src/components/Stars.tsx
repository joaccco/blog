'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  trail: { x: number; y: number }[];
}

const Stars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const isScrollingRef = useRef(false);
  const scrollDirectionRef = useRef<'up' | 'down' | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const generateStars = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const numStars = 100;
    const stars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        trail: [],
      });
    }
    starsRef.current = stars;
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateStars();
  }, [generateStars]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > (handleScroll as any).lastScrollY) {
      scrollDirectionRef.current = 'down';
    } else if (currentScrollY < (handleScroll as any).lastScrollY) {
      scrollDirectionRef.current = 'up';
    }
    (handleScroll as any).lastScrollY = currentScrollY;

    isScrollingRef.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      scrollDirectionRef.current = null;
    }, 150);
  }, []);

  const animateStars = useCallback((time: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      const scrollMultiplier = isScrollingRef.current ? 5 : 1;
      const trailLength = isScrollingRef.current ? 12 : 24;

      starsRef.current.forEach((star) => {
        let newY = star.y;
        if (scrollDirectionRef.current === 'down' || (!isScrollingRef.current && scrollDirectionRef.current === null)) {
          newY += star.speed * deltaTime * 0.05 * scrollMultiplier;
        } else if (scrollDirectionRef.current === 'up') {
          newY -= star.speed * deltaTime * 0.05 * scrollMultiplier;
        }

        if (newY > canvas.height) {
          newY = 0;
        } else if (newY < 0) {
          newY = canvas.height;
        }

        star.trail.push({ x: star.x, y: newY });
        if (star.trail.length > trailLength) {
          star.trail.shift();
        }

        ctx.beginPath();
        ctx.arc(star.x, newY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        star.trail.forEach((point, index) => {
          ctx.beginPath();
          ctx.arc(point.x, point.y, star.size * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${((index + 1) / star.trail.length) * 0.5})`;
          ctx.fill();
        });

        star.y = newY;
      });
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateStars);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    requestRef.current = requestAnimationFrame(animateStars);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleResize, handleScroll, animateStars]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />;
};

export default React.memo(Stars);

