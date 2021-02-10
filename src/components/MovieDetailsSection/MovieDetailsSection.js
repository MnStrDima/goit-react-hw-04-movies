import styles from './MovieDetailsSection.module.css';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import PropTypes from 'prop-types';

const MovieDetailsSection = ({
  posterPath,
  title,
  releaseDate,
  voteAverage,
  overview,
  genres,
  url,
  path,
  handleGoBack,
}) => {
  return (
    <>
      <section className={styles.movieDetailsSection}>
        <div className={styles.infoWrapper}>
          {posterPath && (
            <div className={styles.imgWrapper}>
              <button
                type="button"
                className={styles.backButton}
                onClick={handleGoBack}
              >
                Go back
              </button>
              <img src={posterPath} alt="poster" />
            </div>
          )}
          <div className={styles.mainInfoContainer}>
            <h1 className={styles.sectionTitle}>{`${title}(${releaseDate.slice(
              0,
              4,
            )})`}</h1>
            <p className={styles.description}>{`User score: ${
              voteAverage * 10
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
        <AdditionalInfo url={url} path={path} />
      </section>
    </>
  );
};

export default MovieDetailsSection;

MovieDetailsSection.propTypes = PropTypes.shape({
  posterPath: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  url: PropTypes.string,
  path: PropTypes.string,
  handleGoBack: PropTypes.func,
}).isRequired;
