import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Filter, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import StatusBadge from '@/components/ui/StatusBadge';
import { locations, categories } from '@/data/locations';

const MapView = () => {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Dynamically load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => setMapLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;

    const L = (window as any).L;
    if (!L) return;

    // Initialize map
    const map = L.map('map').setView([-6.2088, 106.8456], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Filter locations
    const filteredLocations = locations.filter(
      loc => !selectedCategory || loc.category.toLowerCase() === selectedCategory
    );

    // Add markers
    filteredLocations.forEach((location) => {
      const color = location.status === 'complete' ? '#3ECF8E' : 
                    location.status === 'partial' ? '#F5A623' : '#FF6B6B';

      const icon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            width: 32px;
            height: 32px;
            background: ${color};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px ${color}40;
            border: 3px solid white;
          ">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3" fill="${color}"/>
            </svg>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });

      const marker = L.marker(location.coordinates, { icon }).addTo(map);

      marker.on('click', () => {
        setSelectedLocation(location);
      });
    });

    return () => {
      map.remove();
    };
  }, [mapLoaded, selectedCategory]);

  return (
    <Layout showFAB={false}>
      <div className="relative h-[calc(100vh-5rem)]">
        {/* Map Container */}
        <div id="map" className="w-full h-full" />

        {/* Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="absolute top-4 left-4 z-[1000] btn-secondary bg-card"
        >
          <Filter className="w-4 h-4" />
          Filter
        </button>

        {/* Filter Sidebar */}
        {showFilters && (
          <div className="absolute top-4 left-4 z-[1000] w-72 card-base p-4 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold">Filter</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                  !selectedCategory
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                Semua Kategori
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? '' : cat.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-4 border-t border-border">
              <h4 className="font-medium text-sm mb-3">Legend</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-success" />
                  <span>Accessible</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-warning" />
                  <span>Partial</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-destructive" />
                  <span>Not Accessible</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Location Popup */}
        {selectedLocation && (
          <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[1000] card-base p-4 animate-scale-in">
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-3 right-3"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-lg mb-1 truncate">
                  {selectedLocation.name}
                </h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedLocation.city}</span>
                </div>
                <StatusBadge status={selectedLocation.status} size="sm" />
              </div>
            </div>

            <Link
              to={`/location/${selectedLocation.id}`}
              className="btn-primary w-full mt-4 justify-center text-sm"
            >
              Lihat Detail
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MapView;
