'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Tech elements
    const elements = [
      { type: 'code', text: '</>', x: 0, y: 0, speed: 0.5, size: 20 },
      { type: 'code', text: '{ }', x: 0, y: 0, speed: 0.3, size: 18 },
      { type: 'binary', text: '0101', x: 0, y: 0, speed: 0.4, size: 16 },
      { type: 'binary', text: '1010', x: 0, y: 0, speed: 0.6, size: 14 },
      { type: 'hex', text: '#0xFF', x: 0, y: 0, speed: 0.7, size: 16 },
    ];

    // Initialize elements
    elements.forEach(element => {
      element.x = Math.random() * canvas.width;
      element.y = Math.random() * canvas.height;
    });

    const draw = () => {
      // Clear canvas with slight transparency for trail effect
      ctx.fillStyle = 'rgba(10, 10, 30, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw tech elements
      elements.forEach(element => {
        let color;
        switch (element.type) {
          case 'code':
            color = 'rgba(100, 200, 255, 0.4)';
            break;
          case 'binary':
            color = 'rgba(100, 255, 200, 0.3)';
            break;
          case 'hex':
            color = 'rgba(255, 100, 255, 0.3)';
            break;
          default:
            color = 'rgba(255, 255, 255, 0.3)';
        }

        ctx.fillStyle = color;
        ctx.font = `${element.size}px 'Courier New', monospace`;
        ctx.fillText(element.text, element.x, element.y);

        // Move elements
        element.x += element.speed;
        element.y += Math.sin(Date.now() * 0.001 + element.x * 0.01) * 0.5;

        // Reset if off screen
        if (element.x > canvas.width + 50) {
          element.x = -50;
          element.y = Math.random() * canvas.height;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}
