import React, { useEffect, useState } from 'react';

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const numStars = 200; // Número de estrellas
      const starsArray = [];
      for (let i = 0; i < numStars; i++) {
        const star = {
          id: i,
          x: Math.random() * window.innerWidth, // Posición inicial aleatoria en X
          y: Math.random() * window.innerHeight, // Posición inicial aleatoria en Y
          size: Math.random() * 0.2 + 1, // Tamaño de las estrellas (1 a 3 píxeles)
          speed: Math.random() * 0.5 + 0.2, // Velocidad lenta y constante (0.2 a 0.7 píxeles/frame)
        };
        starsArray.push(star);
      }
      setStars(starsArray);
    };

    generateStars();
    window.addEventListener("resize", generateStars);

    return () => window.removeEventListener("resize", generateStars);
  }, []);

  useEffect(() => {
    const moveStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          let newY = star.y + star.speed;
          if (newY > window.innerHeight) {
            // Si la estrella sale del fondo, reaparece arriba
            newY = 0;
            star.x = Math.random() * window.innerWidth;
          }
          return { ...star, y: newY };
        })
      );
      requestAnimationFrame(moveStars); // Continúa el ciclo de animación
    };

    const animationId = requestAnimationFrame(moveStars);
    return () => cancelAnimationFrame(animationId); // Limpieza al desmontar
  }, []);

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: "relative",
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: '#fff',
            borderRadius: '50%',
            boxShadow: `0 0 ${star.size * 2}px #fff`
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
