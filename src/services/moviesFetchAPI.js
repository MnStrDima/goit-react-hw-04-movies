const API_KEY = '138e32556a4bf40175aa9261e110ed29';

const fetchCastById = async movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Sorry. Something went wrong. Can't find anything.`),
    );
  });
};

const fetchTrending = async () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Sorry. Something went wrong. Can't find anything.`),
    );
  });
};

const fetchReviewsById = async movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Sorry. Something went wrong. Can't find anything.`),
    );
  });
};

const fetchPopular = async () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Sorry. Something went wrong. Can't find anything.`),
    );
  });
};

const fetchByQuery = async query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Sorry. Something went wrong. Can't find anything.`),
    );
  });
};

const fetchById = async movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Sorry. Something went wrong. Choose other film please.`),
    );
  });
};

const fetchAPI = {
  fetchCastById,
  fetchTrending,
  fetchReviewsById,
  fetchPopular,
  fetchByQuery,
  fetchById,
};

export default fetchAPI;
