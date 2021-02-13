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
    await this.fetchReviews(movieId);
  }

  fetchReviews = async movieId => {
    try {
      const response = await fetchAPI.fetchReviewsById(movieId);
      if (response.ok) {
        const data = await response.json();
        const { results } = data;
        return this.setState({ reviews: results });
      }
      return Promise.reject(
        new Error(`Sorry. Something went wrong. Can't find anything.`),
      );
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
