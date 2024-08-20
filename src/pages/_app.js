import PageLayout from './layout';
import '../styles/global.css';
export default function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
