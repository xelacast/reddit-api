import useSubreddit from '../../hooks/useSubreddit';
import Search from '../searchBar/search';
import styles from './header.module.scss';
import Image from 'next/image';

const Header = ({ setter, url }) => {
  const { data, error } = useSubreddit(url);
  if (!data && !error) {
    return <div>Loading</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <Image
            src={data.data ? data.data.snoovatar_img : ''}
            alt="users"
            width={63}
            height={100}
            layout="fixed"
          />
          <h1 data-testid="user-title">
            {data.data ? data.data.name : data.error}
          </h1>
          <p>
            {data.data ? data.data.subreddit.public_description : data.error}
          </p>
        </div>
        <Search setter={setter} />
      </div>

    </div>
  );
};

export default Header;
