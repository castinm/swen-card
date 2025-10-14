<script lang="ts">
  import NewsCard from "$lib/components/NewsCard/index.svelte";
  import type { Article } from "$lib/types";
  import type { PageData } from "./$types"

  let { data }: { data: PageData } = $props();
  let article: Article = $derived(data.article);
</script>

<div class="container">
  <NewsCard article={article}/>
</div>

<style>
  .container {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
</style>
