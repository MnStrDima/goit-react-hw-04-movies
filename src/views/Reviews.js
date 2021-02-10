import React, { Component } from 'react';
import axios from 'axios';
import ReviewsList from '../components/ReviewsList/ReviewsList';

const API_KEY = '138e32556a4bf40175aa9261e110ed29';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
    );
    const reviews = response.data.results;
    await this.setState({
      reviews,
    });
  }

  render() {
    return (
      <>
        <ReviewsList reviews={this.state.reviews} />
      </>
    );
  }
}
export default Reviews;
