import axios from 'axios';
import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';

const API_KEY = '138e32556a4bf40175aa9261e110ed29';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

class MovieDetailsPage extends Component {
  state = {
    posterPath: '',
    title: '',
    releaseDate: '',
    voteAverage: '',
    overview: '',
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    await this.setState({
      posterPath: response.data.poster_path
        ? `${BASE_IMG_URL}${response.data.poster_path}`
        : '',
      title: response.data.title,
      releaseDate: response.data.release_date,
      voteAverage: response.data.vote_average,
      overview: response.data.overview,
      genres: response.data.genres,
    });
  }

  render() {
    const { url, path } = this.props.match;
    return (
      <>
        <section className="movieDetailsSection">
          <div className="mainInfo">
            {this.state.posterPath && (
              <div className="imgWrapper">
                <img src={this.state.posterPath} alt="poster" width="300" />
              </div>
            )}
            <div className="mainInfoContainer">
              <h1>{`${this.state.title}(${this.state.releaseDate.slice(
                0,
                4,
              )})`}</h1>
              <p>{`User score: ${this.state.voteAverage * 10}%`}</p>
              <h2>Overview</h2>
              <p>{this.state.overview}</p>
              <h3>Genres</h3>

              <ul>
                {this.state.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="additionalInfo">
            <li>
              <NavLink exact to={`${url}/cast`}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </section>
      </>
    );
  }
}

export default MovieDetailsPage;
