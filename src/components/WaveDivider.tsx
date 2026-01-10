interface WaveDividerProps {
  variant?: 'top' | 'bottom';
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  interactive?: boolean;
}

const WaveDivider = ({ 
  variant = 'bottom', 
  className = '',
  intensity = 'medium',
  interactive = true,
}: WaveDividerProps) => {
  const isTop = variant === 'top';
  const scale = intensity === 'light' ? 0.7 : intensity === 'strong' ? 1.3 : 1;
  
  return (
    <div
      className={`
        absolute ${isTop ? 'top-0 rotate-180' : 'bottom-0'} left-0 w-full 
        overflow-hidden leading-none pointer-events-none group ${className}
      `}
    >
      {/* Interactive mouse/touch following glow */}
      {interactive && (
        <div 
          className="
            pointer-events-none absolute inset-0 -z-10
            bg-[radial-gradient(circle,hsl(var(--primary)/0.2)_0%,transparent_70%)]
            opacity-0 transition-opacity duration-700
            group-hover:opacity-100
            touch-none md:touch-auto
          "
          style={{
            backgroundPosition: 'var(--mouse-x, 50%) var(--mouse-y, 50%)',
            backgroundSize: '180% 180%',
          }}
        />
      )}

      {/* Glow effect layer - enhanced for mobile */}
      <div className="absolute inset-0 blur-xl opacity-50 md:opacity-60">
        <svg
          className="relative block w-full h-16 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            className="animate-wave-glow-fast md:animate-wave-glow"
            fill="url(#glowGradient)"
            d="M0,60 C150,100 350,20 500,60 C650,100 800,30 1000,70 C1100,90 1150,50 1200,60 L1200,120 L0,120 Z"
          />
        </svg>
      </div>

      <svg
        className="relative block w-full h-[clamp(60px,12vh,140px)] md:h-[clamp(80px,16vh,180px)]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ transform: `scaleY(${scale})` }}
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="waveMain" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15">
              <animate attributeName="stop-opacity" values="0.15;0.25;0.15" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.1">
              <animate attributeName="stop-opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15">
              <animate attributeName="stop-opacity" values="0.15;0.25;0.15" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            <stop offset="30%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="waveGradientMain" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--card))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--card))" stopOpacity="1" />
          </linearGradient>

          {/* Mobile-optimized glow filter */}
          <filter id="glowMobile" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>

          {/* Filters for effects */}
          <filter id="waveBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>

        {/* Glow / Aura layer - stronger on mobile */}
        <path
          className="animate-wave-glow-fast md:animate-wave-glow"
          fill="url(#waveMain)"
          filter="url(#glowMobile)"
          opacity="0.75"
          d="M0,45 C140,105 320,15 480,58 C640,101 820,28 980,62 C1080,88 1160,48 1200,55 L1200,120 L0,120 Z"
        />

        {/* Layer 1 - Deepest, slowest wave with gradient */}
        <path
          className="animate-wave-float-fast md:animate-wave-float"
          fill="url(#waveGradient1)"
          d="M0,40 C100,80 200,20 400,50 C600,80 800,30 1000,60 C1100,75 1150,45 1200,55 L1200,120 L0,120 Z"
          style={{ transformOrigin: 'center' }}
        />

        {/* Layer 2 - Ethereal background wave */}
        <path
          className="animate-wave-drift-fast md:animate-wave-drift"
          fill="url(#waveGradient2)"
          filter="url(#waveBlur)"
          d="M0,55 C200,25 350,85 550,45 C750,5 900,75 1050,50 C1150,35 1180,60 1200,45 L1200,120 L0,120 Z"
        />

        {/* Layer 3 - Mid wave with color pulse */}
        <path
          className="animate-wave-slow-fast md:animate-wave-slow"
          fill="url(#waveGradient3)"
          d="M0,65 C150,95 300,45 450,70 C600,95 750,50 900,75 C1000,90 1100,60 1200,70 L1200,120 L0,120 Z"
        />

        {/* Layer 4 - Dynamic middle wave */}
        <path
          className="animate-wave-reverse-fast md:animate-wave-reverse fill-primary/15"
          d="M0,75 C180,50 360,90 540,65 C720,40 900,85 1080,60 C1140,50 1170,70 1200,65 L1200,120 L0,120 Z"
        />

        {/* Layer 5 - Accent wave with shimmer */}
        <path
          className="animate-wave-shimmer-fast md:animate-wave-shimmer fill-accent/10"
          d="M0,82 C120,65 280,95 420,75 C580,55 720,88 880,72 C1000,60 1120,82 1200,78 L1200,120 L0,120 Z"
        />

        {/* Main front wave - more pronounced on mobile */}
        <path
          className="animate-wave-fast md:animate-wave fill-card"
          stroke="hsl(var(--primary)/0.18)"
          strokeWidth="0.6"
          d="M0,78 C110,62 240,95 390,76 C540,57 690,92 840,74 C990,56 1110,88 1200,80 L1200,120 L0,120 Z"
        />

        {/* Thin specular highlight - great on OLED */}
        <path
          className="animate-wave-shimmer-fast"
          fill="none"
          stroke="hsl(0 0% 100% / 0.35)"
          strokeWidth="1.2"
          opacity="0.6"
          d="M0,74 C130,58 260,91 410,72 C560,53 710,88 860,70 C1010,52 1130,84 1200,76"
        />

        {/* Sparkle dots - more visible on mobile */}
        <g className="sparkles">
          {[
            { x: 150, y: 70, delay: 0, r: 1.5 },
            { x: 180, y: 68, delay: 0.3, r: 1.1 },
            { x: 400, y: 60, delay: 0.8, r: 1 },
            { x: 420, y: 62, delay: 1.1, r: 1.1 },
            { x: 650, y: 75, delay: 1.4, r: 2 },
            { x: 680, y: 74, delay: 1.7, r: 1.1 },
            { x: 900, y: 65, delay: 0.4, r: 1.5 },
            { x: 940, y: 66, delay: 0.7, r: 1.1 },
            { x: 1080, y: 71, delay: 2.1, r: 1.1 },
            { x: 1100, y: 72, delay: 2.4, r: 1 },
          ].map((s, i) => (
            <circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill={i % 2 === 0 ? "hsl(var(--primary))" : "white"}
              className="animate-sparkle-mobile"
              style={{ animationDelay: `${s.delay}s` }}
            >
              <animate 
                attributeName="opacity" 
                values="0;0.9;0" 
                dur="2s" 
                repeatCount="indefinite"
                begin={`${s.delay}s`}
              />
              <animate 
                attributeName="r" 
                values={`${s.r};${s.r * 1.5};${s.r}`}
                dur="2s" 
                repeatCount="indefinite"
                begin={`${s.delay}s`}
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default WaveDivider;