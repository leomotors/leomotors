import "$styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

import Footer from "$components/layouts/Footer";
import NavBar from "$components/layouts/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Leomotors - Nutthapat Pongtanyavichai</title>
      </Head>

      <div className="flex min-h-screen flex-col bg-slate-900 px-1 text-white">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
