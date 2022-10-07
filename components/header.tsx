import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/header.module.scss';

const Header = () => {
  const route = useRouter();
  const [path, setPath] = useState('Dashboard');

  useEffect(() => {
    if (route.pathname === '/') {
      setPath('Dashboard');
    } else {
      setPath(route.pathname.substring(1, route.pathname.length));
    }
  }, [route.pathname]);

  return (
    <section id="header">
      <div className={styles.container}>
        <p>Pages &nbsp; &frasl; &nbsp; {path}</p>
        <h2>{path}</h2>
      </div>
    </section>
  );
};

export default Header;
