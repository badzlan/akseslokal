import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Building, Bus, Hospital, MapPin, Users, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/ui/CategoryCard';
import StatCard from '@/components/ui/StatCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ParallaxBackground from '@/components/ui/ParallaxBackground';
import ParallaxSection from '@/components/ui/ParallaxSection';
import heroImage from '@/assets/hero-accessibility.png';
import { useParallax, useScrollProgress } from '@/hooks/useParallax';

const Index = () => {
  const categories = [
    { icon: GraduationCap, title: 'Kampus', count: 25, href: '/explore?category=kampus' },
    { icon: Building, title: 'Masjid', count: 42, href: '/explore?category=masjid' },
    { icon: Bus, title: 'Halte', count: 38, href: '/explore?category=halte' },
    { icon: Hospital, title: 'Rumah Sakit', count: 20, href: '/explore?category=rumah-sakit' },
  ];

  const { ref: heroParallax, offset: heroOffset } = useParallax({ speed: 0.3 });
  const scrollProgress = useScrollProgress();

  return (
    <Layout>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 section-padding min-h-[90vh] flex items-center">
        <ParallaxBackground variant="vibrant" shapesCount={6} />
        
        <div className="container-custom relative">
          <div ref={heroParallax} className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fade-down" delay={0}>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
                style={{ transform: `translateY(${heroOffset * 0.5}px)` }}
              >
                Akses untuk <span className="gradient-text">Semua</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={150}>
              <p 
                className="text-lg md:text-xl text-muted-foreground mb-8"
                style={{ transform: `translateY(${heroOffset * 0.3}px)` }}
              >
                Informasi aksesibilitas fasilitas publik agar lingkungan menjadi lebih inklusif untuk difabel.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="zoom-in" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/explore" className="btn-primary text-base group">
                  Explore Locations
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/accessibility" className="btn-secondary text-base">
                  Pelajari Aksesibilitas
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-background relative">
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Jelajahi Berdasarkan Kategori
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Temukan informasi aksesibilitas berbagai fasilitas publik di Indonesia
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <ScrollReveal 
                key={category.title} 
                animation="fade-up" 
                delay={index * 100}
              >
                <CategoryCard
                  {...category}
                  delay={0}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section with Parallax */}
      <ParallaxSection 
        className="section-padding"
        backgroundColor="hsl(var(--muted) / 0.3)"
        speed={0.15}
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <span className="badge-neutral mb-4">Edukasi</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Apa itu Aksesibilitas?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Aksesibilitas adalah kemudahan yang disediakan bagi penyandang disabilitas guna mewujudkan kesamaan kesempatan. Fasilitas aksesibel memungkinkan semua orang, termasuk difabel, untuk mengakses dan menggunakan tempat publik dengan mandiri dan bermartabat.
                </p>
                <div className="space-y-3 mb-8">
                  {['Ramp & jalur landai', 'Toilet difabel', 'Guiding block', 'Lift & eskalator'].map((item, index) => (
                    <ScrollReveal key={index} animation="fade-left" delay={index * 100 + 200}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                <Link to="/accessibility" className="btn-primary group">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="zoom-in" delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={heroImage}
                    alt="Ilustrasi aksesibilitas inklusif"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Statistics Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <ParallaxBackground variant="subtle" shapesCount={4} />
        
        <div className="container-custom relative">
          <ScrollReveal animation="zoom-in">
            <div className="card-base p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Dampak AksesLokal
                </h2>
                <p className="text-muted-foreground">
                  Bersama-sama kita menciptakan Indonesia yang lebih inklusif
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {[
                  { icon: MapPin, value: "125+", label: "Tempat Sudah Dilaporkan" },
                  { icon: CheckCircle, value: "80%", label: "Memiliki Ramp" },
                  { icon: Users, value: "50+", label: "Kontributor Aktif" },
                ].map((stat, index) => (
                  <ScrollReveal key={stat.label} animation="fade-up" delay={index * 150}>
                    <StatCard
                      icon={stat.icon}
                      value={stat.value}
                      label={stat.label}
                      delay={0}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section with Parallax Background */}
      <ParallaxSection
        className="section-padding"
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920"
        overlay
        overlayOpacity={0.85}
        speed={0.2}
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <ScrollReveal animation="fade-down">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Bantu Kami Memetakan Aksesibilitas Indonesia
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={150}>
              <p className="text-primary-foreground/70 mb-8">
                Laporkan fasilitas publik di sekitarmu dan bantu difabel menemukan tempat yang ramah untuk dikunjungi.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="zoom-in" delay={300}>
              <Link 
                to="/add-report" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg"
              >
                Laporkan Tempat Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Index;
