import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Profile from './profile';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reddit Visualizer</title>
        <meta name="subreddit post" content="subreddit data visualization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
    </>
  );
}
