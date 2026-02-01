import { Eye, Ear, Accessibility, Brain, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ParallaxBackground from '@/components/ui/ParallaxBackground';
import ParallaxSection from '@/components/ui/ParallaxSection';

const Difabel = () => {
  const difabelTypes = [
    {
      title: 'Difabel Netra',
      subtitle: 'Disabilitas Penglihatan',
      icon: Eye,
      color: 'bg-blue-500',
      description: 'Kondisi keterbatasan atau kehilangan kemampuan penglihatan, baik sebagian (low vision) maupun total (tunanetra).',
      needs: [
        'Guiding block / ubin taktil',
        'Audio guidance system',
        'Braille signage',
        'Asisten / guide dog',
        'Screen reader untuk digital',
      ],
      percentage: '3.5%',
    },
    {
      title: 'Difabel Daksa',
      subtitle: 'Disabilitas Fisik',
      icon: Accessibility,
      color: 'bg-green-500',
      description: 'Kondisi keterbatasan fungsi gerak tubuh yang dapat disebabkan oleh berbagai faktor seperti amputasi, polio, atau cedera tulang belakang.',
      needs: [
        'Ramp dengan kemiringan standar',
        'Lift aksesibel',
        'Toilet difabel',
        'Parkir khusus',
        'Kursi roda / alat bantu gerak',
      ],
      percentage: '2.8%',
    },
    {
      title: 'Difabel Rungu',
      subtitle: 'Disabilitas Pendengaran',
      icon: Ear,
      color: 'bg-purple-500',
      description: 'Kondisi keterbatasan atau kehilangan kemampuan pendengaran, baik sebagian (hard of hearing) maupun total (tunarungu).',
      needs: [
        'Visual alert system',
        'Interpreter bahasa isyarat',
        'Caption / subtitle',
        'Hearing loop system',
        'Teks informasi visual',
      ],
      percentage: '2.2%',
    },
    {
      title: 'Difabel Intelektual',
      subtitle: 'Disabilitas Intelektual',
      icon: Brain,
      color: 'bg-orange-500',
      description: 'Kondisi keterbatasan fungsi intelektual dan perilaku adaptif yang mencakup keterampilan sosial dan praktis sehari-hari.',
      needs: [
        'Signage sederhana & jelas',
        'Instruksi bertahap',
        'Lingkungan yang tenang',
        'Pendampingan personal',
        'Informasi mudah dipahami',
      ],
      percentage: '1.5%',
    },
    {
      title: 'Difabel Mental',
      subtitle: 'Disabilitas Psikososial',
      icon: Heart,
      color: 'bg-pink-500',
      description: 'Kondisi gangguan fungsi pikiran, emosional, dan perilaku yang mempengaruhi kemampuan beraktivitas sehari-hari.',
      needs: [
        'Ruang tenang / quiet room',
        'Layanan konseling',
        'Fleksibilitas waktu',
        'Lingkungan supportif',
        'Akses kesehatan mental',
      ],
      percentage: '0.8%',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background section-padding">
          <ParallaxBackground variant="vibrant" shapesCount={5} />
          
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal animation="fade-down">
                <span className="badge-neutral mb-4">Edukasi</span>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Mengenal <span className="gradient-text">Tipe Difabel</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg text-muted-foreground">
                  Memahami berbagai jenis disabilitas adalah langkah pertama untuk menciptakan lingkungan yang inklusif bagi semua orang.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Difabel Types */}
        <section className="section-padding bg-background relative">
          <ParallaxBackground variant="subtle" shapesCount={3} className="fixed" />
          
          <div className="container-custom relative">
            <div className="space-y-8">
              {difabelTypes.map((type, index) => (
                <ScrollReveal 
                  key={type.title} 
                  animation={index % 2 === 0 ? "fade-right" : "fade-left"} 
                  delay={100}
                >
                  <div className="card-base card-hover overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Icon & Title */}
                      <div className={`p-8 ${type.color} text-white flex flex-col justify-center`}>
                        <type.icon className="w-16 h-16 mb-4 opacity-90" />
                        <h2 className="font-heading font-bold text-2xl mb-1">{type.title}</h2>
                        <p className="text-white/80 text-sm">{type.subtitle}</p>
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <p className="text-3xl font-bold">{type.percentage}</p>
                          <p className="text-sm text-white/70">dari populasi Indonesia</p>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="p-8 md:col-span-2">
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {type.description}
                        </p>

                        <h3 className="font-heading font-semibold text-foreground mb-4">
                          Kebutuhan Aksesibilitas:
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {type.needs.map((need, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl transition-transform hover:scale-[1.02]"
                            >
                              <div className={`w-2 h-2 rounded-full ${type.color}`} />
                              <span className="text-sm text-foreground">{need}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Important Note */}
        <ParallaxSection className="section-padding" backgroundColor="hsl(var(--muted) / 0.3)" speed={0.1}>
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal animation="zoom-in">
                <div className="card-base p-8">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Penting untuk Diingat
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Setiap individu dengan disabilitas memiliki kebutuhan yang unik. Klasifikasi di atas adalah panduan umum - selalu tanyakan langsung kepada individu tersebut tentang kebutuhan spesifik mereka. Yang terpenting adalah memperlakukan setiap orang dengan hormat dan martabat.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </Layout>
  );
};

export default Difabel;
