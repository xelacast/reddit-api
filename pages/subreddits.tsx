import { useState } from 'react';
import SubHeader from '../components/subreddits/subHeader';
import Body from '../components/subreddits/subredditBody';

import styles from '../styles/subreddits.module.scss';

const tempData = {
  title: 'title',
  subs: '245342',
  active: '123',
  language: 'en-us',
  created: 'Jan 5th, 1999',
  text: 'Ipsuom asdf as fasd fnlja asdlk jk ds jka j adaskjflasdf kmasd flak al ksd',
};

const Subreddits = () => {
  const [subreddit, setSubreddit] = useState('');

  return (
    <section id="subreddits">
      <div className={styles.search_bar}>
        <SubHeader setter={setSubreddit} data={tempData} />
      </div>
      <div>
        <Body subreddit={subreddit} />
      </div>
    </section>
  );
};

export default Subreddits;
