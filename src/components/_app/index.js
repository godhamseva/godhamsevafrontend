import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import 'nprogress/nprogress.css';
import CustomAnimation from '@/common/components/custom-animation';
import SEOTags from '@/common/SEOTags';
import GodhamHead from '@/components/Godham/GodhamHead';
import withStore from './store';
const LayoutWrapper = dynamic(() => import('@/components/app-wrapper'), {
  loading: () => <CustomAnimation />,
  ssr: false,
});

// LayoutWrapper (above) opts out of SSR, which means <Component> — and any
// next/head tags a page declares — never reaches the server-rendered HTML
// that link-preview bots and other non-JS crawlers read. So Godham's SEO/OG
// tags have to be rendered here instead, outside that ssr:false boundary.
const GODHAM_META_BY_PATH = {
  '/': {
    title: 'Godham Trust — गौ सेवा | Cow Shelter & Welfare',
    description:
      'Godham Trust runs cow shelters (goshalas) across India, providing rescue, daily feed, medical care and shelter to mother cows. Donate to support Gau Seva.',
    path: '/',
  },
  '/gallery': {
    title: 'Gallery — Godham Trust',
    description: 'Photos from daily life at Godham Trust\'s goshalas.',
    path: '/gallery',
  },
};
export const metadata = {
  title: 'Apt World',
  description:
    'Apt World',
  icons: {
    icon: '/favicon.ico',
  },
  referrer: 'origin',
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isGodham = router.pathname === '/' || router.pathname === '/gallery' || router.pathname.startsWith('/godham');

  return (
    <>
      {isGodham ? (
        <GodhamHead {...(GODHAM_META_BY_PATH[router.pathname] || GODHAM_META_BY_PATH['/'])} />
      ) : (
        <SEOTags />
      )}

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}

export default withStore(MyApp);
