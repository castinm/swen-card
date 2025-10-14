<script lang="ts">
  import type { Article } from "$lib/types";
  import Footer from "./Footer.svelte";
  import Category from "./Category.svelte";
  import Options from "./Options.svelte";

  let { on_switch, article }: {
    on_switch: () => void,
    article: Article
  } = $props();

  let published_at = $derived(new Date(article.published_at).toDateString());
</script>

<div class="front">
  <div class="head absolute top-0 inset-x-0 bg-red-400 h-[54px] p-[15px] box-border flex items-center justify-between">
    <Category category={article.category}/>
    <Options/>
  </div>
  <div class="body absolute inset-0 flex flex-col items-start justify-center p-[15px] pr-[10px]">
    <div class="date">{published_at}</div>
    <div class="title">{article.title}</div>
  </div>
  <Footer {on_switch}/>
</div>
