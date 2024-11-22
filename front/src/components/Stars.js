// components/Stars.js
import React, { useEffect, useState } from 'react';

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const numStars = 200; // Ajusta el número de estrellas
      const starsArray = [];
      for (let i = 0; i < numStars; i++) {
        const star = {
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3, // Tamaños de estrellas
        };
        starsArray.push(star);
      }
      setStars(starsArray);
    };

    generateStars();
    window.addEventListener('resize', generateStars);

    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
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
