import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
  let response = await fetch(`/api/mock/news/${params.slug}`);
  let article = await response.json();
  return { article }
};
