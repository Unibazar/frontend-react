import '@/styles/global.css';
import PageLayout from './layout';
import ReduxProvider from '@/redux/ReduxProvider';


export default function MyApp({ Component, pageProps, router }) {
  const noLayoutPages = ['/login', '/register', '/forgot-password','/otp'];
  const isNoLayoutPage = noLayoutPages.includes(router.pathname);

  if (isNoLayoutPage) {
    return <><ReduxProvider><Component {...pageProps} /></ReduxProvider></>
  }
  return (
    <ReduxProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ReduxProvider>
  );
}
