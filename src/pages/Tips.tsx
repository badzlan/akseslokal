import { CheckCircle, AlertTriangle, Ruler, DoorOpen, ArrowUpRight, Square } from 'lucide-react';
import Layout from '@/components/layout/Layout';

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
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="badge-neutral mb-4 animate-fade-in">Panduan</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 animate-fade-in-up">
                Tips Membangun <span className="gradient-text">Fasilitas Aksesibel</span>
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
                Panduan praktis untuk menciptakan bangunan dan fasilitas publik yang ramah bagi semua orang
              </p>
            </div>
          </div>
        </section>

        {/* Tips Sections */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-16">
              {tips.map((tip, index) => (
                <div
                  key={tip.title}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
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
                        <div
                          key={i}
                          className={`flex items-start gap-3 p-3 rounded-xl ${
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
                      ))}
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={tip.image}
                        alt={tip.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
                Tips Singkat Lainnya
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {quickTips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Infographic Section */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                Standar Ukuran Penting
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-background/10 rounded-2xl">
                  <p className="text-4xl font-bold text-primary mb-2">90cm</p>
                  <p className="text-background/70 text-sm">Lebar ramp minimum</p>
                </div>
                <div className="text-center p-6 bg-background/10 rounded-2xl">
                  <p className="text-4xl font-bold text-primary mb-2">80cm</p>
                  <p className="text-background/70 text-sm">Lebar pintu minimum</p>
                </div>
                <div className="text-center p-6 bg-background/10 rounded-2xl">
                  <p className="text-4xl font-bold text-primary mb-2">150cm</p>
                  <p className="text-background/70 text-sm">Ruang putar toilet</p>
                </div>
                <div className="text-center p-6 bg-background/10 rounded-2xl">
                  <p className="text-4xl font-bold text-primary mb-2">1:12</p>
                  <p className="text-background/70 text-sm">Rasio kemiringan ideal</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Tips;
