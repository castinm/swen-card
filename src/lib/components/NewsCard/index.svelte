<script lang="ts">
  import { Side } from '$lib/types';
  import Front from './Front/index.svelte';
  import Back from './Back/index.svelte';


  let { article } = $props();
  let side = $state(Side.Front);

  // Toggle card side
  const toggle_side = () =>
    side = side === Side.Front ? Side.Back : Side.Front;

  let image_url = $derived(article.media.featured_image_url);
</script>

<div class="card rounded overflow-hidden">
  <div class="transition"></div>
  <div class="background absolute inset-0 bg-red-200">
    <img src={image_url} alt="{article.title}"/>
  </div>
  {#if side === Side.Front}
    <Front on_switch={toggle_side} {article}/>
  {:else}
    <Back on_switch={toggle_side} {article}/>
  {/if}
</div>

<style>
  .card {
    width: 300px;
    height: 200px;
    box-sizing: border-box;
    padding: 15px 10px 15px 15px;
    position: relative;
  }
</style>
