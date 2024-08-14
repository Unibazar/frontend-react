import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Unibazar',
  description: 'Unibazar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-16x16.png" sizes="any" />
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
