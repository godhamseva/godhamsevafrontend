import Head from 'next/head';

const SITE_URL = 'https://godhamsevatrust.org';
const OG_IMAGE = `${SITE_URL}/assets/godham/logo.jpg`;

export default function GodhamHead({
  title = 'Godham Trust — गौ सेवा | Cow Shelter & Old Age Home',
  description = 'Godham Trust runs cow shelters (goshalas) and a Vridhaashram (old age home) across India, providing rescue, daily feed, medical care and shelter to mother cows and destitute elders. Donate to support Gau Seva or Vridhaashram Seva.',
  path = '/',
  noindex = false,
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Godham Trust" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Tiro+Devanagari+Hindi&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
