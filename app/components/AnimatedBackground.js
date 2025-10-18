import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
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
      { type: 'server', text: '●', x: 0, y: 0, speed: 0.8, size: 8 },
      { type: 'server', text: '■', x: 0, y: 0, speed: 0.9, size: 10 },
    ];

    // Initialize elements
    elements.forEach(element => {
      element.x = Math.random() * canvas.width;
      element.y = Math.random() * canvas.height;
    });

    // Connection lines
    const connections = [];
    for (let i = 0; i < 15; i++) {
      connections.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.3,
      });
    }

    // Floating particles
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      // Clear canvas with slight transparency for trail effect
      ctx.fillStyle = 'rgba(10, 10, 30, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connection lines
      ctx.strokeStyle = 'rgba(100, 100, 255, 0.1)';
      ctx.lineWidth = 1;
      connections.forEach(conn => {
        ctx.beginPath();
        ctx.moveTo(conn.x1, conn.y1);
        ctx.lineTo(conn.x2, conn.y2);
        ctx.stroke();

        // Animate lines
        conn.x1 += conn.speed;
        conn.y1 += conn.speed * 0.5;
        conn.x2 -= conn.speed * 0.7;
        conn.y2 -= conn.speed * 0.3;

        // Reset if off screen
        if (conn.x1 > canvas.width || conn.y1 > canvas.height) {
          conn.x1 = -50;
          conn.y1 = Math.random() * canvas.height;
        }
        if (conn.x2 < 0 || conn.y2 < 0) {
          conn.x2 = canvas.width + 50;
          conn.y2 = Math.random() * canvas.height;
        }
      });

      // Draw particles
      ctx.fillStyle = 'rgba(200, 200, 255, 0.3)';
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.speedX *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.speedY *= -1;
      });

      // Draw tech elements
      elements.forEach(element => {
        let color;
        switch (element.type) {
          case 'code':
            color = 'rgba(100, 200, 255, 0.8)';
            break;
          case 'binary':
            color = 'rgba(100, 255, 200, 0.7)';
            break;
          case 'hex':
            color = 'rgba(255, 100, 255, 0.7)';
            break;
          case 'server':
            color = 'rgba(255, 200, 100, 0.6)';
            break;
          default:
            color = 'rgba(255, 255, 255, 0.7)';
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

      // Draw circuit paths
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const time = Date.now() * 0.001;
        const x = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.3 + i) * 0.5 + 0.5) * canvas.height;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      />
      
      {/* Additional CSS-based animations */}
      <div className="absolute inset-0">
        {/* Pulsing orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-20 animate-ping" />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-500 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-500 rounded-full opacity-40 animate-bounce" />
      </div>
    </div>
  );
}
