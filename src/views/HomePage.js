import { Component } from 'react';
import Preloader from '../components/Preloader/Preloader';
import MoviesList from '../components/MoviesList/MoviesList';
import { pageTitles } from '../utils/pageTitles';
import fetchAPI from '../services/moviesFetchAPI';

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  };
  componentDidMount() {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies = async () => {
    try {
      fetchAPI
        .fetchTrending()
        .then(({ results }) =>
          this.setState({ movies: results, isLoading: false }),
        );
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  render() {
    const { movies, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesList movies={movies} pageTitle={pageTitles.TRENDING} />
        )}
      </>
    );
  }
}

export default HomePage;
