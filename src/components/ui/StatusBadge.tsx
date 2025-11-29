type Status = 'complete' | 'partial' | 'not-accessible';

interface StatusBadgeProps {
  status: Status;
  size?: 'sm' | 'md';
}

const statusConfig = {
  complete: {
    label: 'Accessible',
    className: 'badge-success',
  },
  partial: {
    label: 'Partial',
    className: 'badge-warning',
  },
  'not-accessible': {
    label: 'Not Accessible',
    className: 'badge-destructive',
  },
};

const StatusBadge = ({ status, size = 'md' }: StatusBadgeProps) => {
  const config = statusConfig[status];
  
  return (
    <span className={`${config.className} ${size === 'sm' ? 'text-xs px-2 py-0.5' : ''}`}>
      <span className={`w-2 h-2 rounded-full ${
        status === 'complete' ? 'bg-success' : 
        status === 'partial' ? 'bg-warning' : 
        'bg-destructive'
      }`} />
      {config.label}
    </span>
  );
};

export default StatusBadge;
