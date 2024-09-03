import '@/styles/global.css';
import PageLayout from './layout';
import ReduxProvider from '@/redux/ReduxProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps, router }) {
  const noLayoutPages = ['/login', '/register', '/forgot-password', '/otp', '/404'];
  const isDynamicRoute = router.pathname.startsWith('/reset/') && router.pathname.endsWith('/password');
  const isNoLayoutPage = noLayoutPages.includes(router.pathname) || isDynamicRoute;

  return (
    <ReduxProvider>
      {isNoLayoutPage ? (
        <>
          <Component {...pageProps} />
        </>
      ) : (
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      )}
      <ToastContainer />
    </ReduxProvider>
  );
}
