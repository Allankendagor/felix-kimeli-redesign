interface WaveDividerProps {
  variant?: 'top' | 'bottom';
  className?: string;
}

const WaveDivider = ({ variant = 'bottom', className = '' }: WaveDividerProps) => {
  const isTop = variant === 'top';
  
  return (
    <div className={`absolute ${isTop ? 'top-0 rotate-180' : 'bottom-0'} left-0 w-full overflow-hidden leading-none ${className}`}>
      <svg
        className="relative block w-full h-16 md:h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Background wave - slowest */}
        <path
          className="animate-wave-slow fill-primary/5"
          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,45 1200,60 L1200,120 L0,120 Z"
        />
        {/* Middle wave - medium speed */}
        <path
          className="animate-wave-reverse fill-primary/10"
          d="M0,80 C200,40 400,100 600,60 C800,20 1000,80 1200,50 L1200,120 L0,120 Z"
        />
        {/* Front wave - normal speed */}
        <path
          className="animate-wave fill-card"
          d="M0,90 C150,60 350,100 500,70 C700,30 850,90 1000,60 C1100,40 1150,70 1200,80 L1200,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
