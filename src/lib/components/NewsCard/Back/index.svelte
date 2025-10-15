<script lang="ts">
  import type { Article } from "$lib/types";
  import { tick } from "svelte";

  let { on_switch, article, type }: {
    on_switch: () => void,
    article: Article,
    type: string
  } = $props();

  let body: HTMLDivElement | null = $state(null);
  let playing: boolean = $state(false);
  let video_loaded: boolean = $state(false);
  let video: HTMLVideoElement | null =  $state(null);

  // toggle video playback
  const toggle_playing = () => playing = !playing;

  // play or pause video on state change
  $effect(() => {
    if (!video) return;
    if (playing) {
      video.addEventListener('ended', () => playing = false);
      video.play();
    } else {
      video.pause();
    }
  })
</script>

<div class="back rounded-md overflow-hidden {type} absolute inset-0">
  <div class="head absolute inset-x-0 flex items-center justify-between">
    <div class="author flex items-center gap-[10px]">
      <div
        class="avatar w-[36px] aspect-square rounded-full overflow-hidden cursor-pointer bg-no-repeat bg-center bg-cover"
        style="background-image: url('/author.jpg');">
      </div>
      <span class="name text-xs md:text-sm font-bold">Wade Warren</span>
    </div>
    <div class="company w-[36px] aspect-square rounded overflow-hidden">
        <img src="/vice_logo.png" alt="company"/>
    </div>
  </div>
  <div bind:this={body} class="body absolute px-[15px] text-sm md:text-[15px] inset-x-0 h-[80px] overflow-hidden transition-all { playing && 'opacity-0' }">
    {article.body}
  </div>
  <div class="video-player absolute inset-0 ">
    <video
      bind:this={video}
      id="related_video"
      class="scale-[1.5] h-full w-full"
      class:opacity-0={!playing}
      playsinline={true}
      controls={false}>
      <source src="{article.media.related_video_url}" type="video/mp4"/>
      <track kind="captions"/>
    </video>
  </div>
  <div class="footer flex items-center justify-between absolute bottom-0 inset-x-0 p-[15px]">
    <div class="flex gap-[20px]">
      <button onclick={on_switch} class="cursor-pointer" aria-label="flip view">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate3d-icon lucide-rotate-3d">
            <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"/><path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"/></svg>
        </span>
      </button>
      {#if article.media.related_video_url.length }
        <div class="video flex items-center justify-center {playing ? 'playing' : 'paused'}">
          <button
            onclick={toggle_playing}
            class="rounded-full w-[30px] border h-[30px] aspect-square bg-center bg-no-repeat cursor-pointer"
            aria-label="play video"></button>
        </div>
      {/if}
    </div>
    <a href="#noop" class="cursor-pointer flex items-center justify-center gap-1 bg-[#FF6A7E] rounded text-xs w-[96px] h-[30px]">
      Read more
      <span class="inline-block w-[15px] aspect-square">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="18px" fill="#fff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
      </span>
    </a>
  </div>
</div>

<style>
  /* Card specific css */
  .back.default .head,
  .back.long .head {
    top: 15px;
    height: 36px;
    padding: 0px 15px;
  }
  .back.recommended .head {
    top: 30px;
    height: 32px;
    padding: 0px 30px;
  }
  .back .body {
    height: auto;
    display: -webkit-box;
    -webkit-line-clamp: 10; /* Number of lines to show */
    line-clamp: 10;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
  }
  .back.default .body {
    top: 66px;
    -webkit-line-clamp: 4; /* Number of lines to show */
    line-clamp: 4;
  }
  .back.long .body {
    top: 77px;
    max-height: 320px;
  }
  .back.recommended .body {
    top: 112px;
    padding: 0px 30px;
    max-height: 320px;
  }

  /* footer */
  .footer {
    padding: 15px;
  }
  .back.recommended .footer {
    padding: 30px;
  }

  /* video */
  .video button {
    background-size: 70%;
  }
  .video.playing button {
    background-image: url('/pause.svg');
  }
  .video.paused button {
    background-image: url('/play.svg');
  }

  @media screen and (max-width: 768px) {
    .back.default .body {
      top: 56px;
      -webkit-line-clamp: 8;
      line-clamp: 8;
    }
    .back.recommended .head {
      top: 15px;
      height: 32px;
      padding: 0px 15px;
    }
    .back.recommended .body {
      top: 112px;
      padding: 0px 15px;
      max-height: 320px;
    }
  }
  @media screen and (max-width: 456px) {
    .back.default .body {
      top: 56px;
      -webkit-line-clamp: 4;
      line-clamp: 4;
    }
  }
</style>
