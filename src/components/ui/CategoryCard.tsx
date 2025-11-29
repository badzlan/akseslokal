import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: number;
  href: string;
  delay?: number;
}

const CategoryCard = ({ icon: Icon, title, count, href, delay = 0 }: CategoryCardProps) => {
  return (
    <Link
      to={href}
      className="card-base card-hover group p-6 flex flex-col items-center text-center animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="font-heading font-semibold text-lg text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{count} lokasi</p>
      <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Lihat semua</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
};

export default CategoryCard;
