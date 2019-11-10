const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const app = express();
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');
const QueryType = require('./types/query');

app.use(bodyParser.json());
app.use(cors());
app.use(errorhandler());

const typeDefs = QueryType;

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
// The GraphQL endpoint
app.use('/graphql', graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3001, () => {
  console.log('App listening on 3001');
});
