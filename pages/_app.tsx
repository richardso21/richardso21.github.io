import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { PrismicProvider } from '@prismicio/react';
import { linkResolver } from '../prismicio';
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import Head from 'next/head';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const component: ReactNode = getLayout(<Component {...pageProps} />);

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <Head>
        <link rel="logo" href="/favicon.ico" />
      </Head>
      {component}
      <Analytics />
    </PrismicProvider>
  );
}

export default MyApp;
