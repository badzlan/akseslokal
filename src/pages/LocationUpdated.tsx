import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const LocationUpdated = () => {
  return (
    <Layout showFAB={false}>
      <div className="min-h-[80vh] flex items-center justify-center bg-background section-padding">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            {/* Success Animation */}
            <div className="relative mb-8 animate-scale-in">
              <div className="w-32 h-32 mx-auto rounded-full bg-success/10 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-success" />
                </div>
              </div>
              <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-success/20 animate-ping" />
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 animate-fade-in-up">
              Data Lokasi Telah Diperbarui
            </h1>
            
            <p className="text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
              Perubahan yang Anda buat telah berhasil disimpan. Terima kasih telah membantu menjaga akurasi data aksesibilitas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
              <Link to="/explore" className="btn-primary">
                Kembali ke Explore
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/location/1" className="btn-secondary">
                Lihat Lokasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LocationUpdated;
