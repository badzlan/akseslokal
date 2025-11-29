import { useEffect, useState } from 'react';

interface AccessibilityScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const AccessibilityScore = ({ score, size = 'md', showLabel = true }: AccessibilityScoreProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const increment = score / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score]);

  const sizeConfig = {
    sm: { size: 80, strokeWidth: 6, fontSize: 'text-lg' },
    md: { size: 120, strokeWidth: 8, fontSize: 'text-2xl' },
    lg: { size: 160, strokeWidth: 10, fontSize: 'text-4xl' },
  };

  const config = sizeConfig[size];
  const radius = (config.size - config.strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedScore / 100) * circumference;

  const getColor = () => {
    if (score >= 80) return 'hsl(var(--success))';
    if (score >= 50) return 'hsl(var(--warning))';
    return 'hsl(var(--destructive))';
  };

  const getLabel = () => {
    if (score >= 80) return 'Sangat Baik';
    if (score >= 60) return 'Baik';
    if (score >= 40) return 'Cukup';
    return 'Perlu Perbaikan';
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: config.size, height: config.size }}>
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx={config.size / 2}
            cy={config.size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth={config.strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={config.size / 2}
            cy={config.size / 2}
            r={radius}
            fill="none"
            stroke={getColor()}
            strokeWidth={config.strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-heading font-bold ${config.fontSize}`} style={{ color: getColor() }}>
            {animatedScore}
          </span>
          <span className="text-xs text-muted-foreground">/ 100</span>
        </div>
      </div>
      
      {showLabel && (
        <span 
          className="font-semibold text-sm px-3 py-1 rounded-full"
          style={{ backgroundColor: `${getColor()}20`, color: getColor() }}
        >
          {getLabel()}
        </span>
      )}
    </div>
  );
};

export default AccessibilityScore;
