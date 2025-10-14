// News article side
export enum Side {
  Front,
  Back
}

// Article media object
export interface Media {
  featured_image_url: string,
  related_video_url: string,
  media_justification: string
}

// Geospatial information object
export interface Geo {
  lat: number,
  lng: number,
  map_url: string
}

// Article context object
export interface Context {
  wikipedia_snippet: string,
  social_sentiment: string,
  search_trend: string,
  geo: Geo
}

// An article
export interface Article {
  id: string,
  slug: string,
  title: string,
  body: string,
  summary: string,
  tags: string[],
  category: string,
  relevance_score: number,
  source_url: string,
  publisher: string,
  published_at: string,
  ingested_at: string,
  media: Media,
  context: Context,
}
