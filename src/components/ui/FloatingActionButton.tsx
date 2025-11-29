import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const FloatingActionButton = () => {
  return (
    <Link
      to="/add-report"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Laporkan Tempat"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-primary rounded-full animate-pulse-ring" />
        
        {/* Button */}
        <div className="relative flex items-center gap-2 px-5 py-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          <Plus className="w-5 h-5" />
          <span className="font-semibold text-sm hidden sm:inline">Laporkan Tempat</span>
        </div>
      </div>
    </Link>
  );
};

export default FloatingActionButton;
