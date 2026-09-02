const FESTIVAL_COLORS = [
  "var(--berry)",
  "var(--grape)",
  "var(--sky)",
  "var(--mango)",
  "var(--leaf)",
];

/** Extremely subtle paper grain overlay for a section. */
export function Grain() {
  return <span aria-hidden className="grain-layer pointer-events-none absolute inset-0" />;
}

/** Festival bunting: triangular flags on a gently curved string. */
export function Bunting({
  count = 22,
  className = "top-0",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 overflow-hidden ${className}`}
    >
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="h-6 w-full sm:h-9">
        <path
          d="M0 4 Q300 40 600 22 T1200 4"
          fill="none"
          stroke="color-mix(in oklab, var(--ink) 35%, transparent)"
          strokeWidth="2.5"
        />
      </svg>
      <div className="-mt-5 flex w-full items-start justify-between px-1 sm:-mt-7">
        {Array.from({ length: count }).map((_, i) => {
          const t = i / (count - 1);
          const sag = Math.round(Math.sin(t * Math.PI) * 18 * 100) / 100;
          return (
            <span
              key={i}
              className="sway-slow block h-7 w-4 shrink-0 sm:h-11 sm:w-6"
              style={{
                backgroundColor: FESTIVAL_COLORS[i % FESTIVAL_COLORS.length],
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                transform: `translateY(${sag}px)`,
                marginTop: `${Math.round(sag * 90) / 100}px`,
                animationDelay: `${(i % 7) * 0.22}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const CONFETTI = Array.from({ length: 30 }).map((_, i) => ({
  left: (i * 3.9 + (i % 5) * 2.1) % 100,
  delay: (i % 13) * 0.85,
  duration: 10 + (i % 7),
  size: 6 + (i % 4) * 3,
  color: FESTIVAL_COLORS[i % FESTIVAL_COLORS.length],
  shape: i % 3,
}));

/** Gently falling confetti; purely decorative. */
export function Confetti({ opacity = 0.7 }: { opacity?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {CONFETTI.map((c, i) => (
        <span
          key={i}
          className="absolute top-0 block"
          style={{
            left: `${c.left}%`,
            width: c.size,
            height: c.shape === 0 ? c.size : c.size * 1.9,
            backgroundColor: c.color,
            borderRadius: c.shape === 0 ? "999px" : c.shape === 1 ? "2px" : "40% 60% 55% 45%",
            opacity,
            animation: `confetti-fall ${c.duration}s linear ${c.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}


/** Hand-drawn style star. */
export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.8-6-3.4-6 3.4L7.3 13.4l-5-4.6 6.8-.8L12 1.8z" />
    </svg>
  );
}

/** Hand-drawn spiral. */
export function Spiral({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className} fill="none" stroke="currentColor">
      <path
        d="M32 32c0-5 4-9 9-9s9 4 9 9-5 13-14 13-18-7-18-17S26 8 39 8s21 10 21 22"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small five-petal flower. */
export function Flower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={className} fill="currentColor">
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="20" cy="10" rx="6" ry="9" transform={`rotate(${a} 20 20)`} />
      ))}
      <circle cx="20" cy="20" r="4.5" fill="var(--sun)" />
    </svg>
  );
}

/** Paper plane, used for the "dreams take flight" idea. */
export function PaperPlane({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className} fill="currentColor">
      <path d="M62 4L2 28l20 6 4 22 12-16 18 8L62 4zM24 32L50 12 28 38l-4-6z" opacity="0.95" />
    </svg>
  );
}

/** Abstract wings backdrop for oversized typography. */
export function Wings({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 300" aria-hidden className={className} fill="none">
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.55">
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={`l${i}`}
            d={`M300 150 C ${220 - i * 30} ${140 - i * 26}, ${120 - i * 20} ${180 + i * 6}, ${40 - i * 6} ${120 + i * 30}`}
          />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={`r${i}`}
            d={`M300 150 C ${380 + i * 30} ${140 - i * 26}, ${480 + i * 20} ${180 + i * 6}, ${560 + i * 6} ${120 + i * 30}`}
          />
        ))}
      </g>
    </svg>
  );
}

/** Simple dove silhouette. */
export function Dove({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" aria-hidden className={className} fill="currentColor">
      <path d="M8 52c14 6 30 8 44 4 10-3 16-10 24-18 6-6 14-10 22-9-3-6-9-10-16-10 4-4 9-6 15-6-8-5-19-5-27 1-8 6-12 15-20 21-9 7-22 9-34 6-4-1-8-2-11-4l3 15z" />
      <circle cx="88" cy="19" r="2.5" fill="var(--ink)" />
    </svg>
  );
}

/** Organic curved divider that transitions between two section colors. */
export function CurveDivider({
  color = "var(--cream)",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 ${flip ? "top-0" : "bottom-0"} ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-10 w-full sm:h-16">
        <path
          d="M0 96 C 220 20, 420 132, 700 74 C 960 22, 1180 118, 1440 60 L1440 120 L0 120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/** Row of small dots used as an eyebrow accent. */
export function DotRow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-flex items-center gap-1.5 ${className}`}>
      {FESTIVAL_COLORS.map((c) => (
        <span key={c} className="block h-2 w-2 rounded-full" style={{ backgroundColor: c }} />
      ))}
    </span>
  );
}

