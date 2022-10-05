import { useState } from 'react';
import SubHeader from '../components/subreddits/subHeader';
import Posts from '../components/subreddits/posts';
import styles from '../styles/subreddits.module.scss';
import DataContainer from '../components/utils/dataContainer';

const Subreddits = () => {
  const [subreddit, setSubreddit] = useState('askreddit');

  return (
    <section id="subreddits" className={styles.container}>
      <div className={styles.header}>
        <SubHeader setter={setSubreddit} subreddit={subreddit} />
      </div>

      <DataContainer subreddit={subreddit} />
      <div className={styles.posts}>
        <Posts subreddit={subreddit} />

      </div>
    </section>
  );
};

export default Subreddits;

export async function getStaticProps() {
  const res = await fetch('https://www.reddit.com/r/java.json');
  let posts = await res.json();
  posts = posts.data.children;
  return {
    props: {
      posts,
    },
  };
}
