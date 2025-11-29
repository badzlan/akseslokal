import { Check, X, LucideIcon } from 'lucide-react';

interface AccessibilityBadgeProps {
  label: string;
  available: boolean;
  icon?: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
}

const AccessibilityBadge = ({ label, available, icon: Icon, size = 'md' }: AccessibilityBadgeProps) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full transition-all ${sizeClasses[size]} ${
        available
          ? 'bg-success/10 text-success'
          : 'bg-destructive/10 text-destructive'
      }`}
    >
      {Icon && <Icon className={iconSizes[size]} />}
      {available ? (
        <Check className={iconSizes[size]} />
      ) : (
        <X className={iconSizes[size]} />
      )}
      <span>{label}</span>
    </span>
  );
};

export default AccessibilityBadge;
