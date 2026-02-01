import { CheckCircle, AlertTriangle, Ruler, DoorOpen, ArrowUpRight, Square } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ParallaxBackground from '@/components/ui/ParallaxBackground';
import ParallaxSection from '@/components/ui/ParallaxSection';

const Tips = () => {
  const tips = [
    {
      title: 'Cara Membuat Ramp yang Benar',
      icon: ArrowUpRight,
      items: [
        { text: 'Kemiringan maksimal 1:12 (setiap 1 cm tinggi, panjang 12 cm)', correct: true },
        { text: 'Lebar minimal 90 cm untuk satu arah, 180 cm untuk dua arah', correct: true },
        { text: 'Pasang handrail di kedua sisi dengan ketinggian 85-95 cm', correct: true },
        { text: 'Permukaan anti-slip dan rata tanpa hambatan', correct: true },
        { text: 'Sediakan landing setiap 9 meter panjang ramp', correct: true },
        { text: 'Ramp curam > 1:8 berbahaya bagi pengguna kursi roda', correct: false },
      ],
      image: 'https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600',
    },
    {
      title: 'Sudut Kemiringan Ideal',
      icon: Ruler,
      items: [
        { text: '1:12 - Standar ideal untuk semua pengguna', correct: true },
        { text: '1:16 - Lebih nyaman untuk pengguna manual wheelchair', correct: true },
        { text: '1:20 - Terbaik untuk lansia dan pengguna walker', correct: true },
        { text: '1:8 - Terlalu curam, tidak disarankan', correct: false },
        { text: 'Semakin landai semakin baik, tapi perlu ruang lebih', correct: true },
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    },
    {
      title: 'Lebar Pintu Ramah Kursi Roda',
      icon: DoorOpen,
      items: [
        { text: 'Minimum 80 cm untuk akses dasar', correct: true },
        { text: '90 cm ideal untuk kenyamanan optimal', correct: true },
        { text: 'Hindari pintu dengan threshold tinggi', correct: true },
        { text: 'Pintu geser lebih baik dari pintu ayun', correct: true },
        { text: 'Handle pintu tinggi 85-95 cm dari lantai', correct: true },
        { text: 'Pintu 60 cm tidak cukup untuk kursi roda', correct: false },
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    },
    {
      title: 'Guiding Block yang Benar',
      icon: Square,
      items: [
        { text: 'Warna kuning atau kontras dengan lantai sekitar', correct: true },
        { text: 'Tekstur garis (go) untuk arah jalan lurus', correct: true },
        { text: 'Tekstur bulat (stop) untuk persimpangan/peringatan', correct: true },
        { text: 'Lebar jalur minimal 30 cm', correct: true },
        { text: 'Pasang konsisten tanpa terputus', correct: true },
        { text: 'Guiding block rusak/tidak kontras membahayakan', correct: false },
      ],
      image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600',
    },
  ];

  const quickTips = [
    'Libatkan penyandang disabilitas dalam proses desain',
    'Lakukan audit aksesibilitas secara berkala',
    'Sediakan pelatihan staf tentang membantu difabel',
    'Pasang signage dengan font besar dan kontras tinggi',
    'Pastikan jalur evakuasi juga aksesibel',
    'Sediakan kursi roda cadangan di area publik',
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
                <span className="badge-neutral mb-4">Panduan</span>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Tips Membangun <span className="gradient-text">Fasilitas Aksesibel</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-lg text-muted-foreground">
                  Panduan praktis untuk menciptakan bangunan dan fasilitas publik yang ramah bagi semua orang
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Tips Sections */}
        <section className="section-padding bg-background relative">
          <div className="container-custom">
            <div className="space-y-16">
              {tips.map((tip, index) => (
                <div
                  key={tip.title}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <ScrollReveal 
                    animation={index % 2 === 0 ? "fade-right" : "fade-left"} 
                    delay={100}
                    className={index % 2 === 1 ? 'lg:order-2' : ''}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <tip.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-foreground">
                          {tip.title}
                        </h2>
                      </div>
                      
                      <div className="space-y-3">
                        {tip.items.map((item, i) => (
                          <ScrollReveal key={i} animation="fade-up" delay={i * 50}>
                            <div
                              className={`flex items-start gap-3 p-3 rounded-xl transition-transform hover:scale-[1.02] ${
                                item.correct ? 'bg-success/5' : 'bg-destructive/5'
                              }`}
                            >
                              {item.correct ? (
                                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                              ) : (
                                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                              )}
                              <span className={`text-sm ${item.correct ? 'text-foreground' : 'text-destructive'}`}>
                                {item.text}
                              </span>
                            </div>
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal 
                    animation="zoom-in" 
                    delay={200}
                    className={index % 2 === 1 ? 'lg:order-1' : ''}
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={tip.image}
                        alt={tip.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <ParallaxSection className="section-padding" backgroundColor="hsl(var(--muted) / 0.3)" speed={0.1}>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
                  Tips Singkat Lainnya
                </h2>
              </ScrollReveal>
              
              <div className="grid md:grid-cols-2 gap-4">
                {quickTips.map((tip, index) => (
                  <ScrollReveal key={index} animation="fade-up" delay={index * 75}>
                    <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border transition-all hover:shadow-md hover:scale-[1.02]">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{tip}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Infographic Section */}
        <ParallaxSection
          className="section-padding"
          backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
          overlay
          overlayOpacity={0.9}
          speed={0.2}
        >
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal animation="fade-down">
                <h2 className="text-3xl font-heading font-bold mb-8 text-center text-primary-foreground">
                  Standar Ukuran Penting
                </h2>
              </ScrollReveal>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '90cm', label: 'Lebar ramp minimum' },
                  { value: '80cm', label: 'Lebar pintu minimum' },
                  { value: '150cm', label: 'Ruang putar toilet' },
                  { value: '1:12', label: 'Rasio kemiringan ideal' },
                ].map((item, index) => (
                  <ScrollReveal key={item.value} animation="fade-up" delay={index * 100}>
                    <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm transition-transform hover:scale-105">
                      <p className="text-4xl font-bold text-primary mb-2">{item.value}</p>
                      <p className="text-primary-foreground/70 text-sm">{item.label}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </Layout>
  );
};

export default Tips;
