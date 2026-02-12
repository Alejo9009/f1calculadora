import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/f1-logo.png" />
        <meta name="description" content="Calculadora de Fórmula 1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}