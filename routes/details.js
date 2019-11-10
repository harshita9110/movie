const { getMovieDetails } = require('../actions/movie');

module.exports = async (req, res) => {
  try {
    const resp = await getMovieDetails(req.query.movieId);
    res.status(200).send({ data: resp.data });
  } catch (err) {
    res.status(500).send({ error: `Unable to search movie ${err}` });
  }
};
