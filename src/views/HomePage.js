import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <h1> Homepage </h1>
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

export default HomePage;
