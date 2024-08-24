import '@/styles/global.css';
import PageLayout from './layout';
export default function MyApp({ Component, pageProps, router }) {
  const noLayoutPages = ['/login', '/register', '/forgot-password', '/otp'];
  const isNoLayoutPage = noLayoutPages.includes(router.pathname);
  if (isNoLayoutPage) {
    return <Component {...pageProps} />;
  }
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
