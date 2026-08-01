import { useEffect, useRef } from 'react';
import anime from 'animejs';

/**
 * Ambient background: a scattered field of small nodes ("piso" coins / stars —
 * standing in for the paluwagan circle of savers) drifting slowly, plus a couple
 * connecting lines that pulse to suggest members "linked" in a savings circle.
 * Hydrate with client:visible — this is atmosphere, not above-the-fold critical.
 */
export default function HeroField() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !rootRef.current) return;

    const dots = rootRef.current.querySelectorAll<HTMLElement>('.field-dot');

    anime({
      targets: dots,
      translateY: () => anime.random(-14, 14),
      translateX: () => anime.random(-10, 10),
      opacity: () => [anime.random(30, 90) / 100, anime.random(30, 90) / 100],
      easing: 'easeInOutSine',
      duration: () => anime.random(3200, 5200),
      delay: anime.stagger(60, { from: 'center' }),
      direction: 'alternate',
      loop: true,
    });

    const lines = rootRef.current.querySelectorAll<SVGLineElement>('.field-line');
    anime({
      targets: lines,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 2400,
      delay: anime.stagger(300),
      direction: 'alternate',
      loop: true,
    });
  }, []);

  // Fixed positions (percent-based) so SSR markup is deterministic
  const nodes = [
    { x: 18, y: 22 }, { x: 34, y: 12 }, { x: 52, y: 28 }, { x: 68, y: 16 },
    { x: 81, y: 34 }, { x: 12, y: 55 }, { x: 40, y: 62 }, { x: 63, y: 58 },
    { x: 85, y: 68 }, { x: 25, y: 80 }, { x: 55, y: 85 }, { x: 74, y: 90 },
  ];

  const edges = [
    [0, 2], [2, 4], [1, 3], [5, 6], [6, 7], [7, 8], [9, 10], [10, 11],
  ];

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            className="field-line"
            x1={`${nodes[a].x}%`}
            y1={`${nodes[a].y}%`}
            x2={`${nodes[b].x}%`}
            y2={`${nodes[b].y}%`}
            stroke="url(#field-gradient)"
            strokeWidth="1"
            strokeDasharray="6 6"
          />
        ))}
        <defs>
          <linearGradient id="field-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF9F1C" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2EE6D6" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map((n, i) => (
        <span
          key={i}
          className="field-dot absolute h-1.5 w-1.5 rounded-full bg-ember-400/70 shadow-[0_0_12px_2px_rgba(255,159,28,0.35)]"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        />
      ))}
    </div>
  );
}
