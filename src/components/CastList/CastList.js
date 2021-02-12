import PropTypes from 'prop-types';
import styles from './CastList.module.css';
import BlankImageLoader from '../BlankImageLoader/BlankImageLoader';
import BASE_IMG_URL from '../../utils/baseImgUrlforFetching';

const CastList = ({ cast }) => {
  return (
    <>
      {cast.length > 0 ? (
        <ul className={styles.castList}>
          {cast.map(({ profile_path, name, character }, index) => (
            <li key={index} className={styles.castListItem}>
              {profile_path ? (
                <div className={styles.actorPhotoWrapper}>
                  <img
                    src={`${BASE_IMG_URL}${profile_path}`}
                    alt="profilePhoto"
                  />
                </div>
              ) : (
                <BlankImageLoader />
              )}
              <div className={styles.descrWrapper}>
                <span className={styles.info}>{name}</span>
                <span className={styles.info}>Character: {character}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.content}>
          We don't have any info about cast for this movie.
        </p>
      )}
    </>
  );
};

export default CastList;

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
}.isRequired;
