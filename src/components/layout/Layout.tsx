import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActionButton from '../ui/FloatingActionButton';

interface LayoutProps {
  children: ReactNode;
  showFAB?: boolean;
}

const Layout = ({ children, showFAB = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {showFAB && <FloatingActionButton />}
    </div>
  );
};

export default Layout;
