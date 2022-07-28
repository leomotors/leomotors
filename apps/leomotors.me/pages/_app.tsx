import "styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Leomotors</title>
        <meta
          name="description"
          content="Brief Introduction about me and as portal to my resume, portfolio, blog"
        />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/59821765?v=4"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
