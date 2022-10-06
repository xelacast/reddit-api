import { useState } from 'react';
import SubHeader from '../components/subreddits/subHeader';
import styles from '../styles/subreddits.module.scss';
import DataContainer from '../components/utils/dataContainer';

const Users = () => {
  const [user, setUser] = useState('askreddit');

  return (
    <section id="subreddits" className={styles.container}>
      <div className={styles.header}>
        <SubHeader setter={setUser} state={user} />
      </div>

      <DataContainer subreddit={user} />
    </section>
  );
};

export default Users;
