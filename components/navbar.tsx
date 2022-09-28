import styles from '../styles/navbar.module.scss';
import Dash from '../assets/home-outline.svg';
import User from '../assets/person-circle-outline.svg';
import Article from '../assets/newspaper-outline.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavBar = () => {
  const router = useRouter();
  // TODO Refactor this code to use nav items as components

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Reddit Visuals</h2>
      </div>
      <ul>
        <li className={styles.navItem}>
          <Link href="/">
            <a
              className={
                router.pathname == '/'
                  ? `${styles.navContainer} ${styles.active}`
                  : `${styles.navContainer}`
              }
            >
              <div className={styles.textContainer}>
                <div className={styles.icon}>
                  <Dash width={20} height={20} />
                </div>
                <p>Dashboard</p>
              </div>
              <div className={styles.bar}></div>
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/subreddits">
            <a
              className={
                router.pathname == '/subreddits'
                  ? `${styles.navContainer} ${styles.active}`
                  : `${styles.navContainer}`
              }
            >
              <div className={styles.textContainer}>
                <div className={styles.icon}>
                  <Article width={20} height={20} />
                </div>
                <p>Subreddits</p>
              </div>
              <div className={styles.bar}></div>
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/users">
            <a
              className={
                router.pathname == '/users'
                  ? `${styles.navContainer} ${styles.active}`
                  : `${styles.navContainer}`
              }
            >
              <div className={styles.textContainer}>
                <div className={styles.icon}>
                  <User width={20} height={20} />
                </div>
                <p>Users</p>
              </div>
              <div className={styles.bar}></div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
