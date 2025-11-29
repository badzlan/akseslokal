import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Building, Bus, Hospital, MapPin, Users, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/ui/CategoryCard';
import StatCard from '@/components/ui/StatCard';
import heroImage from '@/assets/hero-accessibility.png';

const Index = () => {
  const categories = [
    { icon: GraduationCap, title: 'Kampus', count: 25, href: '/explore?category=kampus' },
    { icon: Building, title: 'Masjid', count: 42, href: '/explore?category=masjid' },
    { icon: Bus, title: 'Halte', count: 38, href: '/explore?category=halte' },
    { icon: Hospital, title: 'Rumah Sakit', count: 20, href: '/explore?category=rumah-sakit' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 section-padding">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in-up">
              Akses untuk <span className="gradient-text">Semua</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
              Informasi aksesibilitas fasilitas publik agar lingkungan menjadi lebih inklusif untuk difabel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
              <Link to="/explore" className="btn-primary text-base">
                Explore Locations
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/accessibility" className="btn-secondary text-base">
                Pelajari Aksesibilitas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Jelajahi Berdasarkan Kategori
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Temukan informasi aksesibilitas berbagai fasilitas publik di Indonesia
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                {...category}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="badge-neutral mb-4">Edukasi</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Apa itu Aksesibilitas?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Aksesibilitas adalah kemudahan yang disediakan bagi penyandang disabilitas guna mewujudkan kesamaan kesempatan. Fasilitas aksesibel memungkinkan semua orang, termasuk difabel, untuk mengakses dan menggunakan tempat publik dengan mandiri dan bermartabat.
              </p>
              <div className="space-y-3 mb-8">
                {['Ramp & jalur landai', 'Toilet difabel', 'Guiding block', 'Lift & eskalator'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/accessibility" className="btn-primary">
                Pelajari Lebih Lanjut
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={heroImage}
                  alt="Ilustrasi aksesibilitas inklusif"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Terverifikasi</p>
                    <p className="text-sm text-muted-foreground">125+ lokasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="card-base p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Dampak AksesLokal
              </h2>
              <p className="text-muted-foreground">
                Bersama-sama kita menciptakan Indonesia yang lebih inklusif
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <StatCard
                icon={MapPin}
                value="125+"
                label="Tempat Sudah Dilaporkan"
                delay={0}
              />
              <StatCard
                icon={CheckCircle}
                value="80%"
                label="Memiliki Ramp"
                delay={100}
              />
              <StatCard
                icon={Users}
                value="50+"
                label="Kontributor Aktif"
                delay={200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 animate-fade-in-up">
              Bantu Kami Memetakan Aksesibilitas Indonesia
            </h2>
            <p className="text-background/70 mb-8 animate-fade-in-up animation-delay-100">
              Laporkan fasilitas publik di sekitarmu dan bantu difabel menemukan tempat yang ramah untuk dikunjungi.
            </p>
            <Link to="/add-report" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors animate-fade-in-up animation-delay-200">
              Laporkan Tempat Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
