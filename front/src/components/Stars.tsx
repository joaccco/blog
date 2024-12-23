'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  isStatic: boolean;
}

interface Comet {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  trail: { x: number; y: number }[];
}

const Stars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const cometsRef = useRef<Comet[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const isScrollingRef = useRef(false);
  const scrollDirectionRef = useRef<'up' | 'down' | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const generateStarsAndComets = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const numStars = 200;
    const numComets = 10;
    const stars: Star[] = [];
    const comets: Comet[] = [];

    const starColors = ['#ffffff', '#ffe9c4', '#d4fbff'];
    const cometColors = ['#4cc9f0', '#4895ef', '#4361ee'];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        isStatic: true,
      });
    }

    for (let i = 0; i < numComets; i++) {
      comets.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1 + 1,
        speed: Math.random() * 0.5 + 0.2,
        color: cometColors[Math.floor(Math.random() * cometColors.length)],
        trail: [],
      });
    }

    starsRef.current = stars;
    cometsRef.current = comets;
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateStarsAndComets();
  }, [generateStarsAndComets]);

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

  const animateStarsAndComets = useCallback((time: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      const scrollMultiplier = isScrollingRef.current ? 5 : 1;
      const trailLength = isScrollingRef.current ? 12 : 24;

      // Draw static stars
      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      });

      // Animate and draw comets
      cometsRef.current.forEach((comet) => {
        let newY = comet.y;
        if (scrollDirectionRef.current === 'down' || (!isScrollingRef.current && scrollDirectionRef.current === null)) {
          newY += comet.speed * deltaTime * 0.05 * scrollMultiplier;
        } else if (scrollDirectionRef.current === 'up') {
          newY -= comet.speed * deltaTime * 0.05 * scrollMultiplier;
        }

        if (newY > canvas.height) {
          newY = 0;
          comet.x = Math.random() * canvas.width;
        } else if (newY < 0) {
          newY = canvas.height;
          comet.x = Math.random() * canvas.width;
        }

        comet.trail.push({ x: comet.x, y: newY });
        if (comet.trail.length > trailLength) {
          comet.trail.shift();
        }

        ctx.beginPath();
        ctx.arc(comet.x, newY, comet.size, 0, Math.PI * 2);
        ctx.fillStyle = comet.color;
        ctx.fill();

        comet.trail.forEach((point, index) => {
          ctx.beginPath();
          ctx.arc(point.x, point.y, comet.size * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `${comet.color}${Math.floor(((index + 1) / comet.trail.length) * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        });

        comet.y = newY;
      });
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateStarsAndComets);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    requestRef.current = requestAnimationFrame(animateStarsAndComets);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleResize, handleScroll, animateStarsAndComets]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />;
};

export default React.memo(Stars);

