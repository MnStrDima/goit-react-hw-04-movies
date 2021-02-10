import React, { Component } from 'react';
import axios from 'axios';
import CastList from '../components/CastList/CastList';

const API_KEY = '138e32556a4bf40175aa9261e110ed29';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    const cast = response.data.cast;
    await this.setState({
      cast: cast,
    });
  }

  render() {
    return (
      <>
        <CastList cast={this.state.cast} />
      </>
    );
  }
}
export default Cast;
