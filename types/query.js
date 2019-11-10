const MovieOverview = require('./movieoverview');
const MovieDetail = require('./moviedetails');
module.exports = `
type Query {
    popular: [MovieOverview!]!
    search(value:String!): [MovieOverview!]!
    detail(id:String!):MovieDetail!
  }
${MovieOverview}
${MovieDetail}
`;
