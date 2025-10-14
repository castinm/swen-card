import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Article } from '$lib/types';

let data: Array<Article> = [];

// Returns a list of articles
export const GET: RequestHandler = async ({ fetch }) => {
  if(!data.length) {
    let response = await fetch("/fake_articles.json");
    data = JSON.parse(await response.text());
  }
  return json(data);
}
