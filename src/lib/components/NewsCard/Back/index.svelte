<script lang="ts">
  import type { Article } from "$lib/types";

  let { on_switch, article }: {
    on_switch: () => void,
    article: Article
  } = $props();
</script>

<div class="back">
  <div class="head absolute top-0 inset-x-0 p-[15px] flex items-center justify-between">
    <div class="author flex items-center gap-[10px]">
      <div class="avatar w-[36px] aspect-square rounded-full border border-blue-600"></div>
      <span class="name">Wade Warren</span>
    </div>
    <div class="company w-[36px] aspect-square rounded overflow-hidden">
      <img src="/vice_logo.png" alt="company"/>
    </div>
  </div>
  <div class="body py-[50px]">
    <div class="content bg-red-400 h-[30px] textwr">
      {article.body}
    </div>
  </div>
  <div class="footer flex items-center justify-between absolute bottom-0 inset-x-0 p-[15px]">
    <button onclick={on_switch} class="cursor-pointer" aria-label="flip view">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate3d-icon lucide-rotate-3d">
          <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"/><path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"/></svg>
      </span>
    </button>
    <a href="#noop" class="cursor-pointer flex items-center justify-center gap-1 bg-red-300 rounded-lg text-xs w-[96px] h-[30px]">
      Read more
      <span class="inline-block w-[15px] aspect-square">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
      </span>
    </a>
  </div>
</div>

<style>
  .body .content {
    display: -webkit-box;          /* create a flexible box for clamping */
    line-clamp: 5;
    /* show only 5 lines */
    -webkit-box-orient: vertical;  /* vertical flow */
    overflow: hidden;              /* hide the rest */
    text-overflow: ellipsis;
  }
</style>
