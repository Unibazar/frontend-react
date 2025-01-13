import '@/styles/global.css';
import PageLayout from './layout';
import ReduxProvider from '@/redux/ReduxProvider';
import DashboardLayout from './dashboard/layout';

export default function MyApp({ Component, pageProps, router }) {
  const noLayoutPages = ['/login', '/register', '/forgot-password', '/otp', '/404', '/onboarding'];
  const isDynamicRoute = router.pathname.startsWith('/reset/') && router.pathname.endsWith('/password');
  const isNoLayoutPage = noLayoutPages.includes(router.pathname) || isDynamicRoute;
  const dashboardRoutes = ['/dashboard', '/dashboard/products', '/dashboard/orderlist', '/dashboard/analytics', '/dashboard/accountsettings', '/dashboard/helpandsupport'  , '/dashboard/linkaccount','/dashboard/overview'];
  const isDashboardLayoutPage = dashboardRoutes.includes(router.pathname);

  if (isNoLayoutPage) {
    return (
      <>
        <ReduxProvider>
          <Component {...pageProps} />
        </ReduxProvider>
      </>
    );
  } else if (isDashboardLayoutPage) {
    return (
      <>
        <ReduxProvider>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </ReduxProvider>
      </>
    );
  }
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
    </ReduxProvider>
  );
}
