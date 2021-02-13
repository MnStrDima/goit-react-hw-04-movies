import React, { Component } from 'react';
import CastList from '../components/CastList/CastList';
import fetchAPI from '../services/moviesFetchAPI';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await this.fetchCast(movieId);
  }

  fetchCast = async movieId => {
    try {
      const response = await fetchAPI.fetchCastById(movieId);
      if (response.ok) {
        const data = await response.json();
        const { cast } = data;
        return this.setState({ cast });
      }
      return Promise.reject(
        new Error(`Sorry. Something went wrong. Can't find anything.`),
      );
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { cast, error } = this.state;
    return <>{error ? <p>{error}</p> : <CastList cast={cast} />}</>;
  }
}
export default Cast;
