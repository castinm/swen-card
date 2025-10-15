<script lang="ts">
  import { Side, type Article } from '$lib/types';
  import Front from './Front/index.svelte';
  import Back from './Back/index.svelte';


  let { article, type = 'default' } : { article: Article, type: string } = $props();
  let side = $state(Side.Front);

  // Toggle card side
  const toggle_side = () =>
    side = side === Side.Front ? Side.Back : Side.Front;

  let image_url = $derived(article.media.featured_image_url);
</script>

<div class="card {type} {side === Side.Front ? 'front': 'back'} rounded-md relative overflow-hidden text-white box-border">
  <div class="content rounded-md absolute inset-0">
    <div class="background absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('{image_url}');">
      <div class="overlay absolute inset-0 bg-[#232323] opacity-70"></div>
    </div>
    <Front on_switch={toggle_side} {article} {type}/>
    <Back on_switch={toggle_side} {article} {type}/>
  </div>
</div>

<style>
  .card {
    flex-shrink: 0;
  }
  .card .content {
    perspective: 1000px;
    transition: transform 800ms cubic-bezier(0.77, 0, 0.175, 1);
    transform-style: preserve-3d;
  }

  :global(.card .content .front, .card .content .back) {
    backface-visibility: hidden;
  }
  :global(.card .content .back) {
    transform: rotateY(180deg);
  }

  :global(.card.front .back) { z-index: 1; }
  :global(.card.front .front) { z-index: 2; }

  :global(.card.back .front) { z-index: 1; }
  :global(.card.back .back) { z-index: 2; }

  .card.back .content {
    transform: rotateY(180deg);
  }

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
    max-width: 100%;;
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

  @media screen and (max-width: 768px) {
  }
</style>
