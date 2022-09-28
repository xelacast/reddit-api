import { useState } from 'react';

const Search = ({ setUser }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    setUser(search);
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input type="text" onChange={(e) => handleChange(e)} />
        <button onClick={() => handleSubmit()}>Search</button>
      </div>
    </div>
  );
};

export default Search;
