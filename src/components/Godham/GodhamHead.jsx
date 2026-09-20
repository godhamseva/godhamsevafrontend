import Head from 'next/head';

export default function GodhamHead({
  title = 'Godham Trust — गौ सेवा | Cow Shelter & Welfare',
  description = 'Godham Trust runs cow shelters (goshalas) across India, providing rescue, daily feed, medical care and shelter to mother cows. Donate to support Gau Seva.',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Tiro+Devanagari+Hindi&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
