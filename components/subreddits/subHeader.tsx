import useSWR from 'swr';
import { useState } from 'react';
import Search from '../searchBar/search';
import styles from './subHeader.module.scss';

const SubHeader = ({ setter, subreddit }) => {
  const fetcher = async (url) => await fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    `https://www.reddit.com/r/${subreddit}/about.json`,
    fetcher
  );
  if (!data && !error) {
    return <div>Loading</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 data-testid="sub-title">
          {data.data ? data.data.display_name_prefixed : data.error}
        </h1>
        <Search setter={setter} />
      </div>
      <div className={styles.description}>
        <p>{data.data ? data.data.public_description : data.error}</p>
      </div>
    </div>
  );
};

export default SubHeader;
