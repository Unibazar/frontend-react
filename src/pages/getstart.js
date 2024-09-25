import GetStart from '../components/onBoarding/GetStart/GetStart';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export default function Getstart() {
  return (
    <div className={`${nunito.className} w-full h-screen flex justify-center items-center`}>
      <GetStart />
    </div>
  );
}
