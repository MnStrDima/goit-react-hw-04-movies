import Preloader from '../components/Preloader/Preloader';
import { Component } from 'react';
import MoviesDetailsSection from '../components/MovieDetailsSection/MovieDetailsSection';
import routes from '../routes';
import fetchAPI from '../services/moviesFetchAPI';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.fetchMovieById(movieId);
  }

  fetchMovieById = async movieId => {
    try {
      await fetchAPI
        .fetchById(movieId)
        .then(movie => this.setState({ movie, isLoading: false }));
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || history.push(routes.homePage));
  };

  render() {
    const { state } = this.props.location;
    const { url, path } = this.props.match;
    const { movie, isLoading, error } = this.state;
    return (
      <>
        {isLoading ? (
          <Preloader />
        ) : (
          movie && (
            <MoviesDetailsSection
              movie={movie}
              url={url}
              path={path}
              locationState={state}
              handleGoBack={this.handleGoBack}
            />
          )
        )}
        {error && <h1> {error}</h1>}
      </>
    );
  }
}

export default MovieDetailsPage;
