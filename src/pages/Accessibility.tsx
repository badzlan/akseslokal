import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ParallaxSection from '@/components/ui/ParallaxSection';
import ParallaxBackground from '@/components/ui/ParallaxBackground';

const Accessibility = () => {
  const facilities = [
    {
      title: 'Ramp / Jalur Landai',
      description: 'Jalur miring yang memungkinkan pengguna kursi roda dan orang dengan kesulitan mobilitas untuk mengakses bangunan tanpa tangga.',
      specs: ['Kemiringan maksimal 1:12', 'Lebar minimal 90 cm', 'Pegangan tangan di kedua sisi'],
      icon: '♿',
    },
    {
      title: 'Guiding Block',
      description: 'Ubin taktil yang memberikan panduan bagi tunanetra untuk menavigasi area publik dengan aman.',
      specs: ['Warna kontras (kuning)', 'Tekstur berbeda untuk stop/jalan', 'Konsisten di seluruh area'],
      icon: '🔲',
    },
    {
      title: 'Toilet Difabel',
      description: 'Toilet yang dirancang dengan ruang dan perlengkapan khusus untuk pengguna kursi roda.',
      specs: ['Ruang putar minimal 150 cm', 'Grab bar di kedua sisi', 'Wastafel dapat diakses'],
      icon: '🚻',
    },
    {
      title: 'Lift Aksesibel',
      description: 'Lift dengan tombol braille, suara pengumuman, dan ukuran yang cukup untuk kursi roda.',
      specs: ['Tombol dengan braille', 'Pengumuman suara', 'Cermin di belakang'],
      icon: '🛗',
    },
    {
      title: 'Signage Braille',
      description: 'Petunjuk dan informasi yang dilengkapi dengan huruf braille untuk tunanetra.',
      specs: ['Tinggi 120-160 cm', 'Kontras warna tinggi', 'Font sans-serif besar'],
      icon: '⠃',
    },
    {
      title: 'Parkir Difabel',
      description: 'Area parkir khusus dengan ruang lebih luas dan dekat dengan pintu masuk.',
      specs: ['Lebar minimal 350 cm', 'Dekat pintu masuk', 'Tanda jelas'],
      icon: '🅿️',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background section-padding">
          <ParallaxBackground variant="default" shapesCount={5} />
          
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal animation="fade-down">
                <span className="badge-neutral mb-4">Edukasi</span>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Apa itu <span className="gradient-text">Aksesibilitas</span>?
                </h1>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg text-muted-foreground">
                  Aksesibilitas adalah kemudahan yang disediakan bagi penyandang disabilitas guna mewujudkan kesamaan kesempatan dalam segala aspek kehidupan dan penghidupan.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Important Section */}
        <ParallaxSection className="section-padding" backgroundColor="hsl(var(--muted) / 0.3)" speed={0.1}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal animation="fade-right">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    Mengapa Aksesibilitas Penting?
                  </h2>
                  <div className="space-y-4">
                    {[
                      { title: 'Hak Asasi Manusia', desc: 'Setiap orang berhak mengakses fasilitas publik tanpa diskriminasi.' },
                      { title: 'Kemandirian', desc: 'Memungkinkan difabel beraktivitas secara mandiri dan bermartabat.' },
                      { title: 'Inklusi Sosial', desc: 'Menciptakan masyarakat yang inklusif dan tidak ada yang tertinggal.' },
                      { title: 'Manfaat untuk Semua', desc: 'Ramp juga membantu lansia, ibu hamil, dan pengguna troli.' },
                    ].map((item, index) => (
                      <ScrollReveal key={item.title} animation="fade-left" delay={index * 100}>
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="zoom-in" delay={200}>
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800"
                      alt="Accessibility"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ParallaxSection>

        {/* Facilities Section */}
        <section className="section-padding bg-background relative overflow-hidden">
          <ParallaxBackground variant="subtle" shapesCount={4} />
          
          <div className="container-custom relative">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Tipe Fasilitas Aksesibel
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Berikut adalah berbagai jenis fasilitas yang membuat suatu tempat menjadi aksesibel bagi difabel
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <ScrollReveal key={facility.title} animation="fade-up" delay={index * 100}>
                  <div className="card-base card-hover p-6 h-full">
                    <div className="text-4xl mb-4">{facility.icon}</div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{facility.description}</p>
                    <ul className="space-y-1">
                      {facility.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-success" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics with Parallax */}
        <ParallaxSection
          className="section-padding"
          backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920"
          overlay
          overlayOpacity={0.9}
          speed={0.2}
        >
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: '22.5M', label: 'Penyandang disabilitas di Indonesia' },
                { value: '8.5%', label: 'Dari total populasi Indonesia' },
                { value: '30%', label: 'Fasilitas publik yang aksesibel' },
              ].map((stat, index) => (
                <ScrollReveal key={stat.value} animation="fade-up" delay={index * 150}>
                  <div>
                    <p className="text-5xl font-heading font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-primary-foreground/70">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <ScrollReveal animation="zoom-in">
              <div className="card-base p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Ingin Belajar Lebih Lanjut?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Pelajari berbagai tipe difabel dan tips membangun fasilitas yang aksesibel
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/difabel" className="btn-primary group">
                    Tipe Difabel
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/tips" className="btn-secondary">
                    Tips Membangun
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Accessibility;
