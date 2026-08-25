import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  hue: number;
}

interface FloatingParticlesProps {
  burstTrigger?: number; // timestamp or counter when burst should happen
  interactive?: boolean;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  burstTrigger = 0,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const animFrameRef = useRef<number | null>(null);
  const prevBurstTrigger = useRef(burstTrigger);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle count (fewer on mobile for 60fps battery efficiency)
    const isMobile = width < 768;
    const particleCount = isMobile ? 35 : 75;

    // Create initial particle pool
    const createParticles = () => {
      const arr: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        const baseAlpha = 0.15 + Math.random() * 0.55;
        const baseSize = 0.8 + Math.random() * 2.2;
        arr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: -0.15 - Math.random() * 0.35, // subtle upward drift
          size: baseSize,
          baseSize,
          alpha: baseAlpha,
          baseAlpha,
          twinkleSpeed: 0.015 + Math.random() * 0.03,
          twinklePhase: Math.random() * Math.PI * 2,
          // Warm gold to emerald hues
          hue: Math.random() > 0.4 ? 42 : 155,
        });
      }
      particlesRef.current = arr;
    };

    createParticles();

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || isMobile) return;
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Twinkle phase
        p.twinklePhase += p.twinkleSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.twinklePhase) * 0.25;
        if (p.alpha < 0.05) p.alpha = 0.05;
        if (p.alpha > 0.95) p.alpha = 0.95;

        // Mouse avoidance/gentle attraction
        if (mouse.active && interactive && !isMobile) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 0.6;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        // Apply velocities
        p.x += p.vx;
        p.y += p.vy;

        // Dampen any burst velocity back toward base speed
        p.vx *= 0.97;
        if (Math.abs(p.vx) < 0.1) {
          p.vx = (Math.random() - 0.5) * 0.3;
        }

        // Wrap around boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.y > height + 10) p.y = -10;

        // Draw particle with gentle aura
        ctx.beginPath();
        const color =
          p.hue === 42
            ? `rgba(235, 195, 95, ${p.alpha})` // Gold
            : `rgba(110, 231, 183, ${p.alpha * 0.7})`; // Soft Emerald
        
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = p.hue === 42 ? '#fbbf24' : '#34d399';
        ctx.shadowBlur = p.size > 1.5 ? 8 : 4;
        ctx.fill();
      }

      ctx.shadowBlur = 0; // reset
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [interactive]);

  // Handle burst trigger
  useEffect(() => {
    if (burstTrigger > 0 && burstTrigger !== prevBurstTrigger.current) {
      prevBurstTrigger.current = burstTrigger;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Explode existing particles outward from center
      particlesRef.current.forEach((p) => {
        const dx = p.x - centerX;
        const dy = p.y - centerY;
        const angle = Math.atan2(dy, dx) || Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 7;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.size = p.baseSize * 1.6;
        p.alpha = 1;
      });
    }
  }, [burstTrigger]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
