import type { Article } from "$lib/types";

export async function load({ fetch }) {
  let response = await fetch('/api/mock/news/list');
  let articles: Array<Article> = await response.json();
  return {
    articles
  }
}
