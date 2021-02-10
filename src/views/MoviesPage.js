import React, { Component } from 'react';
import axios from 'axios';
import getQueryParams from '../utils/getQueryParams';

import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';
import { pageTitles } from '../utils/pageTitles';

const API_KEY = '138e32556a4bf40175aa9261e110ed29';

class MoviesPage extends Component {
  state = {
    movies: [],
    isSearching: false,
  };

  async componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      return this.fetchMovies(query);
    }
    this.statusToggler();
    this.fetchPopularMovies();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery && nextQuery) {
      this.fetchMovies(nextQuery);
      this.statusToggler();
      return;
    }
  }

  statusToggler = () => {
    this.setState({ isSearching: !this.state.isSearching });
  };

  fetchMovies = async query => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`,
    );
    const movies = response.data.results;
    await this.setState({ movies });
  };

  fetchPopularMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const movies = response.data.results;
    await this.setState({ movies });
  };

  handleFormSubmit = searchQuery => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleFormSubmit} />
        {this.state.isSearching ? (
          <MoviesList
            movies={this.state.movies}
            pageTitle={pageTitles.POPULAR}
          />
        ) : (
          <MoviesList
            movies={this.state.movies}
            pageTitle={pageTitles.RESULT}
          />
        )}
      </>
    );
  }
}

export default MoviesPage;
