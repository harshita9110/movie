const { getPopularMovies, searchByMovieTitle, getMovieDetails } = require('./actions/movie');
module.exports = {
  Query: {
    popular: () => {
      return getPopularMovies();
    },
    search: (parent, args) => {
      const { value } = args;
      return searchByMovieTitle(value);
    },
    detail: (parent, args) => {
      const { id } = args;
      return getMovieDetails(id);
    }
  }
};
