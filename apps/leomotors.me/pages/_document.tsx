import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Brief Introduction about me and as portal to my resume, portfolio, blog"
        />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/59821765?v=4"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
