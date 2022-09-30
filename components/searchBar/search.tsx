import SearchBar from './searchBar';
import styles from './search.module.scss';
import Temp from '../../assets/heart-outline.svg';

const Search = ({ setter }) => {
  return (
    <div className={styles.container}>
      <SearchBar setter={setter} />
      <Temp height={20} width={20} />
    </div>
  );
};

export default Search;
