import { Nunito } from 'next/font/google';
import '@/app/globals.css';
import AppNavBar from '@/components/common/AppNavBar';
import Footer from '@/components/Footer/Footer';

const nunito = Nunito({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export default function PageLayout({ children }) {
  return (
    <div className={nunito.className}>
      <AppNavBar />
      <div className="section">{children}</div>
      <Footer />
    </div>
  );
}
