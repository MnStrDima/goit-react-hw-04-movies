import axios from 'axios';
import { Component } from 'react';
import MoviesDetailsSection from '../components/MovieDetailsSection/MovieDetailsSection';
import { routes } from '../routes';

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

    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = response.data;

    await this.setState({
      posterPath: poster_path ? `${BASE_IMG_URL}${poster_path}` : '',
      title: title,
      releaseDate: release_date,
      voteAverage: vote_average,
      overview: overview,
      genres: genres,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.homePage);
  };

  render() {
    const { url, path } = this.props.match;
    const {
      posterPath,
      title,
      releaseDate,
      voteAverage,
      overview,
      genres,
    } = this.state;
    return (
      <>
        <MoviesDetailsSection
          posterPath={posterPath}
          title={title}
          releaseDate={releaseDate}
          voteAverage={voteAverage}
          overview={overview}
          genres={genres}
          url={url}
          path={path}
          handleGoBack={this.handleGoBack}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
