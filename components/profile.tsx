import { useState } from 'react';

const Profile = () => {
  const [url, setUrl] = useState('');

  const handleSearch = (e) => {
    // setUrl(e.target.value)
    //* dispatch a component ?
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <section id="profile">
      <div className="container">
        <div className="search-bar">
          <input type="text" onChange={(e) => handleChange(e)} />
          <input type="submit" value="Seach" onClick={handleSearch} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
