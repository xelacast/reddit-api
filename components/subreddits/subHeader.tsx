import Search from '../searchBar/search';
import styles from './subHeader.module.scss';

const SubHeader = ({ setter, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>r/{data.title}</h1>
        <Search setter={setter} />
      </div>
      <div className={styles.description}>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default SubHeader;
