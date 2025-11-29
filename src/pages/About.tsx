import { Target, Eye, Heart, Users, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About = () => {
  const team = [
    {
      name: 'Ahmad Rizki',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Sarah Putri',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Budi Santoso',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Diana Kusuma',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      social: { linkedin: '#', twitter: '#' },
    },
  ];

  const impacts = [
    { value: '125+', label: 'Lokasi Terpetakan' },
    { value: '50+', label: 'Kontributor' },
    { value: '8', label: 'Kota Terjangkau' },
    { value: '10K+', label: 'Pengguna Terbantu' },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 animate-fade-in-up">
                Tentang <span className="gradient-text">AksesLokal</span>
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
                Platform informasi aksesibilitas fasilitas publik yang didedikasikan untuk menciptakan Indonesia yang lebih inklusif bagi semua.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-base p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Tujuan Kami</h3>
                <p className="text-muted-foreground">
                  Memetakan dan menyediakan informasi aksesibilitas fasilitas publik di seluruh Indonesia secara transparan dan akurat.
                </p>
              </div>

              <div className="card-base p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Visi</h3>
                <p className="text-muted-foreground">
                  Menjadi platform terdepan yang mendorong terciptanya lingkungan inklusif dan aksesibel di Indonesia.
                </p>
              </div>

              <div className="card-base p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Misi</h3>
                <p className="text-muted-foreground">
                  Memberdayakan komunitas untuk berpartisipasi aktif dalam pemetaan aksesibilitas demi kesetaraan akses bagi difabel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge-neutral mb-4">Cerita Kami</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Berawal dari Kepedulian
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AksesLokal lahir dari pengalaman pribadi pendiri kami yang menemani seorang teman pengguna kursi roda mengunjungi berbagai tempat publik di Jakarta. Kami merasakan langsung betapa sulitnya menemukan informasi tentang aksesibilitas suatu tempat sebelum berkunjung.
                  </p>
                  <p>
                    Sejak 2024, kami membangun platform ini dengan misi sederhana: memastikan setiap orang, termasuk penyandang disabilitas, dapat merencanakan kunjungan ke tempat publik dengan lebih baik dan percaya diri.
                  </p>
                  <p>
                    Dengan bantuan komunitas kontributor yang luar biasa, kami telah memetakan ratusan lokasi dan terus bertumbuh setiap hari.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Dampak Sosial
              </h2>
              <p className="text-background/70">
                Perjalanan kami dalam menciptakan perubahan positif
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impacts.map((impact, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                    {impact.value}
                  </p>
                  <p className="text-background/70">{impact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Tim Kami
              </h2>
              <p className="text-muted-foreground">
                Orang-orang di balik AksesLokal
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="card-base p-6 text-center animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex justify-center gap-2">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="card-base p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                  Hubungi Kami
                </h2>
                <p className="text-muted-foreground mb-8">
                  Punya pertanyaan, saran, atau ingin berkolaborasi? Kami senang mendengar dari Anda.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:info@akseslokal.id" className="text-foreground hover:text-primary transition-colors">
                      info@akseslokal.id
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">+62 21 1234 5678</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Jakarta, Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
