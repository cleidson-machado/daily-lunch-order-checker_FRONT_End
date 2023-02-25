
<template>
  <footer class="text-center text-white" style="background-color: #0a4275">
    <div class="container p-6">
      <div class="">
        <p class="flex items-center justify-center">
          <span class="mr-4">Register for free</span>
          <button
            type="button"
            class="inline-block rounded-full border-2 border-neutral-50 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
            data-te-ripple-color="light">
            Sign up!
          </button>
        </p>
      </div>
    </div>

    <div
      class="p-4 text-center"
      style="background-color: rgba(0, 0, 0, 0.2)">
      © 2023 Copyright:
      <a class="text-white" href="https://tailwind-elements.com/"
        >Tailwind Elements</a
      >
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppFooter'
})

</script>