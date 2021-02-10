import styles from './ReviewsList.module.css';
import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => {
  return reviews.length > 0 ? (
    <ul className={styles.reviewList}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={styles.listItem}>
          <h4 className={styles.reviewTitle}>Author: {author}</h4>
          <p className={styles.content}>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles.content}>We don't have any reviews for this movie.</p>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
}.isRequired;
