import { useEffect, useRef } from 'react';

interface Star {
  xFactor: number;
  yFactor: number;
  size: number;
  phase: number;
  speed: number;
  driftX: number;
  driftY: number;
}

interface Particle {
  radius: number;
  angle: number;
  size: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

const STAR_COUNT = 800;
const PARTICLE_COUNT = 100;
const ARM_COUNT = 2;
const ARM_TURNS = 0.9; // how many full turns an arm makes from core to edge
const LINK_DISTANCE = 34;
const SPIN_SPEED = 0.045; // rad/s — slow, majestic rotation
const TILT = -0.2;
const FLATTEN = 0.6;

const getGalaxyRadius = (canvas: HTMLCanvasElement) =>
  Math.min(Math.max(Math.min(canvas.width, canvas.height) * 0.19, 100), 220);

const getWindPerRadius = (maxRadius: number) => (Math.PI * 2 * ARM_TURNS) / maxRadius;

// Gentle drift direction shared by all stars, like a faint cosmic current —
// bigger (nearer) stars drift a little faster, giving a subtle parallax feel.
const STAR_DRIFT_ANGLE = -0.3;
const wrap01 = (value: number) => ((value % 1) + 1) % 1;

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const primaryRef = useRef('152 55% 40%');
  const starColorRef = useRef('40 15% 88%');
  const targetRef = useRef<{ x: number; y: number } | null>(null);
  const currentPosRef = useRef({ x: 0, y: 0 });
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
        const size = 0.4 + Math.pow(Math.random(), 2.2) * 2.2;
        const angle = STAR_DRIFT_ANGLE + (Math.random() - 0.5) * 0.6;
        const driftSpeed = 0.004 + size * 0.004 + Math.random() * 0.003;
        stars.push({
          xFactor: Math.random(),
          yFactor: Math.random(),
          size,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.5,
          driftX: Math.cos(angle) * driftSpeed,
          driftY: Math.sin(angle) * driftSpeed,
        });
      }
      starsRef.current = stars;
    };

    const createParticles = () => {
      const maxRadius = getGalaxyRadius(canvas);
      const windPerRadius = getWindPerRadius(maxRadius);

      const particles: Particle[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const arm = i % ARM_COUNT;
        const armOffset = (arm * Math.PI * 2) / ARM_COUNT;
        const r = Math.pow(Math.random(), 0.65) * maxRadius;
        const jitterR = (Math.random() - 0.5) * maxRadius * 0.08;
        const jitterAngle = (Math.random() - 0.5) * 0.15;

        particles.push({
          radius: Math.max(r + jitterR, 3),
          angle: armOffset + r * windPerRadius + jitterAngle,
          size: 1 + Math.random() * 1.6,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.4 + Math.random() * 0.6,
        });
      }
      particlesRef.current = particles;
    };

    const drawFrame = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const starColor = starColorRef.current;
      const t = now / 1000;
      starsRef.current.forEach((star) => {
        const twinkle = 0.35 + 0.4 * Math.sin(t * star.speed + star.phase);
        const x = wrap01(star.xFactor + star.driftX * t) * canvas.width;
        const y = wrap01(star.yFactor + star.driftY * t) * canvas.height;
        ctx.fillStyle = `hsl(${starColor} / ${Math.max(twinkle, 0.05)})`;
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      const primary = primaryRef.current;

      // Chase the cursor with a bit of trailing inertia; fall back to the
      // viewport center when the pointer hasn't moved (or has left).
      const target = targetRef.current ?? {
        x: canvas.width * 0.5,
        y: canvas.height * 0.46,
      };
      const pos = currentPosRef.current;
      pos.x += (target.x - pos.x) * 0.08;
      pos.y += (target.y - pos.y) * 0.08;
      const cx = pos.x;
      const cy = pos.y;

      const maxRadius = getGalaxyRadius(canvas);
      const spin = (now / 1000) * SPIN_SPEED;
      const cosTilt = Math.cos(TILT);
      const sinTilt = Math.sin(TILT);

      const points = particlesRef.current.map((p) => {
        const theta = p.angle + spin;
        const localX = p.radius * Math.cos(theta);
        const localY = p.radius * Math.sin(theta) * FLATTEN;
        const rx = localX * cosTilt - localY * sinTilt;
        const ry = localX * sinTilt + localY * cosTilt;
        const depth = 1 - Math.min(p.radius / maxRadius, 1);
        const twinkle = 0.75 + 0.25 * Math.sin(now / 1000 * p.twinkleSpeed + p.twinklePhase);
        return { x: cx + rx, y: cy + ry, depth, size: p.size, twinkle };
      });

      // Soft core glow, brighter at the galactic center
      const glowRadius = maxRadius * 1.1;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
      glow.addColorStop(0, `hsl(${primary} / 0.3)`);
      glow.addColorStop(0.4, `hsl(${primary} / 0.1)`);
      glow.addColorStop(1, `hsl(${primary} / 0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // The spiral arms themselves, as smooth curves
      const windPerRadius = getWindPerRadius(maxRadius);
      const armSteps = 48;
      for (let arm = 0; arm < ARM_COUNT; arm++) {
        const armOffset = (arm * Math.PI * 2) / ARM_COUNT;
        ctx.beginPath();
        for (let s = 0; s <= armSteps; s++) {
          const r = (s / armSteps) * maxRadius;
          const theta = armOffset + r * windPerRadius + spin;
          const localX = r * Math.cos(theta);
          const localY = r * Math.sin(theta) * FLATTEN;
          const x = cx + localX * cosTilt - localY * sinTilt;
          const y = cy + localX * sinTilt + localY * cosTilt;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `hsl(${primary} / 0.16)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Faint links tracing the spiral arms
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const depthFade = (a.depth + b.depth) / 2;
            const alpha = (1 - dist / LINK_DISTANCE) * 0.4 * (0.4 + depthFade * 0.6);
            if (alpha <= 0.01) continue;
            ctx.strokeStyle = `hsl(${primary} / ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Stars of the galaxy, brighter and larger toward the core
      points.forEach((point) => {
        const size = point.size * (0.55 + point.depth * 0.9);
        const alpha = (0.32 + point.depth * 0.55) * point.twinkle;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `hsl(${primary} / 0.85)`;
        ctx.fillStyle = `hsl(${primary} / ${alpha})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Bright galactic core
      ctx.shadowBlur = 14;
      ctx.shadowColor = `hsl(${primary} / 0.9)`;
      ctx.fillStyle = `hsl(${primary} / 0.9)`;
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const animate = (now: number) => {
      drawFrame(now);
      animationRef.current = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
    };

    const handlePointerLeave = () => {
      targetRef.current = null;
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    const themeObserver = new MutationObserver(readThemeColors);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    readThemeColors();
    resizeCanvas();
    createStars();
    createParticles();
    currentPosRef.current = { x: canvas.width * 0.5, y: canvas.height * 0.46 };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      drawFrame(0);
    } else {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerleave', handlePointerLeave);
      animationRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
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

export default ParticleField;
