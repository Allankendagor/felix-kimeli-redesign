interface WaveDividerProps {
  variant?: 'top' | 'bottom';
  className?: string;
  intensity?: 'subtle' | 'medium' | 'intense';
  speed?: 'slow' | 'normal' | 'fast';
}

const WaveDivider = ({
  variant = 'bottom',
  className = '',
  intensity = 'medium',
  speed = 'normal',
}: WaveDividerProps) => {
  const isTop = variant === 'top';
  const speedMultiplier = speed === 'slow' ? 1.6 : speed === 'fast' ? 0.7 : 1;
  const showAdvancedEffects = intensity !== 'subtle';

  return (
    <div
      className={`
        absolute ${isTop ? 'top-0 rotate-180' : 'bottom-0'} 
        left-0 w-full overflow-hidden leading-none ${className}
      `}
    >
      {/* Optional subtle glow background */}
      {showAdvancedEffects && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-xl opacity-50 pointer-events-none" />
      )}

      <svg
        className="relative block w-full h-20 md:h-32"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveMain" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--card))" stopOpacity="0.92" />
            <stop offset="100%" stopColor="hsl(var(--card))" stopOpacity="1" />
          </linearGradient>

          {showAdvancedEffects && (
            <>
              <linearGradient id="waveAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
                <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.12" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
              </linearGradient>
              <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.2" />
              </filter>
            </>
          )}
        </defs>

        {/* Back layer - slow & subtle */}
        {showAdvancedEffects && (
          <path
            className="animate-wave-slow"
            fill="url(#waveAccent)"
            d="M0,45 C140,90 320,10 520,55 C720,95 920,25 1120,60 L1200,120 L0,120 Z"
            style={{ animationDuration: `${12 * speedMultiplier}s` }}
          />
        )}

        {/* Middle layer - medium speed */}
        <path
          className="animate-wave-medium"
          fill="url(#waveMain)"
          fillOpacity={showAdvancedEffects ? '0.25' : '0.15'}
          d="M0,70 C180,40 380,100 580,65 C780,30 980,90 1180,70 L1200,120 L0,120 Z"
          style={{ animationDuration: `${8 * speedMultiplier}s` }}
        />

        {/* Front layer - fastest & sharp */}
        <path
          className={`animate-wave-fast ${showAdvancedEffects ? 'fill-accent/10' : 'fill-card/40'}`}
          d="M0,92 C120,72 280,108 480,88 C680,68 880,104 1080,90 C1160,80 1200,92 L1200,120 L0,120 Z"
          style={{ animationDuration: `${5 * speedMultiplier}s` }}
        />

        {/* Sparkles - only when intensity = intense */}
        {intensity === 'intense' && (
          <g className="animate-wave-sparkle">
            <circle cx="180" cy="75" r="1.4" fill="hsl(var(--primary))" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="620" cy="82" r="1.8" fill="hsl(var(--accent))" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.95;0.6" dur="3.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="950" cy="78" r="1.2" fill="hsl(var(--primary))" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.85;0.5" dur="3.1s" repeatCount="indefinite" />
            </circle>
          </g>
        )}
      </svg>
    </div>
  );
};

export default WaveDivider;
