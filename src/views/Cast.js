import React, { Component } from 'react';
import CastList from '../components/CastList/CastList';
import fetchAPI from '../services/moviesFetchAPI';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.fetchCast(movieId);
  }

  fetchCast = async movieId => {
    try {
      fetchAPI
        .fetchCastById(movieId)
        .then(({ cast }) => this.setState({ cast }));
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
