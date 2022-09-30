import NavBar from '../nav/navbar';
import Footer from '../footer';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavBar />
      </nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
