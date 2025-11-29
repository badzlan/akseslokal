import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, Edit, AlertTriangle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AccessibilityScore from '@/components/ui/AccessibilityScore';
import AccessibilityBadge from '@/components/ui/AccessibilityBadge';
import StatusBadge from '@/components/ui/StatusBadge';
import { locations } from '@/data/locations';

const LocationDetail = () => {
  const { id } = useParams();
  const location = locations.find(loc => loc.id === id) || locations[0];

  const facilityLabels = {
    ramp: 'Ramp',
    toilet: 'Toilet Difabel',
    guidingBlock: 'Guiding Block',
    lift: 'Lift',
  };

  return (
    <Layout showFAB={false}>
      <div className="min-h-screen bg-background">
        {/* Cover Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container-custom">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 text-background/80 hover:text-background mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali
              </Link>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-background mb-2">
                {location.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-background/80">
                  <MapPin className="w-4 h-4" />
                  <span>{location.city}</span>
                </div>
                <span className="badge-neutral">{location.category}</span>
                <StatusBadge status={location.status} />
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom py-8 md:py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="card-base p-6 md:p-8">
                <h2 className="font-heading font-semibold text-xl mb-4">Deskripsi</h2>
                <p className="text-muted-foreground leading-relaxed">{location.description}</p>
              </div>

              {/* Facilities */}
              <div className="card-base p-6 md:p-8">
                <h2 className="font-heading font-semibold text-xl mb-6">Fasilitas Aksesibilitas</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(location.facilities).map(([key, value]) => (
                    <AccessibilityBadge
                      key={key}
                      label={facilityLabels[key as keyof typeof facilityLabels]}
                      available={value}
                      size="lg"
                    />
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="card-base p-6 md:p-8">
                <h2 className="font-heading font-semibold text-xl mb-6">Galeri Foto</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {location.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-xl overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`${location.name} photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Accessibility Score */}
              <div className="card-base p-6 md:p-8">
                <h2 className="font-heading font-semibold text-lg mb-6 text-center">
                  Accessibility Score
                </h2>
                <AccessibilityScore score={location.score} size="lg" />
              </div>

              {/* Actions */}
              <div className="card-base p-6">
                <div className="space-y-3">
                  <Link
                    to={`/edit-location/${location.id}`}
                    className="btn-primary w-full justify-center"
                  >
                    <Edit className="w-4 h-4" />
                    Edit Lokasi
                  </Link>
                  <Link
                    to="/add-report"
                    className="btn-secondary w-full justify-center"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    Laporkan Kekurangan
                  </Link>
                </div>
              </div>

              {/* Map Preview */}
              <div className="card-base p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Lokasi di Peta</h3>
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                  <Link
                    to="/map"
                    className="text-primary hover:underline text-sm"
                  >
                    Lihat di Peta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocationDetail;
