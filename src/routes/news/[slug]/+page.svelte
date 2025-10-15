<script lang="ts">
  import NewsCard from "$lib/components/NewsCard/index.svelte";
  import type { Article } from "$lib/types";
  import type { PageData } from "./$types"

  let { data }: { data: PageData } = $props();
  let article: Article = $derived(data.article);
</script>

<div class="fixed flex items-center justify-center w-screen h-screen">
  <nav class="absolute top-0 left-0 px-4 md:px-96 p-4 text-white">
    <a href="/" class="flex items-center font-bold">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff" class="transform rotate-180">
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
      </svg>
      Back
    </a>
  </nav>
  <div class="wrapper relative w-full mt-20 pb-32 md:mt-0 md:pb-0 h-full md:w-auto md:h-auto flex flex-col md:flex-row overflow-auto items-start justify-start md:justify-center gap-4 md:gap-16 p-2 md:p-0">
    <NewsCard article={article} type="default"/>
    <NewsCard article={article} type="long"/>
    <NewsCard article={article} type="recommended"/>
  </div>
</div>
