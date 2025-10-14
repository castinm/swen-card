<script lang="ts">
  import { Side } from '$lib/types';
  import Front from './Front/index.svelte';
  import Back from './Back/index.svelte';


  let { article, type = 'default' } = $props();
  let side = $state(Side.Front);

  // Toggle card side
  const toggle_side = () =>
    side = side === Side.Front ? Side.Back : Side.Front;

  let image_url = $derived(article.media.featured_image_url);
</script>

<div class="card {type} rounded-md relative overflow-hidden text-white box-border">
  <div class="transition"></div>
  <div class="background absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('{image_url}');">
    <div class="overlay absolute inset-0 bg-[#232323] opacity-70"></div>
  </div>
  {#if side === Side.Front}
    <Front on_switch={toggle_side} {article} {type}/>
  {:else}
    <Back on_switch={toggle_side} {article} {type}/>
  {/if}
</div>

<style>
  .transition {
    z-index: 3;
  }

  :global(.head, .footer) {
    z-index: 2;
  }

  :global(.body) {
    z-index: 1;
  }

  .background {
    z-index: 0;
  }

  /* Different card types styling, structure is mostly the same so we only need to make a few css adjustments to get the 3 variants */
  .card {
    --padding: 15px 10px 15px 15px;
    width: 300px;
    padding: 15px;
  }
  .card.default {
    height: 200px;
  }
  .card.long {
    height: 450px;
    width: 300px;
  }
  .card.recommended {
    width: 600px;
    height: 450px;
    padding: 30px;
  }
</style>
