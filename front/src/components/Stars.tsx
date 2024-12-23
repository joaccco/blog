'use client'; // Indica que este componente es un componente cliente en Next.js.

import React, { useEffect, useState, useRef } from 'react';

// Interfaz que define la estructura de un objeto Star.
interface Star {
  id: number; // Identificador único para la estrella.
  x: number; // Posición horizontal de la estrella.
  y: number; // Posición vertical de la estrella.
  size: number; // Tamaño de la estrella.
  speed: number; // Velocidad de la estrella.
  trail: { x: number; y: number }[]; // Rastro de posiciones que deja la estrella.
}

const Stars: React.FC = () => {
  // Estado que contiene las estrellas.
  const [stars, setStars] = useState<Star[]>([]);
  const [isScrolling, setIsScrolling] = useState(false); // Indica si el usuario está haciendo scroll.
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null); // Dirección del scroll: arriba o abajo.
  const requestRef = useRef<number>(); // Referencia al identificador de la animación.
  const previousTimeRef = useRef<number>(); // Almacena el tiempo del frame anterior para calcular el deltaTime.
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null); // Timeout para determinar cuándo se detiene el scroll.

  // Genera un conjunto inicial de estrellas y maneja el evento de redimensionamiento de la ventana.
  useEffect(() => {
    const generateStars = () => {
      const numStars = 100; // Cantidad de estrellas generadas.
      const starsArray: Star[] = [];
      for (let i = 0; i < numStars; i++) {
        const star: Star = {
          id: i,
          x: Math.random() * window.innerWidth, // Posición aleatoria en el eje X.
          y: Math.random() * window.innerHeight, // Posición aleatoria en el eje Y.
          size: Math.random() * 0.2 + 1, // Tamaño aleatorio.
          speed: Math.random() * 0.5 + 0.2, // Velocidad aleatoria.
          trail: [], // Inicialmente, el rastro está vacío.
        };
        starsArray.push(star);
      }
      setStars(starsArray); // Actualiza el estado con las estrellas generadas.
    };

    generateStars();
    window.addEventListener("resize", generateStars); // Regenera las estrellas al redimensionar la ventana.

    // Maneja el evento de scroll para detectar dirección y estado del scroll.
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Obtiene la posición actual del scroll.
      if (currentScrollY > (handleScroll as any).lastScrollY) {
        setScrollDirection('down'); // Scroll hacia abajo.
      } else if (currentScrollY < (handleScroll as any).lastScrollY) {
        setScrollDirection('up'); // Scroll hacia arriba.
      }
      (handleScroll as any).lastScrollY = currentScrollY;

      setIsScrolling(true); // Indica que el usuario está haciendo scroll.
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current); // Cancela el timeout previo si existe.
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false); // Indica que el scroll se ha detenido.
        setScrollDirection(null); // Reinicia la dirección del scroll.
      }, 550); // Tiempo de espera para detectar el fin del scroll.
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza de eventos al desmontar el componente.
    return () => {
      window.removeEventListener("resize", generateStars);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función que anima las estrellas en cada frame.
  const animateStars = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current; // Calcula el tiempo transcurrido entre frames.
      const scrollMultiplier = isScrolling ? 5 : 1; // Acelera las estrellas durante el scroll.
      const trailLength = isScrolling ? 12 : 24; // Longitud del rastro según el estado de scroll.

      // Actualiza la posición de las estrellas.
      setStars((prevStars) =>
        prevStars.map((star) => {
          let newY = star.y;
          if (scrollDirection === 'down' || (!isScrolling && scrollDirection === null)) {
            newY += star.speed * deltaTime * 0.05 * scrollMultiplier; // Mueve hacia abajo.
          } else if (scrollDirection === 'up') {
            newY -= star.speed * deltaTime * 0.05 * scrollMultiplier; // Mueve hacia arriba.
          }

          // Resetea la posición Y si la estrella se sale de la pantalla.
          if (newY > window.innerHeight) {
            newY = 0;
          } else if (newY < 0) {
            newY = window.innerHeight;
          }

          // Actualiza el rastro de la estrella.
          const newTrail = [...star.trail, { x: star.x, y: newY }];
          if (newTrail.length > trailLength) {
            newTrail.shift(); // Elimina los puntos más antiguos del rastro.
          }

          return { ...star, y: newY, trail: newTrail }; // Retorna la estrella actualizada.
        })
      );
    }

    previousTimeRef.current = time; // Actualiza el tiempo del frame actual.
    requestRef.current = requestAnimationFrame(animateStars); // Solicita el siguiente frame.
  };

  // Inicia la animación de las estrellas.
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateStars);
    return () => cancelAnimationFrame(requestRef.current!); // Limpia la animación al desmontar.
  }, [isScrolling, scrollDirection]);

  // Renderiza las estrellas y sus rastros.
  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <React.Fragment key={star.id}>
          <div
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}px`, // Posición en el eje X.
              top: `${star.y}px`, // Posición en el eje Y.
              width: `${star.size}px`, // Tamaño de la estrella.
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 1}px #fff`, // Efecto de brillo.
            }}
          />
          {star.trail.map((point, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${point.x}px`,
                top: `${point.y}px`,
                width: `${star.size * 0.8}px`, // Tamaño reducido para el rastro.
                height: `${star.size * 0.8}px`,
                opacity: ((index + 1) / star.trail.length) * 0.5, // Opacidad gradual.
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stars;
