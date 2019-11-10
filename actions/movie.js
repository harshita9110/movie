const axios = require('axios');
const config = require('../config.json');

const headers = {
  headers: { Authorization: 'bearer ' + config.MovieAPIAuthToken }
};
const getPopularMovies = async () => {
  try {
    const resp = await axios.get('https://api.themoviedb.org/3/movie/popular', headers);
    return resp.data.results;
  } catch (err) {
    console.log('Get popular movies failed');
    throw new Error(`Get popular movies failed ${err.toString()}`);
  }
};

const searchByMovieTitle = async searchStr => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/search/movie?page=1&language=en-US&query=${searchStr}`,
      headers
    );
    return resp.data.results;
  } catch (err) {
    console.log(`Search for keyword ${searchStr} failed`);
    throw new Error(`Search for keyword ${searchStr} failed`);
  }
};

const getMovieDetails = async movieId => {
  try {
    const resp = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, headers);

    return resp.data;
  } catch (err) {
    console.log(`Get movie details for ${movieId} failed`);
    throw new Error(`Get movie details for ${movieId} failed`);
  }
};

module.exports = {
  getPopularMovies,
  searchByMovieTitle,
  getMovieDetails
};
