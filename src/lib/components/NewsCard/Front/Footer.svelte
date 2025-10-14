<script lang="ts">

  let { on_switch } = $props();
</script>

<div class="footer absolute bottom-0 inset-x-0 h-[40px] bg-[#232323] flex items-center justify-between p-[15px] pr-[10px]">
  <div class="actions flex flex-nowrap items-center text-white">
    <div class="views flex items-center justify-between cursor-pointer">
      <span class="icon w-[15px] aspect-square"></span>
      17k
    </div>
    <div class="shares flex items-center justify-between cursor-pointer">
      <span class="icon w-[15px] aspect-square"></span>
      <span>8k</span>
    </div>
    <div class="opinions flex items-center justify-between cursor-pointer">
      <span class="icon w-[15px] aspect-square"></span>
      <span>22k</span>
    </div>
  </div>
  <button class="preview text-white bg-transparent cursor-pointer" onclick={on_switch}>
    Preview >
  </button>
</div>

<style>
  /* Icons */
</style>
