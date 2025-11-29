import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import StatusBadge from './StatusBadge';

interface LocationCardProps {
  id: string;
  name: string;
  city: string;
  category: string;
  image: string;
  status: 'complete' | 'partial' | 'not-accessible';
  delay?: number;
}

const LocationCard = ({ id, name, city, category, image, status, delay = 0 }: LocationCardProps) => {
  return (
    <Link
      to={`/location/${id}`}
      className="card-base card-hover group block overflow-hidden animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={status} />
        </div>
        <div className="absolute top-3 right-3">
          <span className="badge-neutral">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{city}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Lihat Detail</span>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
            <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;
