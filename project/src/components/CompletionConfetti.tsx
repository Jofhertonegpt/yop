import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
}

interface CompletionConfettiProps {
  show: boolean;
}

export function CompletionConfetti({ show }: CompletionConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (show) {
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
      const newParticles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360
      }));
      setParticles(newParticles);

      // Clean up particles after animation
      const timer = setTimeout(() => setParticles([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="confetti"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`
          }}
        />
      ))}
    </>
  );
}