import { useState } from 'react';
import SearchIcon from '../../assets/search-outline.svg';
import styles from './searchBar.module.scss';

const SearchBar = ({ setter }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    setter(search);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.icon}>
        <SearchIcon height={17} width={17} />
      </div>
      <input
        type="text"
        className={styles.input}
        id="input-box"
        placeholder="search"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => {
          if (e.key === 'enter') {
            handleSubmit();
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
