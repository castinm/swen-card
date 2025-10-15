<script lang="ts">
  let { category, type } : { category: string, type: string } = $props();
</script>

<div class="category {category} {type} text-white w-auto rounded-[20px] flex items-center justify-center capitalize text-xs md:text-sm cursor-pointer">
  { category }
</div>

<style>
  .category.local {
    background-color: #FF6A7E;
  }

  /* card specific css */
  .category.default {
    height: 24px;
    padding: 0px 15px;
  }
  .category.long,.category.recommended {
    height: 32px;
    padding: 0px 25px;
  }

  /* Media queries for mobile responsiveness */
  @media screen and (max-width: 768px) {
    .category.default {
      height: 18px;
      padding: 0 10px;
    }
    .category.long,.category.recommended {
      height: 24px;
      padding: 0px 18.75px;
    }
  }
</style>
