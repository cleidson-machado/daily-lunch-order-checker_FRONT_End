
<template>
  <footer class="w-full h-16 bg-violet-800 border-t-4 border-violet-500
            fixed left-0 bottom-0
            flex justify-center items-center
            text-white text-2xl
                                                          ">

    <div
      class="inline-flex shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      role="group">
      <button type="button"
        class="inline-block rounded-l bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
        data-te-ripple-init data-te-ripple-color="light">
        REGISTRE-SE
      </button>
      <button type="button" data-modal-target="admin-modal" data-modal-toggle="admin-modal"
        class="inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
        data-te-ripple-init data-te-ripple-color="light">
        ADMINISTRAÇÃO
      </button>
      <button type="button"
        class="inline-block rounded-r bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
        data-te-ripple-init data-te-ripple-color="light">
        RELATÓRIOS
      </button>
    </div>

    <!-- <index-admin-modal-1 /> MODAL DONT WORK HERE -->

  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import indexAdminModal1 from '@/components/pageCodeGroups/forAdminPage/adminModal1.vue';
import { initFlowbite } from 'flowbite';

export default Vue.extend({
  name: 'AppFooter',

  components: {
    indexAdminModal1,
  },

  mounted() {
    initFlowbite();

  },
})

</script>