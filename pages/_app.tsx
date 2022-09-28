import { JSX as LocalJSX } from '@ionic/core';
import { JSX as IoniconsJSX } from 'ionicons';
import { HTMLAttributes } from 'react';

import '../styles/globals.scss';
import { AppProps } from 'next/app';
import Layout from '../components/layout';

type ToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, 'className'> & {
      class?: string;
      key?: string;
    };
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace JSX {
    type IntrinsicElements = ToReact<
      LocalJSX.IntrinsicElements & IoniconsJSX.IntrinsicElements
    >;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
