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
  async componentDidMount() {
    await this.fetchTrendingMovies();
  }

  fetchTrendingMovies = async () => {
    try {
      const response = await fetchAPI.fetchTrending();
      if (response.ok) {
        const data = await response.json();
        const { results } = data;
        return this.setState({ movies: results, isLoading: false });
      }
      return Promise.reject(
        new Error(`Sorry. Something went wrong. Can't find anything.`),
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
