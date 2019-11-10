const app = (module.exports = require('express')());

app.get('/', (req, res) => {
  res.send({ data: 'Server is up and running!' });
});

app.get('/api/movie/popular', require('./popular'));
app.post('/api/movie/search', require('./search'));
app.get('/api/movie/details', require('./details'));

// the catch all route
app.all('*', (req, res) => {
  res.status(404).send({ data: 'Not found' });
});
