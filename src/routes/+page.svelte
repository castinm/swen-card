<script lang="ts">
  let { data } = $props();
</script>

<div class="home py-64 flex items-center justify-center">
  <div class="w-[600px] h-auto">
    <h1 class="border-b">Welcome to swen</h1>
    <ul class="list flex flex-col items-start justify-center">
      {#each data.articles as article }
        <li class="cursor-pointer text-md">
          <a href="/news/{article.slug}">- { article.title }</a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  a:visited {
    color: steelblue;
  }
</style>
