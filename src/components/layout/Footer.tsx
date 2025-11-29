import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">AksesLokal</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Platform informasi aksesibilitas fasilitas publik di Indonesia untuk mendukung difabel menciptakan lingkungan yang lebih inklusif.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/explore" className="text-background/70 hover:text-primary transition-colors text-sm">Explore Locations</Link></li>
              <li><Link to="/map" className="text-background/70 hover:text-primary transition-colors text-sm">Map View</Link></li>
              <li><Link to="/add-report" className="text-background/70 hover:text-primary transition-colors text-sm">Laporkan Tempat</Link></li>
              <li><Link to="/accessibility" className="text-background/70 hover:text-primary transition-colors text-sm">Accessibility 101</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/difabel" className="text-background/70 hover:text-primary transition-colors text-sm">Tipe Difabel</Link></li>
              <li><Link to="/tips" className="text-background/70 hover:text-primary transition-colors text-sm">Tips Membangun</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                info@akseslokal.id
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +62 21 1234 5678
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 AksesLokal. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
