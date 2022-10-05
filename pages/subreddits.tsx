import { useState } from 'react';
import useSWR from 'swr';
import SubHeader from '../components/subreddits/subHeader';
import Post from '../components/subreddits/post';
import styles from '../styles/subreddits.module.scss';
import Heart from '../assets/heart-outline.svg';
import Friend from '../assets/people-outline.svg';
import Chart from '../assets/stats-chart-outline.svg';
import Page from '../assets/newspaper-outline.svg';
import Face from '../assets/person-circle-outline.svg';
import Time from '../assets/timer-outline.svg';
import DataBox from '../components/utils/dataBox';
import { postData } from '../utils/fillerData';

const Subreddits = () => {
  const [subreddit, setSubreddit] = useState('askreddit');

  return (
    <section id="subreddits" className={styles.container}>
      <div className={styles.header}>
        <SubHeader setter={setSubreddit} subreddit={subreddit} />
      </div>

      <div className={styles.dataContainer}>
        <DataBox icon={Heart} data={'AskReddit'} info={''} />
        <DataBox icon={Friend} data={'123'} info={'Subs'} />
        <DataBox icon={Chart} data={'12345'} info={'Active Users'} />
        <DataBox icon={Page} data={'EN-US'} info={'Language'} />
        <DataBox icon={Face} data={'Jan 5th, 2020'} info={'Created'} />
        <DataBox icon={Time} data={'TEMP'} info={'Friends'} />
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
