import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = '138e32556a4bf40175aa9261e110ed29';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    const cast = response.data.cast;
    await this.setState({
      cast: cast,
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path && (
                <div className="actorPhotoWrapper">
                  <img
                    src={`${BASE_IMG_URL}${actor.profile_path}`}
                    alt="posterWithActor"
                    width="100"
                  />
                </div>
              )}

              <span>{actor.name}</span>
              <span>Character: {actor.character}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Cast;
