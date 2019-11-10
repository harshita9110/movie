const { searchByMovieTitle } = require('../actions/movie');

module.exports = async (req, res) => {
  console.log('search');
  try {
    const resp = await searchByMovieTitle(req.body.data.search);

    res.status(200).send({ data: resp.data });
  } catch (err) {
    res.status(500).send({ error: `Unable to search movie ${err}` });
  }
};
