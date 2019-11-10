module.exports = `
type MovieOverview  { 
    popularity: Float
    vote_count: Int
    video: Boolean
    poster_path: String
    id: Int
    adult: Boolean
    backdrop_path: String
    original_language: String
    original_title: String
    title: String
    vote_average: Float
    overview: String
    release_date: String
    genre_ids: [Int ] 
}
`;
