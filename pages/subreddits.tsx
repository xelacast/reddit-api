import { useState } from 'react';
import SubHeader from '../components/subreddits/subHeader';
import Post from '../components/subreddits/post';

import styles from '../styles/subreddits.module.scss';

const headerData = {
  title: 'title',
  subs: '245342',
  active: '123',
  language: 'en-us',
  created: 'Jan 5th, 1999',
  text: 'Ipsuom asdf as fasd fnlja asdlk jk ds jka j adaskjflasdf kmasd flak al ksd',
};

const postData = [
  {
    title: 'oh yeah baby mamam Garcia',
    author: 'jhuiice',
    created: '1234254',
    score: '123',
    body: 'asdfasd',
    ups: '69',
    downs: '420',
    num_comments: '453',
  },
  {
    title: 'oh yeah baby mamam Garcia',
    author: 'jhuiice',
    created: '1234254',
    score: '123',
    body: 'asdfasd',
    ups: '69',
    downs: '420',
    num_comments: '453',
  },
];

const Subreddits = () => {
  const [subreddit, setSubreddit] = useState('');

  // TODO: add fetch call to reddit API for subreddit
  // TODO: add fetch call to reddit subreddit posts
  // const { data, isLoading, error } = useSubreddit(subreddit);
  // console.log(, isLoading, error);

  return (
    <section id="subreddits">
      <div className={styles.search_bar}>
        <SubHeader setter={setSubreddit} data={headerData} />
      </div>

      <ul className={styles.posts}>
        {postData.map((post) => {
          return (
            <li key={post.title} className={styles.post}>
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Subreddits;
