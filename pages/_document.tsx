import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Salome Githinji | Portfolio</title>
                <link rel="icon" href="/images/icon.jpg" /> {/* Remove this to remove icon */}

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
