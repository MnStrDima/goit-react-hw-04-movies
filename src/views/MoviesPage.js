import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Preloader from '../components/Preloader/Preloader';
import getQueryParams from '../utils/getQueryParams';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';
import { pageTitles } from '../utils/pageTitles';
import routes from '../routes';
import fetchAPI from '../services/moviesFetchAPI';

class MoviesPage extends Component {
  state = {
    movies: [],
    isLoading: true,
    isSearching: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.setState({ isSearching: true });
      this.fetchMovies(query);
      return;
    }
    this.fetchPopularMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery && nextQuery) {
      this.fetchMovies(nextQuery);
      this.setState({ isSearching: true });
      return;
    }
  }

  fetchMovies = async query => {
    this.setState({ isLoading: true });
    try {
      await fetchAPI.fetchByQuery(query).then(({ results }) => {
        if (results.length === 0) {
          toast("Sorry, but we can't find anything for your query.");
          this.props.history.push(routes.moviesPage);
          this.setState({ isLoading: false });
          return;
        }
        this.setState({ movies: results, isLoading: false });
      });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  fetchPopularMovies = async () => {
    this.setState({ isLoading: false });
    try {
      await fetchAPI.fetchPopular().then(({ results }) => {
        this.setState({ movies: results });
      });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleFormSubmit = searchQuery => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { isLoading, isSearching, error, movies } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handleFormSubmit} />
        {isLoading ? (
          <Preloader />
        ) : isSearching ? (
          <MoviesList movies={movies} pageTitle={pageTitles.RESULT} />
        ) : (
          <MoviesList movies={movies} pageTitle={pageTitles.POPULAR} />
        )}
        {error && <h1> {error}</h1>}
      </>
    );
  }
}

export default MoviesPage;
