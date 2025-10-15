<script lang="ts">

  let { on_switch, type } : {
    on_switch: () => void,
    type: string
  } = $props();
</script>

<div class="footer {type} absolute bottom-0 inset-x-0  bg-[#232323] flex items-center justify-between p-[15px] pr-[10px]">
  <div class="actions flex flex-nowrap items-center text-white">
    <div class="views flex items-center justify-between cursor-pointer">
      <span class="icon aspect-square flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="24px" fill="#fff">
          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
        </svg>
      </span>
      <span class="text-xs">17k</span>
    </div>
    <div class="shares flex items-center justify-between cursor-pointer">
      <span class="icon aspect-square flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="24px" fill="#fff">
          <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"/>
        </svg>
      </span>
      <span class="text-xs">8k</span>
    </div>
    <div class="opinions flex items-center justify-between cursor-pointer">
      <span class="icon aspect-square flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="24px" fill="#fff">
          <path d="m798-322-62-62q44-41 69-97t25-119q0-63-25-118t-69-96l62-64q56 53 89 125t33 153q0 81-33 153t-89 125ZM670-450l-64-64q18-17 29-38.5t11-47.5q0-26-11-47.5T606-686l64-64q32 29 50 67.5t18 82.5q0 44-18 82.5T670-450Zm-310 10q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H40Zm80-80h480v-32q0-11-5.5-20T580-266q-36-18-92.5-36T360-320q-71 0-127.5 18T140-266q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-600q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600q0 33 23.5 56.5T360-520Zm0-80Zm0 400Z"/>
        </svg>
      </span>
      <span class="text-xs">22k</span>
    </div>
  </div>
  <button class="preview text-white bg-transparent cursor-pointer flex items-center justify-center flex-nowrap" onclick={on_switch}>
    <span class="text-xs">Preview</span>
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
    </span>
  </button>
</div>

<style>
  /* Icons */
  .icon {
    width: 15px;
    height: 15px;
  }

  /* card specific css */
  .footer.default,
  .footer.long {
    height: 40px;
    padding: 15px 10px 15px 15px;
  }
  .footer.recommended {
    height: 60px;
    padding: 0px 30px;
  }
  .footer.recommended span {
    font-size: .9em;
  }
  .footer.default .actions,
  .footer.long .actions {
    gap: 15px;
  }
  .footer.recommended .actions {
    gap: 50px;
  }
  .preview:hover svg {
    transition: transform 500ms linear;
    transform: translateX(3px);
  }

  @media screen and (max-width: 768px) {
    .footer.recommended {
      height: 60px;
      padding: 0px 15px;
    }
  }
</style>
