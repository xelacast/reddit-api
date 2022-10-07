import { useEffect, useState } from 'react';
import Header from '../components/users/header';
import styles from '../styles/subreddits.module.scss';
import DataContainer from '../components/utils/dataContainer';
import { aboutUser } from '../utils/content/dataContainerContent';

const Users = () => {
  const [user, setUser] = useState('elon_musk');
  const [userUrl, setUserUrl] = useState('user/elon_musk/about.json');

  useEffect(() => {
    setUserUrl(`user/${user}/about.json`);
  }, [user]);

  return (
    <section id="subreddits" className={styles.container}>
      <div className={styles.header}>
        <Header setter={setUser} url={userUrl} />
      </div>

      <DataContainer url={userUrl} info={aboutUser} />
    </section>
  );
};

export default Users;
