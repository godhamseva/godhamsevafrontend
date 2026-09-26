import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import 'nprogress/nprogress.css';
import CustomAnimation from '@/common/components/custom-animation';
import SEOTags from '@/common/SEOTags';
import GodhamHead from '@/components/Godham/GodhamHead';
import GodhamLoader from '@/components/Godham/GodhamLoader';
import withStore from './store';

function isGodhamPath(pathname) {
  return pathname === '/' || pathname === '/gallery' || pathname.startsWith('/godham');
}

// The loading fallback below has to decide its branding itself (via useRouter)
// rather than being hardcoded, since next/dynamic's `loading` component is
// what actually renders — for every route — until LayoutWrapper's chunk loads.
function AppLoadingFallback() {
  const router = useRouter();
  return isGodhamPath(router.pathname) ? <GodhamLoader /> : <CustomAnimation />;
}

const LayoutWrapper = dynamic(() => import('@/components/app-wrapper'), {
  loading: () => <AppLoadingFallback />,
  ssr: false,
});

// LayoutWrapper (above) opts out of SSR, which means <Component> — and any
// next/head tags a page declares — never reaches the server-rendered HTML
// that link-preview bots and other non-JS crawlers read. So Godham's SEO/OG
// tags have to be rendered here instead, outside that ssr:false boundary.
const GODHAM_META_BY_PATH = {
  '/': {
    title: 'Godham Trust — गौ सेवा | Cow Shelter & Old Age Home',
    description:
      'Godham Trust runs cow shelters (goshalas) and a Vridhaashram (old age home) across India, providing rescue, daily feed, medical care and shelter to mother cows and destitute elders. Donate to support Gau Seva or Vridhaashram Seva.',
    path: '/',
  },
  '/gallery': {
    title: 'Gallery — Godham Trust',
    description: 'Photos from daily life at Godham Trust\'s goshalas and Vridhaashram.',
    path: '/gallery',
  },
  '/godham/admin': {
    title: 'Admin — Godham Trust',
    description: 'Godham Trust content admin.',
    path: '/godham/admin',
    noindex: true,
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
  const isGodham = isGodhamPath(router.pathname);

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
