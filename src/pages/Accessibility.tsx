import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Eye, Ear, Hand, Brain, Accessibility as AccessibilityIcon } from 'lucide-react';
import Layout from '@/components/layout/Layout';

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
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="badge-neutral mb-4 animate-fade-in">Edukasi</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 animate-fade-in-up">
                Apa itu <span className="gradient-text">Aksesibilitas</span>?
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
                Aksesibilitas adalah kemudahan yang disediakan bagi penyandang disabilitas guna mewujudkan kesamaan kesempatan dalam segala aspek kehidupan dan penghidupan.
              </p>
            </div>
          </div>
        </section>

        {/* Why Important Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Mengapa Aksesibilitas Penting?
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Hak Asasi Manusia</h3>
                      <p className="text-muted-foreground text-sm">Setiap orang berhak mengakses fasilitas publik tanpa diskriminasi.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Kemandirian</h3>
                      <p className="text-muted-foreground text-sm">Memungkinkan difabel beraktivitas secara mandiri dan bermartabat.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Inklusi Sosial</h3>
                      <p className="text-muted-foreground text-sm">Menciptakan masyarakat yang inklusif dan tidak ada yang tertinggal.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Manfaat untuk Semua</h3>
                      <p className="text-muted-foreground text-sm">Ramp juga membantu lansia, ibu hamil, dan pengguna troli.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800"
                    alt="Accessibility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Tipe Fasilitas Aksesibel
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Berikut adalah berbagai jenis fasilitas yang membuat suatu tempat menjadi aksesibel bagi difabel
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div
                  key={facility.title}
                  className="card-base p-6 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
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
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-heading font-bold text-primary mb-2">22.5M</p>
                <p className="text-background/70">Penyandang disabilitas di Indonesia</p>
              </div>
              <div>
                <p className="text-5xl font-heading font-bold text-primary mb-2">8.5%</p>
                <p className="text-background/70">Dari total populasi Indonesia</p>
              </div>
              <div>
                <p className="text-5xl font-heading font-bold text-primary mb-2">30%</p>
                <p className="text-background/70">Fasilitas publik yang aksesibel</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="card-base p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Ingin Belajar Lebih Lanjut?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Pelajari berbagai tipe difabel dan tips membangun fasilitas yang aksesibel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/difabel" className="btn-primary">
                  Tipe Difabel
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/tips" className="btn-secondary">
                  Tips Membangun
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Accessibility;
