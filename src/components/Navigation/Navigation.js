import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.siteNav}>
      <NavLink
        exact
        to={routes.homePage}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to={routes.moviesPage}
        className={styles.navLink}
        activeClassName={styles.activeNavLink}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
