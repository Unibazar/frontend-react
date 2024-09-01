import '@/styles/global.css';
import PageLayout from './layout';
import ReduxProvider from '@/redux/ReduxProvider';
<<<<<<< HEAD
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps, router }) {
  const noLayoutPages = ['/login', '/register', '/forgot-password', '/otp'];
  const isDynamicRoute = router.pathname.startsWith('/reset/') && router.pathname.endsWith('/password');
  const isNoLayoutPage = noLayoutPages.includes(router.pathname) || isDynamicRoute;

=======

export default function MyApp({ Component, pageProps, router }) {
  const noLayoutPages = ['/login', '/register', '/forgot-password', '/otp'];
  const isNoLayoutPage = noLayoutPages.includes(router.pathname);

  if (isNoLayoutPage) {
    return (
      <>
        <ReduxProvider>
          <Component {...pageProps} />
        </ReduxProvider>
      </>
    );
  }
>>>>>>> 09094d0863b0ebc926addfa4e3051e83365d13b8
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
