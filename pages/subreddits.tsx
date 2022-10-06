import { useEffect, useState } from 'react';
import SubHeader from '../components/subreddits/subHeader';
import Posts from '../components/subreddits/posts';
import styles from '../styles/subreddits.module.scss';
import DataContainer from '../components/utils/dataContainer';

const Subreddits = () => {
  const [subreddit, setSubreddit] = useState('askreddit');
  const [aboutUrl, setAboutUrl] = useState('r/askreddit/about.json');
  const [subUrl, setSubUrl] = useState('r/askreddit.json');

  useEffect(() => {
    setAboutUrl(`r/${subreddit}/about.json`);
    setSubUrl(`r/${subreddit}.json`);
  }, [subreddit]);

  return (
    <section id="subreddits" className={styles.container}>
      <div className={styles.header}>
        <SubHeader setter={setSubreddit} url={aboutUrl} />
      </div>

      <DataContainer url={aboutUrl} />
      <div className={styles.posts}>
        <Posts url={subUrl} />
      </div>
    </section>
  );
};

export default Subreddits;
