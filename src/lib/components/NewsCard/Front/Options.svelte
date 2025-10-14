<script lang="ts">

  let open = $state(false);
  const toggle_open = () => open = !open;
</script>

<div class="options relative flex items-center justify-center">
  <button onclick={toggle_open} aria-label="toggle" class="options flex items-center justify-center cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
      <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/>
    </svg>
  </button>
  {#if open}
    <div class="menu bg-white rounded w-[107px] h-[98px] absolute top-[15px] right-0 text-[#232323] text-[10px] flex flex-col justify-between p-[10px] cursor-pointer">
      <div class="share h-[12px] flex items-center gap-[5px]">
        <span class="icon w-[12px] aspect-square bg-center bg-no-repeat bg-contain"></span>
        <span>Share</span>
      </div>
      <div class="save h-[12px] flex items-center gap-[5px]">
        <span class="icon w-[12px] aspect-square bg-center bg-no-repeat bg-contain"></span>
        <span>Save</span>
      </div>
      <div class="remove h-[12px] flex items-center gap-[5px]">
        <span class="icon w-[12px] aspect-square bg-center bg-no-repeat bg-contain">
        </span>
        <span>Remove</span>
      </div>
      <div class="report h-[12px] flex items-center gap-[5px]">
        <span class="icon w-[12px] aspect-square bg-center bg-no-repeat bg-contain"></span>
        <span>Report</span>
      </div>
    </div>
  {/if}
</div>

<style>
  .remove .icon {
    background-image: url('/thumbs_down.svg');
  }
  .share .icon {
    background-image: url('/share.svg');
  }
  .save .icon {
    background-image: url('/bookmark.svg');
  }
  .report .icon {
    background-image: url('/block.svg');
  }
</style>
