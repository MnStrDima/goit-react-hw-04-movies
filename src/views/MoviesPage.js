import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';

const API_KEY = '138e32556a4bf40175aa9261e110ed29';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    const filmQuery = this.state.searchQuery;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${filmQuery}`,
    );
    const movies = response.data.results;
    if (prevState.searchQuery !== this.state.searchQuery) {
      await this.setState({ movies });
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <h1>MoviesPage</h1>
        <SearchForm onSubmit={this.handleFormSubmit} />
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
