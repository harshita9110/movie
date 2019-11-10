module.exports = `
type SpokenLanguages { iso_639_1: String name: String }

type ProductionCountries { iso_3166_1: String name: String }

type ProductionCompanies { id: Int
  logo_path: String
  name: String
  origin_country: String }

type Genres { id: Int name: String }

type BelongsToCollection { id: Int
  name: String
  poster_path: String
  backdrop_path: String }

type MovieDetail { adult: Boolean
  backdrop_path: String
  budget: Int
  homepage: String
  id: Int
  imdb_id: String
  original_language: String
  original_title: String
  overview: String
  popularity: Float
  poster_path: String
  release_date: String
  revenue: Int
  runtime: Int
  status: String
  tagline: String
  title: String
  video: Boolean
  vote_average: Float
  vote_count: Int
  spoken_languages: [SpokenLanguages]
  production_countries: [ProductionCountries]
  production_companies: [ProductionCompanies]
  genres: [Genres]
  belongs_to_collection: BelongsToCollection }
`;
