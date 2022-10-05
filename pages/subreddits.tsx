import { useState } from 'react';
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

const headerData = {
  title: 'title',
  subs: '245342',
  active: '123',
  language: 'en-us',
  created: 'Jan 5th, 1999',
  filler: 'Filler Data',
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

// const Icons = {
//   Heart: [Heart, ],
//   Friend: Friend,
//   Chart: Chart,
//   Page: Page,
//   Face: Face,
//   Time: Time,
// };

const Subreddits = () => {
  const [subreddit, setSubreddit] = useState('');

  // TODO: add fetch call to reddit API for subreddit
  // TODO: add fetch call to reddit subreddit posts
  // const { data, isLoading, error } = useSubreddit(subreddit);
  // console.log(, isLoading, error);

  return (
    <section id="subreddits" className={styles.container}>
      <div className={styles.header}>
        <SubHeader setter={setSubreddit} data={headerData} />
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
