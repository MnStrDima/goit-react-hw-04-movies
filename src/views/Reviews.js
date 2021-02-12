import React, { Component } from 'react';
import ReviewsList from '../components/ReviewsList/ReviewsList';
import fetchAPI from '../services/moviesFetchAPI';

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    this.fetchReviews(movieId);
  }

  fetchReviews = async movieId => {
    try {
      await fetchAPI
        .fetchReviewsById(movieId)
        .then(({ results }) => this.setState({ reviews: results }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { reviews, error } = this.state;
    return <>{error ? <p>{error}</p> : <ReviewsList reviews={reviews} />}</>;
  }
}
export default Reviews;
