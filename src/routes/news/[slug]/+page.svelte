<script lang="ts">
  import NewsCard from "$lib/components/NewsCard/index.svelte";
  import type { Article } from "$lib/types";
  import type { PageData } from "./$types"

  let { data }: { data: PageData } = $props();
  let article: Article = $derived(data.article);
</script>

<div class="fixed flex items-center justify-center w-screen h-screen">
  <div class="wrapper relative w-full pb-8 md:pb-0 h-full md:w-auto md:h-auto flex flex-col md:flex-row overflow-auto items-start justify-start md:justify-center gap-4 md:gap-16 p-2 md:p-0">
    <NewsCard article={article} type="default"/>
    <NewsCard article={article} type="long"/>
    <NewsCard article={article} type="recommended"/>
  </div>
</div>
