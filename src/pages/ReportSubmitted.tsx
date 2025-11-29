import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const ReportSubmitted = () => {
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
              Laporan Berhasil Dikirim!
            </h1>
            
            <p className="text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
              Terima kasih telah berkontribusi! Laporan Anda akan segera diverifikasi oleh tim kami dan ditambahkan ke database AksesLokal.
            </p>

            <div className="card-base p-6 mb-8 animate-fade-in-up animation-delay-200">
              <h3 className="font-heading font-semibold text-lg mb-3">Apa selanjutnya?</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Tim kami akan memverifikasi informasi yang Anda kirim
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Lokasi akan muncul di peta setelah diverifikasi
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Anda akan mendapat notifikasi ketika lokasi telah dipublikasikan
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
              <Link to="/explore" className="btn-primary">
                Kembali ke Explore
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/add-report" className="btn-secondary">
                Laporkan Tempat Lain
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReportSubmitted;
