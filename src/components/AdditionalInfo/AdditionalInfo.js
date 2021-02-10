import { NavLink, Route } from 'react-router-dom';
import Cast from '../../views/Cast';
import Reviews from '../../views/Reviews';
import styles from './AdditionalInfo.module.css';
import PropTypes from 'prop-types';

const AdditionalInfo = ({ url, path }) => {
  return (
    <>
      <ul className={styles.additionalInfo}>
        <li>
          <NavLink
            to={`${url}/cast`}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/reviews`}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Route path={`${path}/cast`} component={Cast} />
      <Route path={`${path}/reviews`} component={Reviews} />
    </>
  );
};
export default AdditionalInfo;

AdditionalInfo.propTypes = {
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}.isRequired;
