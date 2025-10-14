import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';
import type { Article } from '$lib/types.js';

let cache = new Map();
let data: Array<Article> = [];

// try to retreive article from in-memory cache, load it if we don't have it yet
async function with_cache(key: string, fetch: Function): Promise<Article | undefined> {
  if (cache.has(key))
    return cache.get(key)
  else {
    if (!data.length) {
      let response = await fetch("/fake_articles.json");
      data = JSON.parse(await response.text());
    }
    let item: Article | undefined = data.find(i => i.slug == key);
    cache.set(key, item);
    return item;
  }
}

/* Retrieve news article */
export const GET: RequestHandler = async ({ params, fetch}) => {
  let article: Article | undefined = await with_cache(params.slug, fetch);
  if (!article)
    return error(404, 'not found')
  return json(article);
}
