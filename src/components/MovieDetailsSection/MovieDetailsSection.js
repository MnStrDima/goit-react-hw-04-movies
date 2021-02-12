import PropTypes from 'prop-types';
import styles from './MovieDetailsSection.module.css';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import BlankImageLoader from '../BlankImageLoader/BlankImageLoader';
import BASE_IMG_URL from '../../utils/baseImgUrlforFetching';

const MovieDetailsSection = ({
  movie,
  url,
  path,
  handleGoBack,
  locationState,
}) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <>
      <section className={styles.movieDetailsSection}>
        <div className={styles.infoWrapper}>
          <div className={styles.imgWrapper}>
            <button
              type="button"
              className={styles.backButton}
              onClick={handleGoBack}
            >
              Go back
            </button>
            {poster_path ? (
              <img src={`${BASE_IMG_URL}${poster_path}`} alt="poster" />
            ) : (
              <BlankImageLoader />
            )}
          </div>

          <div className={styles.mainInfoContainer}>
            <h1 className={styles.sectionTitle}>{`${title}(${release_date.slice(
              0,
              4,
            )})`}</h1>
            <p className={styles.description}>{`User score: ${
              vote_average * 10
            }%`}</p>
            <h2 className={styles.sectionTitle}>Overview:</h2>
            <p className={styles.description}>{overview}</p>
            <h3 className={styles.sectionTitle}>Genres:</h3>

            <ul className={styles.genresList}>
              {genres.map(({ id, name }) => (
                <li key={id} className={styles.genresListItem}>
                  <span className={styles.genre}>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AdditionalInfo url={url} path={path} locationState={locationState} />
      </section>
    </>
  );
};

export default MovieDetailsSection;

MovieDetailsSection.propTypes = PropTypes.shape({
  movie: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleGoBack: PropTypes.func.isRequired,
  locationState: PropTypes.object.isRequired,
}).isRequired;
