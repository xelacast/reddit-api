import styles from './search.module.scss';
import SearchBar from './searchBar';

const Search = ({ setter }) => {
  return (
    <div className={styles.container}>
      <SearchBar setter={setter} />
    </div>
  );
};

export default Search;
