const app = (module.exports = require('express')());
const { getPopularMovies } = require('../actions/movie');

module.exports = async (req, res) => {
  try {
    const resp = await getPopularMovies();

    res.status(200).send({ data: resp.data });
  } catch (err) {
    res.status(500).send({ error: `Unable to get popular movies ${err}` });
  }
};
