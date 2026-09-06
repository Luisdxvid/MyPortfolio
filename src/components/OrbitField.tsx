import { useEffect, useRef } from 'react';

interface Star {
  xFactor: number;
  yFactor: number;
  size: number;
  phase: number;
  speed: number;
}

interface Ring {
  rxFactor: number;
  ryRatio: number;
  tilt: number;
  period: number;
  phase: number;
  dotSize: number;
  opacity: number;
}

const STAR_COUNT = 110;

const RINGS: Ring[] = [
  { rxFactor: 0.3, ryRatio: 0.42, tilt: -0.32, period: 34, phase: 0.2, dotSize: 2.6, opacity: 0.5 },
  { rxFactor: 0.5, ryRatio: 0.38, tilt: -0.1, period: 50, phase: 2.4, dotSize: 3, opacity: 0.42 },
  { rxFactor: 0.7, ryRatio: 0.36, tilt: 0.14, period: 68, phase: 4.1, dotSize: 2.4, opacity: 0.34 },
  { rxFactor: 0.92, ryRatio: 0.33, tilt: 0.36, period: 88, phase: 1.1, dotSize: 3.4, opacity: 0.26 },
];

const OrbitField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const primaryRef = useRef('152 55% 40%');
  const starColorRef = useRef('40 15% 88%');
  const pointerRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const readThemeColors = () => {
      const styles = getComputedStyle(document.documentElement);
      primaryRef.current = styles.getPropertyValue('--primary').trim();
      starColorRef.current = styles.getPropertyValue('--portfolio-stars').trim();
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          xFactor: Math.random(),
          yFactor: Math.random(),
          size: 0.5 + Math.random() * 1.2,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.5,
        });
      }
      starsRef.current = stars;
    };

    const drawFrame = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const starColor = starColorRef.current;
      starsRef.current.forEach((star) => {
        const twinkle = 0.35 + 0.4 * Math.sin(now / 1000 * star.speed + star.phase);
        ctx.fillStyle = `hsl(${starColor} / ${Math.max(twinkle, 0.05)})`;
        ctx.beginPath();
        ctx.arc(star.xFactor * canvas.width, star.yFactor * canvas.height, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      const primary = primaryRef.current;
      const parallaxX = pointerRef.current.x * 16;
      const parallaxY = pointerRef.current.y * 16;
      const cx = canvas.width * 0.5 + parallaxX;
      const cy = canvas.height * 0.46 + parallaxY;
      const baseUnit = Math.min(Math.min(canvas.width, canvas.height, 1000) * 0.4, 460);

      // Soft core glow, like a distant star
      const glowRadius = baseUnit * 0.5;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
      glow.addColorStop(0, `hsl(${primary} / 0.22)`);
      glow.addColorStop(1, `hsl(${primary} / 0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      RINGS.forEach((ring) => {
        const rx = baseUnit * ring.rxFactor;
        const ry = rx * ring.ryRatio;

        ctx.strokeStyle = `hsl(${primary} / ${ring.opacity * 0.4})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, ring.tilt, 0, Math.PI * 2);
        ctx.stroke();

        const angle = ring.phase + (now / 1000 / ring.period) * Math.PI * 2;
        const localX = rx * Math.cos(angle);
        const localY = ry * Math.sin(angle);
        const px = cx + localX * Math.cos(ring.tilt) - localY * Math.sin(ring.tilt);
        const py = cy + localX * Math.sin(ring.tilt) + localY * Math.cos(ring.tilt);

        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsl(${primary} / 0.9)`;
        ctx.fillStyle = `hsl(${primary} / ${Math.min(ring.opacity + 0.4, 1)})`;
        ctx.beginPath();
        ctx.arc(px, py, ring.dotSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Central core dot
      ctx.shadowBlur = 12;
      ctx.shadowColor = `hsl(${primary} / 0.9)`;
      ctx.fillStyle = `hsl(${primary} / 0.85)`;
      ctx.beginPath();
      ctx.arc(cx, cy, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const animate = (now: number) => {
      drawFrame(now);
      animationRef.current = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    const themeObserver = new MutationObserver(readThemeColors);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    readThemeColors();
    resizeCanvas();
    createStars();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      drawFrame(0);
    } else {
      window.addEventListener('pointermove', handlePointerMove);
      animationRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default OrbitField;
