import { Nunito } from 'next/font/google';
// import '@/app/globals.css';
import AppNavBar from '../components/common/AppNavBar/AppNavBar';
import Footer from '../components/common/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '@/redux/slice/userSlice';
import { useEffect } from 'react';

const nunito = Nunito({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export default function PageLayout({ children }) {


  const dispatch = useDispatch();

  useEffect(() => {

    if (localStorage.getItem('jwtToken')) {
      dispatch(loadUser());
    }
  }, [])

  return (
    <div className={nunito.className}>
      <AppNavBar />
      <div className="section">{children}</div>
      <Footer />
    </div>
  );
}
