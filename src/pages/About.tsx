import { Target, Eye, Heart, Users, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ParallaxBackground from '@/components/ui/ParallaxBackground';
import ParallaxSection from '@/components/ui/ParallaxSection';

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
          <ParallaxBackground variant="vibrant" shapesCount={6} />
          
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal animation="fade-down" delay={0}>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Tentang <span className="gradient-text">AksesLokal</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={150}>
                <p className="text-lg text-muted-foreground">
                  Platform informasi aksesibilitas fasilitas publik yang didedikasikan untuk menciptakan Indonesia yang lebih inklusif bagi semua.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background relative">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: 'Tujuan Kami', desc: 'Memetakan dan menyediakan informasi aksesibilitas fasilitas publik di seluruh Indonesia secara transparan dan akurat.' },
                { icon: Eye, title: 'Visi', desc: 'Menjadi platform terdepan yang mendorong terciptanya lingkungan inklusif dan aksesibel di Indonesia.' },
                { icon: Heart, title: 'Misi', desc: 'Memberdayakan komunitas untuk berpartisipasi aktif dalam pemetaan aksesibilitas demi kesetaraan akses bagi difabel.' },
              ].map((item, index) => (
                <ScrollReveal key={item.title} animation="fade-up" delay={index * 100}>
                  <div className="card-base card-hover p-8 text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <ParallaxSection className="section-padding" backgroundColor="hsl(var(--muted) / 0.3)" speed={0.1}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal animation="fade-right">
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
              </ScrollReveal>

              <ScrollReveal animation="zoom-in" delay={200}>
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800"
                      alt="Team collaboration"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ParallaxSection>

        {/* Impact Stats */}
        <ParallaxSection
          className="section-padding"
          backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920"
          overlay
          overlayOpacity={0.9}
          speed={0.2}
        >
          <div className="container-custom">
            <ScrollReveal animation="fade-down">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-foreground">
                  Dampak Sosial
                </h2>
                <p className="text-primary-foreground/70">
                  Perjalanan kami dalam menciptakan perubahan positif
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impacts.map((impact, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                      {impact.value}
                    </p>
                    <p className="text-primary-foreground/70">{impact.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Team Section */}
        <section className="section-padding bg-background relative overflow-hidden">
          <ParallaxBackground variant="subtle" shapesCount={4} />
          
          <div className="container-custom relative">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Tim Kami
                </h2>
                <p className="text-muted-foreground">
                  Orang-orang di balik AksesLokal
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <ScrollReveal key={member.name} animation="fade-up" delay={index * 100}>
                  <div className="card-base card-hover p-6 text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ParallaxSection className="section-padding" backgroundColor="hsl(var(--muted) / 0.3)" speed={0.1}>
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <ScrollReveal animation="zoom-in">
                <div className="card-base p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                    Hubungi Kami
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Punya pertanyaan, saran, atau ingin berkolaborasi? Kami senang mendengar dari Anda.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 transition-transform hover:scale-105">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href="mailto:info@akseslokal.id" className="text-foreground hover:text-primary transition-colors">
                        info@akseslokal.id
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-3 transition-transform hover:scale-105">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-foreground">+62 21 1234 5678</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 transition-transform hover:scale-105">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Jakarta, Indonesia</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </Layout>
  );
};

export default About;
