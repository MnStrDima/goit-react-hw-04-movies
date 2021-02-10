import styles from './CastList.module.css';
import NoImageBlank from '../../assets/noImageBlank/Noimage.png';
import PropTypes from 'prop-types';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const CastList = ({ cast }) => {
  return (
    <ul className={styles.castList}>
      {cast.map(({ profile_path, name, character }, index) => (
        <li key={index} className={styles.castListItem}>
          {profile_path ? (
            <div className={styles.actorPhotoWrapper}>
              <img src={`${BASE_IMG_URL}${profile_path}`} alt="profilePhoto" />
            </div>
          ) : (
            <div className={styles.actorPhotoWrapper}>
              <img src={NoImageBlank} alt="profilePhoto" />
            </div>
          )}
          <div className={styles.descrWrapper}>
            <span className={styles.info}>{name}</span>
            <span className={styles.info}>Character: {character}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CastList;

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
}.isRequired;
