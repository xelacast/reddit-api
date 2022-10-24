import useSubreddit from '../../hooks/useSubreddit';
import Search from '../searchBar/search';
import styles from './subHeader.module.scss';

const SubHeader = ({ setter, url }) => {
  const { data, error } = useSubreddit(url);

  if (!data && !error) {
    return <div>Loading</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 data-testid="sub-title">
          {data?.data ? data.data.display_name_prefixed : '404'}
        </h1>
        <Search setter={setter} />
      </div>
      <div className={styles.description}>
        <p>{data?.data ? data.data.public_description : '404'}</p>
      </div>
    </div>
  );
};

export default SubHeader;
