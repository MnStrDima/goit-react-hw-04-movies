import axios from 'axios';
import { Component } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import { pageTitles } from '../utils/pageTitles';

const API_KEY = '138e32556a4bf40175aa9261e110ed29';

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <MoviesList
          movies={this.state.movies}
          pageTitle={pageTitles.TRENDING}
        />
      </>
    );
  }
}

export default HomePage;
