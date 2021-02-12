import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';
import BlankImageLoader from '../BlankImageLoader/BlankImageLoader';
import BASE_IMG_URL from '../../utils/baseImgUrlforFetching';

const MoviesList = ({ movies, location, pageTitle }) => {
  return (
    <>
      <div className={styles.listWrapper}>
        {pageTitle && <h1 className={styles.pageTitle}> {pageTitle}</h1>}
        <ul className={styles.moviesList}>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id} className={styles.movieListItem}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
              >
                {poster_path ? (
                  <img src={`${BASE_IMG_URL}${poster_path}`} alt="poster" />
                ) : (
                  <BlankImageLoader />
                )}

                <span className={styles.movieTitle}>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default withRouter(MoviesList);

MoviesList.propTypes = PropTypes.shape({
  movies: PropTypes.array,
  location: PropTypes.object,
  pageTitle: PropTypes.string,
}).isRequired;
