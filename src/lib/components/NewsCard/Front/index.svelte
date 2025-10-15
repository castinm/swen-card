<script lang="ts">
  import type { Article } from "$lib/types";
  import Footer from "./Footer.svelte";
  import Category from "./Category.svelte";
  import Options from "./Options.svelte";

  let { on_switch, article, type }: {
    on_switch: () => void,
    article: Article,
    type: string
  } = $props();

  // Format the raw ISO date string
  const format_date = (date_str: string) => {
    let date = new Date(date_str);
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'short' });
    const month_name = formatter.format(date);
    return `${month_name}. ${date.getDate()}, ${date.getFullYear()}`;
  }

  let published_at = $derived(format_date(article.published_at));
</script>

<div class="front rounded-md overflow-hidden absolute inset-0 {type}">
  <div class="head absolute inset-x-0 box-border flex items-center justify-between">
    <Category category={article.category} {type}/>
    <Options/>
  </div>
  <div class="body absolute inset-x-0 h-44 flex flex-col items-start justify-center text-xs md:text-base">
    <div class="date font-light text-sm">{published_at}</div>
    <div class="title font-bold text-base">{article.title}</div>
    {#if type === 'recommended'}
	    <div class="summary">{article.summary}</div>
    {/if}
  </div>
  <Footer {on_switch} {type}/>
</div>

<style>
  /* card specific css */
  /* .head */
  .front.default .head,
  .front.long .head {
    padding: 0px 15px;
    top: 15px;
  }

  .front.default .head {
    height: 24px;
  }
  .front.long .head,
  .front.recommended .head {
    height: 32px;
  }
  .front.recommended .head {
    top: 30px;
    padding: 0px  30px;
  }

  /* .body */
  .front .body {
    height: auto;
  }
  .front.default .body,
  .front.long .body {
    padding: 0px 15px;
    bottom: 55px;
  }
  .front.recommended .body {
    bottom: 90px;
    padding: 0px 30px;
    height: auto;
  }
  .front.long .body .date {
    margin-bottom: 15px;
  }
  .front.recommended .body .date {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    .front.default .head,
    .front.long .head {
      top: 10px;
      padding: 0 10px;
    }
    .front.recommended .head {
      top: 15px;
      padding: 0px 15px;
    }
    .front.default .body,
    .front.long .body {
      padding: 0px 10px;
      bottom: 55px;
    }
    .front.recommended .body {
      padding: 0px 15px;
    }
  }
</style>
