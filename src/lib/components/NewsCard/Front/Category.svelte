<script lang="ts">
  let { category } : { category: string } = $props();
</script>

<div class="category {category} text-white w-auto, h-[30px] px-[25px] rounded-[20px] flex items-center justify-center">
  { category }
</div>

<style>
  .category.local {
    background-color: #232323;
  }
  .category.international {
    background-color: #232323;
  }
</style>
