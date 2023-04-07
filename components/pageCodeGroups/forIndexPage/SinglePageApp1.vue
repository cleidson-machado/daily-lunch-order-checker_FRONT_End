<template>
  <div>
    <the-menu-for-today /> <!-- HERE-COMPONENT -->
    <index-admin-modal1 /> <!-- HERE-MODAL-COMPONENT -->
    <order-table /> <!-- HERE-COMPONENT -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OrderTable from '~/components/pageCodeGroups/sharedStuff/OrdersDataTable1.vue'
import TheMenuForToday from '~/components/pageCodeGroups/forIndexPage/MenuForToday.vue';
import IndexAdminModal1 from '@/components/pageCodeGroups/forAdminPage/adminModal1.vue';

export default Vue.extend({
  name: 'SinglePageApp1',

  components: {
    OrderTable,
    TheMenuForToday,
    IndexAdminModal1,
  },

})
</script>