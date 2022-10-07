import Head from 'next/head';
import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <section>
      <Head>
        <title>Reddit Visualizer</title>
        <meta name="subreddit post" content="subreddit data visualization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1>Welcome to Reddit Data</h1>
          <br />
          <p>
            This dashboard shows you the latest information on your favorite
            subreddits and Users.
          </p>
          <br />
          <p>
            My Curiosity to use the Reddit API was out of pure use of the APP.
          </p>
        </div>
        <div className={styles.inner}>
          <h1>Problems</h1>
          <br />
          <p>
            The Reddit API documentation is poor. The setup of user data, search
            data, and subreddit data were all unique. This caused me to have an
            error of searching a subreddit that has never been created before.
            The url redirected to a search url when I searched my own username
            on the subreddit page.
          </p>
          <br />
          <p>
            My first thought was to inject data into the returned data to show
            an error, but this only caused my loading feature to stop working on
            all pages. I am learning how to fix this issue.
          </p>
        </div>
        <div className={styles.inner}>
          <h1>Why This project was created</h1>
          <br />
          <p>
            I went out and created this project for the sole purpose of learning
            REST APIs, Data Fetching, NEXT.js, TypeScript and to improve my
            abilities with REACT.
          </p>
          <br />
          <p>
            Project Creation took a bit longer than expected. The UI took me
            about 70% of the time to build the project. Learning NEXT, Creating
            tests, and data fetching was the other 30%.
          </p>
        </div>
        <div className={styles.inner}>
          <h1>What I liked</h1>
          <br />
          <p>
            I was in charge of everything from creating designs, to folder
            architecture, to picking out the handful of technologies I wanted to
            use, to then creating the whole thing from scratch. I was a mini
            project manager and it was a journey I am proud I took.
          </p>
          <br />
          <p>
            I enjoyed testing my work. Even though it is not a large portion of
            work I loved seeing the green tick mark on tests run to see my
            creation working properly.
          </p>
        </div>
      </div>
    </section>
  );
}
