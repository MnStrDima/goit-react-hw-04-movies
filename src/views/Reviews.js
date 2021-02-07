import React, { Component } from 'react';
import axios from 'axios';

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
        {this.state.reviews.length > 0 ? (
          <ul>
            {this.state.reviews.map(review => (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          "We don't have any reviews for this movie."
        )}
      </>
    );
  }
}
export default Reviews;
