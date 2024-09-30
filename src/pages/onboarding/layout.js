import { Nunito } from 'next/font/google';
import '../../styles/global.css';

const nunito = Nunito({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export default function PageLayout({ children }) {

  return (
    <div className={nunito.className}>
      <div className="section">{children}</div>
    </div>
  );
}
