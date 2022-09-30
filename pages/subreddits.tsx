import { useState } from 'react';
import Search from '../components/search';
import DataDisplay from '../components/subreddits/dataDisplay';

import styles from '../styles/subreddits.module.scss';

const Subreddits = () => {
  const [user, setUser] = useState('');

  return (
    <section id="profile">
      <div className={styles.search_bar}>
        <Search setUser={setUser} />
        <h2>{user}</h2>
      </div>
      <div>
        <DataDisplay user={user} />
      </div>
    </section>
  );
};

export default Subreddits;
