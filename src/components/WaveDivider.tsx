interface WaveDividerProps {
  variant?: 'top' | 'bottom';
  className?: string;
}

const WaveDivider = ({ variant = 'bottom', className = '' }: WaveDividerProps) => {
  const isTop = variant === 'top';
  
  return (
    <div className={`absolute ${isTop ? 'top-0 rotate-180' : 'bottom-0'} left-0 w-full overflow-hidden leading-none ${className}`}>
      {/* Glow effect layer */}
      <div className="absolute inset-0 blur-xl opacity-60">
        <svg
          className="relative block w-full h-24 md:h-32"
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
            className="animate-wave-glow"
            fill="url(#glowGradient)"
            d="M0,60 C150,100 350,20 500,60 C650,100 800,30 1000,70 C1100,90 1150,50 1200,60 L1200,120 L0,120 Z"
          />
        </svg>
      </div>

      <svg
        className="relative block w-full h-20 md:h-28"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient definitions */}
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

          {/* Filters for effects */}
          <filter id="waveBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>

        {/* Layer 1 - Deepest, slowest wave with gradient */}
        <path
          className="animate-wave-float"
          fill="url(#waveGradient1)"
          d="M0,40 C100,80 200,20 400,50 C600,80 800,30 1000,60 C1100,75 1150,45 1200,55 L1200,120 L0,120 Z"
          style={{ transformOrigin: 'center' }}
        />

        {/* Layer 2 - Ethereal background wave */}
        <path
          className="animate-wave-drift"
          fill="url(#waveGradient2)"
          filter="url(#waveBlur)"
          d="M0,55 C200,25 350,85 550,45 C750,5 900,75 1050,50 C1150,35 1180,60 1200,45 L1200,120 L0,120 Z"
        />

        {/* Layer 3 - Mid wave with color pulse */}
        <path
          className="animate-wave-slow"
          fill="url(#waveGradient3)"
          d="M0,65 C150,95 300,45 450,70 C600,95 750,50 900,75 C1000,90 1100,60 1200,70 L1200,120 L0,120 Z"
        />

        {/* Layer 4 - Dynamic middle wave */}
        <path
          className="animate-wave-reverse fill-primary/15"
          d="M0,75 C180,50 360,90 540,65 C720,40 900,85 1080,60 C1140,50 1170,70 1200,65 L1200,120 L0,120 Z"
        />

        {/* Layer 5 - Accent wave with shimmer */}
        <path
          className="animate-wave-shimmer fill-accent/10"
          d="M0,82 C120,65 280,95 420,75 C580,55 720,88 880,72 C1000,60 1120,82 1200,78 L1200,120 L0,120 Z"
        />

        {/* Layer 6 - Front wave, fastest */}
        <path
          className="animate-wave fill-card"
          d="M0,88 C100,75 220,98 380,82 C540,66 680,95 840,80 C960,68 1080,90 1200,85 L1200,120 L0,120 Z"
        />

        {/* Sparkle dots */}
        <g className="animate-wave-sparkle">
          <circle cx="150" cy="70" r="1.5" fill="hsl(var(--primary))" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="60" r="1" fill="hsl(var(--accent))" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="75" r="2" fill="hsl(var(--primary))" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="65" r="1.5" fill="hsl(var(--accent))" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="72" r="1" fill="hsl(var(--primary))" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default WaveDivider;
