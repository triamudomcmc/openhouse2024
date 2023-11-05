import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import { Provider } from 'next-auth/providers/index';
import Navbar from '@/components/navbar/navbar';
import Head from 'next/head'
import Footer from '@/components/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
