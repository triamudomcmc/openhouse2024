import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import { Provider } from 'next-auth/providers/index';
import Navbar from '@/components/navbar/navbar';
import Head from 'next/head'
import Footer from '@/components/footer';
import { useRouter } from 'next/router';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Triamudom Openhouse 2024</title>
        <meta
          name="description"
          content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://openhouse.triamudom.ac.th/" />
        <meta property="og:title" content="Triam Udom Open House 2024" />
        <meta
          property="og:description"
          content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
        />
        <meta property="og:image" content="/assets/preview.png" />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://openhouse.triamudom.ac.th/"
        />
        <meta property="twitter:title" content="Triam Udom Open House 2024" />
        <meta
          property="twitter:description"
          content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
        />
        <meta property="twitter:image" content="/assets/preview.png" />
      </Head>
      {!(router.pathname === "/ticket") && <Navbar />}
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
      {!(router.pathname === "/auth") && !(router.pathname === "/ticket") && <Footer />}
    </SessionProvider>
  );
}
