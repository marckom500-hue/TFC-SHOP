import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta name="description" content="TFC SHOP — Votre boutique tech officielle au Cameroun. Écouteurs, power banks, montres connectées et bien plus." />
        <meta name="theme-color" content="#e63329" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
