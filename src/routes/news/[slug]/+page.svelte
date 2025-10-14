<script lang="ts">
  import NewsCard from "$lib/components/NewsCard/index.svelte";
  import type { Article } from "$lib/types";
  import type { PageData } from "./$types"

  let { data }: { data: PageData } = $props();
  let article: Article = $derived(data.article);
</script>

<div class="fixed flex items-center justify-center w-screen h-screen">
  <div class="wrapper flex items-start justify-center w-auto h-auto gap-16">
    <NewsCard article={article} type="default"/>
    <NewsCard article={article} type="long"/>
    <NewsCard article={article} type="recommended"/>
  </div>
</div>
