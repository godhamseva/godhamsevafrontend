import { Html, Head, Main, NextScript } from 'next/document';

function isGodhamPage(page) {
  return page === '/' || page === '/gallery' || (page || '').startsWith('/godham');
}

export default function Document(props) {
  const isGodham = isGodhamPage(props.__NEXT_DATA__?.page);

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={isGodham ? '/assets/godham/logo.jpg' : '/favicon.ico'} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
