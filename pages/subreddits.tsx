import { useState } from 'react';
import Search from '../components/search';
import Body from '../components/subreddits/subredditBody';

import styles from '../styles/subreddits.module.scss';

const Subreddits = () => {
  const [subreddit, setSubreddit] = useState('');

  return (
    <section id="profile">
      <div className={styles.search_bar}>
        <Search setter={setSubreddit} />
      </div>
      <div>
        <Body subreddit={subreddit} />
      </div>
    </section>
  );
};

export default Subreddits;
